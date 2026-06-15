# X21 — Corporate landing

Landing corporativa de **XPECTATIONS21 S.L.U.** (`x21.consulting`), migrada de WordPress a un sitio estático en **Astro 5 + Vercel**.

## Stack

- **Astro 5** (salida 100% estática, sin SSR → sin adaptador)
- `@astrojs/sitemap` (genera `sitemap.xml` automáticamente)
- Tipografía: Cormorant Garamond (display) + Inter (texto), vía Google Fonts
- Sin dependencias de runtime ni base de datos

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run preview    # sirve dist/ localmente
```

## Estructura

```
src/
├── data/site.ts          ← TODO el contenido y los textos (editar aquí)
├── styles/global.css     ← tokens de marca (paleta, tipografía)
├── layouts/
│   ├── BaseLayout.astro  ← <head>, fuentes, SEO/OG
│   └── LegalLayout.astro ← layout de páginas legales
├── components/
│   ├── Nav.astro         ← navegación sticky + menú móvil
│   └── Footer.astro
└── pages/
    ├── index.astro                       → /
    ├── aviso-legal.astro                 → /aviso-legal
    ├── declaracion-de-accesibilidad.astro→ /declaracion-de-accesibilidad
    └── mapa-web.astro                    → /mapa-web
```

Para cambiar copy, datos de contacto, bloques de valor, etc., editar **`src/data/site.ts`**: no hace falta tocar componentes.

## Despliegue en Vercel

1. Crear el repo en la org `x21-consulting` (p. ej. `x21-consulting/x21-web`) y subir este proyecto.
2. En Vercel: **Add New → Project → Import** el repo. Vercel detecta Astro automáticamente
   (Build `astro build`, Output `dist`). No hace falta configurar nada más.
3. Deploy. Verás la URL de preview `x21-web.vercel.app` para revisar antes de tocar DNS.

## Migración de dominio (apex) — el paso delicado

`x21.consulting` es el dominio raíz. **Solo se toca el registro del apex; nada más.**

1. En Vercel → Project → **Settings → Domains** → añadir `x21.consulting` (y `www.x21.consulting`).
   Vercel mostrará el valor exacto del registro a crear.
2. En **ARSYS** (DNS), apuntar el apex al valor que indique Vercel:
   - registro `A` para `@` con la IP que muestre Vercel, **o** `ALIAS`/`ANAME` si ARSYS lo soporta;
   - `CNAME` para `www` → `cname.vercel-dns.com` (o el que indique Vercel).
3. **NO TOCAR**, bajo ningún concepto:
   - los registros **MX** (correo Google Workspace);
   - los **TXT** de SPF / DKIM / DMARC y verificación;
   - los **CNAME/A de subdominios** (`erp.`, `invoice.`, `media.`, `training.`, `core.`, `monitor.`…).
4. Mantener el WordPress vivo hasta que Vercel verifique el dominio y el deploy esté OK; recién
   entonces hacer el cambio del apex. Downtime ~0.
5. Tras propagar, dar de baja el hosting WordPress (los ~18 €/mes) — **confirmar antes qué incluye
   ese plan** para no perder el dominio/DNS si vinieran ahí.

## Pendientes / decisiones abiertas

- **Discrepancia de domicilio**: el aviso legal indica *C/ Costa Brava 35* (CIF B44874667) y el
  contacto de la home *Velázquez 34, 7F*. Se mantuvo cada texto tal cual estaba en el sitio original.
  Decidir si unificar.
- **Logo**: se usa un wordmark tipográfico "X21". Si se prefiere el PNG original
  (`X21_Logo_Blanco.png`), colocarlo en `public/` y referenciarlo en `Nav.astro`/`Footer.astro`.
- **Email del footer**: la home mostraba `info@X21.consulting` pero el enlace iba a
  `info@xpectations21.com`. Aquí se usa `info@x21.consulting`. Confirmar el correcto.
