# Integración web → ERP (leads y autodiagnóstico)

La web de X21 es **estática**: no ejecuta código en servidor ni almacena datos.
Todos los formularios envían un `POST` con JSON al endpoint del ERP
(`PUBLIC_LEADS_ENDPOINT`, por defecto `https://erp.x21.consulting/api/leads`).

**El ERP es responsable de:** persistir en Supabase, crear/actualizar el lead en
el journey comercial, redactar (parte de) el informe con Anthropic y enviar el
email con Resend. Este documento define el contrato para implementarlo.

---

## 1. Endpoint y requisitos

- **Método:** `POST`
- **Content-Type:** `application/json`
- **CORS:** debe permitir el origen de la web (`https://x21.consulting`, y `www.`
  si se usa). Cabeceras: `Content-Type`. Método: `POST`.
- **Respuesta esperada por la web:** `200` con cuerpo `{ "ok": true }`.
  Cualquier otra cosa hace que la web muestre un error genérico al usuario.
- **Anti-spam (honeypot):** todos los payloads incluyen el campo `website`. Si
  llega **con valor**, es un bot → descartar (idealmente devolviendo `{ ok:true }`
  para no dar pistas). Si viene vacío, es legítimo.

Todos los payloads comparten estos campos comunes:

| Campo | Tipo | Notas |
|---|---|---|
| `intent` | string | Discrimina el tipo (ver abajo). |
| `source` | string | Origen concreto del formulario. |
| `locale` | `"en"` \| `"es"` | Idioma en que el usuario rellenó el formulario. |
| `consent` | boolean | Siempre `true` (la web no envía sin consentimiento). |
| `website` | string | Honeypot; vacío = humano. |

---

## 2. Tipos de payload

### 2.1. Leads de contacto — `intent: "crisis" | "propose"`
Origen: router de contacto de la home. `source: "router-crisis"` / `"router-propose"`.

```json
{
  "intent": "propose",
  "source": "router-propose",
  "locale": "es",
  "name": "Nombre Apellido",
  "email": "persona@empresa.com",
  "company": "Empresa S.L.",
  "phone": "+34 600 000 000",
  "message": "Texto libre del usuario",
  "consent": true,
  "website": ""
}
```

### 2.2. Suscripción al Briefing — `intent: "subscribe"`
Origen: página `/briefing`. `source: "briefing-page"`.

```json
{ "intent": "subscribe", "source": "briefing-page", "locale": "en",
  "email": "persona@empresa.com", "consent": true, "website": "" }
```

### 2.3. Autodiagnóstico — `intent: "diagnose"`
Origen: página `/diagnostic`. `source: "autodiagnostico"`. **Este es el rico.**
La web calcula TODO en el cliente y envía una fila plana ya lista:

```json
{
  "intent": "diagnose",
  "source": "autodiagnostico",
  "locale": "es",

  "name": "Nombre Apellido",
  "email": "persona@empresa.com",
  "company": "Empresa S.L.",
  "consent": true,
  "website": "",

  "IAR": 4.0,
  "IMR": 1.8,
  "quadrant": "highPotential",
  "perfil": "exposed",

  "area_prioritaria": "brand",
  "urgencia": 4,
  "contexto": "m_and_a",
  "reto": "Texto libre",
  "resultado_esperado": "Texto libre",
  "disponibilidad": "quarter",
  "alineacion_interna": 3,
  "suggested_session": "governance",

  "imp_brand": 4, "gest_brand": 2, "gap_brand": 2,
  "imp_performance": 4, "gest_performance": 3, "gap_performance": 1,
  "imp_transparency": 4, "gest_transparency": 1, "gap_transparency": 3,
  "imp_integrity": 4, "gest_integrity": 3, "gap_integrity": 1,
  "imp_purpose": 4, "gest_purpose": 3, "gap_purpose": 1,

  "b3_governance": 2, "b3_strategy": 2, "b3_resources": 4,
  "b3_measurement": 4, "b3_culture": 4, "b3_crisis": 4,

  "b35_brand_1": 3, "b35_brand_2": 3
}
```

**Diccionario de valores** (para etiquetar en el ERP):

- Escalas `imp_*`, `gest_*`, `b3_*`, `b35_*`, `urgencia`, `alineacion_interna`: enteros **1–5**.
- `gap_* = imp_* − gest_*` (rango −4…+4; positivo = importa más de lo que se gestiona).
- `IAR` (Índice de Ambición Reputacional) = media de `imp_*` (1–5, 2 decimales).
- `IMR` (Índice de Madurez Reputacional) = media de `gest_*` (1–5, 2 decimales).
- Dimensiones GERS (claves fijas): `brand, performance, transparency, integrity, purpose`.
- Capacidades de madurez (claves fijas): `governance, strategy, resources, measurement, culture, crisis`.
- `area_prioritaria`: una de las 5 dimensiones GERS.
- `b35_<area>_1/2`: profundización de la dimensión prioritaria (solo se envían las dos de esa área).
- `quadrant`: `highPotential | advanced | littleRoom | comfortable`.
- `perfil`: `exposed | blind | resilient | advanced`.
- `disponibilidad`: `now | quarter | year | exploring`.
- `contexto`: motivo del interés — `m_and_a | growth | digital | launch | strategy | restructuring | international | crisis | other`.
- `suggested_session`: tipo de sesión sugerida, derivada del `perfil` por la web
  (`governance | measurement | protection | optimization`; ver §3). El ERP puede
  usarla o sobrescribirla.

> El cálculo de `quadrant` y `perfil` ya lo hace la web (ver
> `src/components/pages/DiagnosticPage.astro`). El ERP puede confiar en los
> valores recibidos o recalcularlos desde las escalas si prefiere validarlos.

---

## 3. Qué debe hacer el ERP al recibir un `diagnose`

0. **Control de unicidad por email (una vez por empresa).** Antes de insertar,
   comprobar si ese `email` ya tiene un diagnóstico. Si ya existe, **no crear una
   fila duplicada** y responder con `HTTP 409` o `{ "ok": false, "code": "duplicate" }`.
   La web detecta esa respuesta y muestra "ya hemos recibido un diagnóstico con
   este email". (La web añade además un guard por email en el navegador, pero el
   control real es este, en el servidor.)
1. **Guardar el diagnóstico** en una tabla propia (p. ej. `diagnostics`), una
   fila por envío, con todos los campos anteriores + `created_at`.
2. **Crear/actualizar el Lead** (tabla `leads`) por email, para que aparezca en
   el journey comercial. Enlazar el diagnóstico al lead (FK por `email` o `lead_id`).
   Un buen **lead score** inicial: `quadrant` + `urgencia` + `disponibilidad`
   (p. ej. `highPotential` + urgencia alta + `now/quarter` = caliente).
3. **Redactar parte del informe con Anthropic** (`ANTHROPIC_API_KEY`): pasar las
   escalas, brechas, índices, perfil y textos libres al modelo para generar la
   narrativa del análisis (interpretación de brechas, prioridades, recomendación).
   Modelo sugerido: `claude-sonnet-5` (buen equilibrio coste/calidad para redacción).
   > Nota: el **benchmark sectorial está pendiente** (falta la baseline de
   > sectores). De momento el informe es cualitativo, sin comparación por sector.
4. **Enviar el email con Resend** (`RESEND_API_KEY`, remitente `RESEND_FROM`
   verificado en el dominio): entregar el informe (o un "hemos recibido tu
   diagnóstico, aquí tienes tu perfil" + el informe cuando esté listo). El
   **objetivo del email es proponer un encuentro**, y la sesión se **personaliza
   según el diagnóstico** (ver mapa abajo, campo `suggested_session`). Opcional:
   copia interna a `LEAD_NOTIFICATION_EMAIL` para avisar al equipo comercial.
5. Responder `{ "ok": true }`.

### Tipo de sesión propuesta según perfil

La web ya envía `suggested_session` derivada del `perfil`. El ERP la usa para
personalizar la invitación del email (nombres orientativos, ajústalos):

| `perfil` | `suggested_session` | Sesión propuesta | Foco |
|---|---|---|---|
| `exposed` | `governance` | Sesión de gobernanza y estrategia reputacional | Establecer responsable, estrategia y relato — la base que falta. |
| `blind` | `measurement` | Sesión de medición reputacional (GERS) | Poner instrumentos: medir y crear cultura que lo sostenga. |
| `resilient` | `protection` | Sesión de protección y ventaja reputacional | Proteger y demostrar una reputación ya sólida. |
| `advanced` | `optimization` | Sesión de optimización reputacional | Cerrar las últimas brechas hacia la excelencia. |

`contexto`, `area_prioritaria`, `urgencia` y `disponibilidad` afinan el tono y la
prioridad de la propuesta (p. ej. `contexto: "crisis"` → sesión urgente).

Para `crisis`/`propose`/`subscribe`: basta con crear/actualizar el lead (y, en
`subscribe`, alta en la lista del Briefing) y responder `{ "ok": true }`.

---

## 4. Variables de entorno (en el ERP, no en la web)

| Variable | Uso |
|---|---|
| `ANTHROPIC_API_KEY` | Redacción del informe extendido. |
| `ANTHROPIC_MODEL` | Opcional; por defecto `claude-sonnet-5`. |
| `RESEND_API_KEY` | Envío de email transaccional. |
| `RESEND_FROM` | Remitente verificado, p. ej. `X21 <informe@x21.consulting>`. |
| `LEAD_NOTIFICATION_EMAIL` | Opcional; aviso interno al equipo comercial. |
| *(Supabase)* | Credenciales de la BBDD del ERP ya existentes. |

---

## 5. Pendiente (fase 2)

- **Baseline sectorial** en Supabase y cruce con los datos de la empresa para
  reactivar la oferta de "informe comparado con tu sector" (hoy retirada de la web).
- **Panel de cohorte**: agregados sobre la tabla `diagnostics` (mapa de brechas,
  matriz madurez×ambición, distribución de perfiles).
