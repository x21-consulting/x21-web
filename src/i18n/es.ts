import type { SiteContent } from './index';

// Contenido en español. Debe respetar la forma de `en` (SiteContent).
export const es: SiteContent = {
  meta: {
    defaultTitle: 'X21 — De la Reputación al Crecimiento',
    description:
      'Consultoría estratégica de reputación. Ayudamos a líderes, empresas, fundaciones y estructuras patrimoniales a crecer mejorando la gestión estratégica de la reputación y alineando las expectativas de sus grupos de interés.',
    ogLocale: 'es_ES',
    skip: 'Saltar al contenido principal',
    htmlLang: 'es',
  },

  nav: {
    items: [
      { label: 'Servicios', href: '#services' },
      { label: 'Equipo', href: '#team' },
      { label: 'Briefing', href: '/briefing' },
      { label: 'Por qué X21', href: '#why' },
    ],
    contact: 'Contacto',
    homeAria: 'X21 — inicio',
    switchAria: 'Cambiar de idioma',
    otherLangLabel: 'EN',
    otherLangName: 'English',
  },

  hero: {
    kicker: 'Consultoría estratégica de reputación',
    title: ['Reputación', 'y crecimiento'],
    body: 'Ayudamos a líderes, empresas, fundaciones y estructuras patrimoniales a crecer mejorando la gestión estratégica de la reputación y alineando las expectativas de sus grupos de interés.',
    primaryCta: { label: 'Empieza la conversación', href: '#contact' },
  },

  services: {
    eyebrow: 'Servicios',
    title: 'Qué hacemos',
    lead: 'Asesoramiento estratégico para la alta dirección y quienes toman las decisiones clave, centrado en lo que de verdad importa: legitimidad, ventaja competitiva, resiliencia e impacto reputacional.',
    image: '/services.jpg',
    imageCaption: 'Reputación para tiempos de cambio',
    learnMore: 'Saber más →',
    blocks: [
      {
        icon: 'affairs',
        title: 'Corporate Affairs',
        slug: 'corporate-affairs',
        tagline: 'El núcleo estratégico e institucional.',
        lead: 'Cuando la reputación es el activo en juego, la estrategia no se improvisa. En Corporate Affairs definimos el relato, protegemos el valor en las transacciones críticas y alineamos a las instituciones y grupos de interés que determinan tu margen para operar.',
        capabilities: [
          { title: 'Estrategia de reputación y relato', body: 'Un relato claro y defendible de quién eres y por qué importas — construido para resistir el escrutinio y guiar cada decisión y cada mensaje.' },
          { title: 'Due diligence reputacional en M&A', body: 'Sacamos a la luz el riesgo y el valor reputacional ocultos en una operación antes de que se conviertan en tu problema, para que negocies e integres con los ojos abiertos.' },
          { title: 'Informes periciales de reputación para litigios', body: 'Informes independientes y con base metodológica sobre la reputación y su daño, preparados para sostenerse como prueba pericial de parte.' },
          { title: 'Relación y apoyo a grupos de interés', body: 'Posicionamiento y diálogo con los inversores, reguladores, instituciones públicas, fundaciones y ONG cuyas expectativas configuran tu legitimidad.' },
        ],
        partners: ['Antonieta Mendoza', 'Claudio Vallejo'],
      },
      {
        icon: 'media',
        title: 'Relación con Medios',
        slug: 'media-relations',
        tagline: 'Visibilidad y voz.',
        lead: 'La visibilidad se gana, no se compra. Convertimos posiciones complejas en mensajes claros y colocamos tu voz donde cuenta — sobre todo cuando hay más en juego.',
        capabilities: [
          { title: 'Relación con medios', body: 'Construimos y mantenemos las relaciones con periodistas y medios que importan a tus audiencias.' },
          { title: 'Preparación de portavoces', body: 'Preparamos a tus líderes para hablar con claridad y autoridad — ante la prensa y bajo presión.' },
          { title: 'Mensajes para momentos decisivos', body: 'Mensajes afilados y alineados para los anuncios, operaciones y escrutinios que definen cómo te perciben.' },
        ],
        partners: ['Gemma Martín'],
      },
      {
        icon: 'risk',
        title: 'Gestión de Riesgos y Crisis',
        slug: 'risk-crisis',
        tagline: 'Anticipación y protección.',
        lead: 'La reputación se pierde más rápido de lo que se construye. Anticipamos lo que podría salir mal, reducimos la exposición y estamos a tu lado cuando llega la crisis — para contener el daño y reconstruir la confianza.',
        capabilities: [
          { title: 'Monitorización, sentimiento y detección de relatos', body: 'Escucha continua en prensa y redes, con IA para leer el sentimiento cambiante y detectar los relatos emergentes antes de que escalen.' },
          { title: 'Identificación y mitigación de riesgos', body: 'Mapeamos los riesgos reputacionales propios de tu negocio y ponemos en marcha planes antes de que se materialicen.' },
          { title: 'Gestión de crisis y recuperación de la confianza', body: 'Consejo sereno y ejecución durante la crisis, y una ruta estructurada para reconstruir la confianza después.' },
        ],
        partners: ['Juan Cardona'],
      },
    ],
    detail: {
      eyebrow: 'Servicios',
      ledBy: 'Dirigido por',
      cta: 'Empieza una conversación',
      back: '← Todos los servicios',
    },
  },

  team: {
    eyebrow: 'Equipo',
    title: 'Asesores de Reputación',
    image: '/team.jpg',
    lead: 'Reunimos a expertos en estrategia de reputación, analítica de datos y relación con grupos de interés para ayudar a diseñar, validar y gobernar planes estratégicos con inteligencia reputacional.',
    meetPartners: 'Conoce a los socios',
    members: [
      {
        name: 'Juan Cardona',
        title: 'CEO y Socio',
        area: 'Tecnología, Riesgos y Crisis Reputacional',
        icon: 'risk',
        photo: '/team-juan.jpg',
        email: 'jcardona@x21.consulting',
        linkedin: 'https://www.linkedin.com/in/jcardonasoriano/',
        bio: 'Asesor corporativo con 25 años de experiencia en comunicación estratégica, reputación y sostenibilidad. Ha ocupado puestos ejecutivos en LLYC, Corporate Excellence y Grupo Ferrovial. Ha asesorado al Gobierno de España en su estrategia de sostenibilidad.',
      },
      {
        name: 'Antonieta Mendoza',
        title: 'Socia',
        area: 'Corporate Affairs',
        icon: 'affairs',
        photo: '/team-antonieta.jpg',
        email: 'amendoza@x21.consulting',
        linkedin: 'https://www.linkedin.com/in/antonieta-mendoza-de-l%C3%B3pez-a9bb6a15b',
        bio: 'Profesional sénior de comunicación estratégica y relación con medios con más de 30 años de experiencia internacional en España, Estados Unidos y proyectos multirregionales. Ha posicionado a organizaciones y líderes en medios de primer nivel como Financial Times, Bloomberg, The Economist, CNN y BBC.',
      },
      {
        name: 'Claudio Vallejo',
        title: 'Socio',
        area: 'Corporate Affairs',
        icon: 'affairs',
        photo: '/team-claudio.jpg',
        email: 'cvallejo@x21.consulting',
        linkedin: 'https://www.linkedin.com/in/claudiovallejoaguilareal/',
        bio: 'Consultor sénior en comunicación, reputación y diplomacia pública con más de 30 años de experiencia internacional en España y América Latina. Ha ocupado puestos ejecutivos en LLYC, Kreab, CODERE, Ence y Unión Fenosa, liderando la comunicación corporativa, la gestión de crisis y la comunicación financiera —incluidos procesos de salida a bolsa— en los sectores de energía, celulosa, juego privado y servicios profesionales. Inició su carrera como Agregado Comercial en la Embajada de España en Ecuador, coordinando la actividad del ICEX y la diplomacia económica bilateral. Combina visión corporativa, experiencia multinacional y sensibilidad institucional, con proyectos en más de ocho países de dos continentes.',
      },
      {
        name: 'Gemma Martín',
        title: 'Asesora Sénior',
        area: 'Relación con Medios',
        icon: 'media',
        photo: '/team-gemma.jpg',
        email: 'gemmamartinpiquet@x21.consulting',
        linkedin: 'https://www.linkedin.com/in/gemma-martin-b166551/',
        bio: 'Profesional sénior de comunicación estratégica y relación con medios con más de 20 años de experiencia internacional en España, Estados Unidos y proyectos multirregionales (Europa, Oriente Medio, América y Asia). Ha liderado estrategias de comunicación corporativa e institucional en energía, infraestructuras, finanzas y sector público, posicionando a organizaciones y líderes en medios de primer nivel (Financial Times, Bloomberg, The Economist, CNN, BBC) y en foros internacionales (ONU, Davos, UE).',
      },
    ],
    quote: {
      text: 'La reputación corporativa es la palanca clave para que cualquier empresa crezca en el siglo XXI.',
      author: 'Juan Cardona',
      role: 'Fundador y CEO de X21',
    },
    page: {
      title: 'Nuestros socios',
      lead: 'Conoce a los socios de X21 — asesores sénior en corporate affairs, relación con medios, tecnología y crisis reputacional.',
      back: '← Volver al inicio',
      cta: 'Empieza la conversación',
      linkedin: 'LinkedIn',
    },
  },

  why: {
    eyebrow: 'Por qué X21',
    title: 'La ciencia de la reputación',
    image: '/why.jpg',
    lead: 'La mayoría de las herramientas de reputación miden la percepción. Nuestro modelo propietario GERS© va más allá: calibra hasta qué punto tu conducta se alinea con lo que tus grupos de interés esperan de ti. Validado científicamente e impulsado por IA y procesamiento del lenguaje natural para leer esas expectativas, conecta la reputación directamente con la recomendación y con un mayor Net Promoter Score (NPS): el comportamiento que hace crecer tu negocio.',
    pillars: [
      { label: 'Marca', body: 'Refuerza tu identidad corporativa para generar confianza y reconocimiento.' },
      { label: 'Desempeño', body: 'Cumple las expectativas de tus grupos de interés con un impacto medible.' },
      { label: 'Transparencia', body: 'Construye credibilidad con una comunicación clara y abierta.' },
      { label: 'Integridad', body: 'Consolida prácticas éticas para fortalecer las relaciones.' },
      { label: 'Propósito', body: 'Impulsa un cambio significativo y conecta con una misión mayor.' },
    ],
  },

  commitments: {
    eyebrow: 'Nuestros compromisos',
    title: 'Aquello por lo que puedes exigirnos',
    intro: 'Los principios que hay detrás de cada proyecto — válidos con quienquiera que trabajes y sea cual sea el encargo.',
    items: [
      { title: 'Socios, no pirámides', body: 'Quien gana el proyecto hace el proyecto. Consejo sénior de principio a fin, nunca delegado hacia abajo.' },
      { title: 'Evidencia antes que opinión', body: 'Medimos la reputación con nuestro modelo GERS© antes de asesorar sobre ella.' },
      { title: 'Franqueza antes que comodidad', body: 'Lo bastante independientes para decirte lo que preferirías no oír.' },
      { title: 'Discreción por defecto', body: 'El trabajo más importante es el que nadie ve.' },
    ],
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Tu crecimiento empieza aquí.',
    lead: 'Sea cual sea la vía por la que has llegado, hay una entrada — cuéntanos qué necesitas.',
    address: 'Velázquez, 34 — 7F, 28001 Madrid, España',
    addressUrl: 'https://maps.google.com/?q=Velázquez+34+Madrid',
    phoneLabel: '+34 910 623 660',
    phoneHref: 'tel:+34910623660',
    email: 'info@x21.consulting',
    linkedin: 'https://www.linkedin.com/company/x21-consulting/',
    meta: { office: 'Oficina', email: 'Email', community: 'Comunidad' },
    routes: {
      explore: { name: 'Explorar', desc: 'Descubre qué hacemos y cómo funciona el modelo GERS©.' },
      diagnose: { name: 'Diagnosticar', desc: 'Obtén un perfil de reputación al instante en dos minutos.' },
      propose: { name: 'Proponer', desc: 'Cuéntanos un proyecto y recibe una propuesta.' },
      crisis: { name: 'Crisis', desc: 'Una emergencia reputacional que no puede esperar.' },
    },
    crisis: {
      phoneHref: 'tel:+34618780772',
      phoneLabel: '+34 618 780 772',
      email: 'crisis@x21.consulting',
      now: 'Ahora mismo',
      note: 'Llama o escribe y hablas con una persona, no con una cola. O déjanos tus datos y te llamamos de inmediato.',
      submit: 'Solicitar una llamada urgente',
      thanks: 'Gracias — hemos recibido tu mensaje y te contactaremos de inmediato.',
      msgPlaceholder: '¿Qué está pasando?',
    },
    propose: {
      kicker: 'Cuéntanos tu proyecto',
      emailPlaceholder: 'Email profesional *',
      phonePlaceholder: 'Teléfono (opcional)',
      msgPlaceholder: '¿Qué te gustaría conseguir? Sector, reto, plazos…',
      submit: 'Solicitar una propuesta',
      thanks: 'Gracias — tu solicitud está en camino. Nos pondremos en contacto en breve.',
    },
    fields: { name: 'Nombre', company: 'Empresa', phone: 'Teléfono', email: 'Email' },
    consent: 'Acepto que X21 trate mis datos para responder a mi solicitud. Consulta nuestra <a href="{privacy}">política de privacidad</a>.',
  },

  diagnostic: {
    title: 'Autodiagnóstico de reputación — X21',
    description:
      'Evalúa a tu organización en las cinco dimensiones GERS© y su capacidad para gestionar la reputación, y obtén un perfil al instante.',
    eyebrow: 'Autodiagnóstico',
    heading: '¿Cómo de alineada está tu reputación?',
    lead: 'Un autodiagnóstico de 10 minutos basado en nuestro modelo GERS©. Puntúa cada dimensión según su importancia y según cómo la gestiona hoy tu organización, valora su madurez en la gestión de la reputación y obtén al instante tu perfil: brechas, índices y tu tipo de reputación. Al terminar, déjanos tus datos y nuestro equipo preparará tu análisis completo.',
    startCta: 'Empezar el diagnóstico',

    wizard: {
      stepOf: 'Paso {i} de {n}',
      next: 'Siguiente',
      back: 'Atrás',
      seeResults: 'Ver mis resultados',
      restart: 'Empezar de nuevo',
      incomplete: 'Responde todas las preguntas de este paso para continuar.',
    },

    scale: {
      importanceLabel: 'Importancia',
      managementLabel: 'Gestión actual',
      importance: ['Nada importante', 'Poco importante', 'Importancia media', 'Muy importante', 'Crítica'],
      management: ['Muy débil', 'Débil', 'Aceptable', 'Buena', 'Excelente'],
      agreement: ['Muy en desacuerdo', 'En desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'],
    },

    areasStep: {
      title: 'Las cinco dimensiones GERS©',
      intro: 'Para cada dimensión, indícanos qué importancia tiene para tu organización y cómo la gestiona hoy.',
    },
    areas: [
      {
        key: 'brand',
        label: 'Marca',
        importanceQ: '¿Qué importancia tiene para tu organización una marca fuerte y reconocida?',
        managementQ: '¿Cómo gestiona hoy tu organización su identidad de marca y su reconocimiento?',
        deep: [
          'Nuestra marca está claramente diferenciada de la competencia.',
          'Nuestros líderes son visibles y se asocian a la marca.',
        ],
      },
      {
        key: 'performance',
        label: 'Desempeño',
        importanceQ: '¿Qué importancia tiene para tu reputación cumplir los compromisos de forma consistente?',
        managementQ: '¿Con qué consistencia cumple hoy tu organización los compromisos que adquiere con sus grupos de interés?',
        deep: [
          'Podemos demostrar nuestro historial ante los grupos de interés.',
          'Gestionamos las expectativas antes de asumir compromisos.',
        ],
      },
      {
        key: 'transparency',
        label: 'Transparencia',
        importanceQ: '¿Qué importancia tiene para tu legitimidad una comunicación abierta y a tiempo?',
        managementQ: '¿Con qué transparencia comunica hoy tu organización, incluso cuando las noticias son difíciles?',
        deep: [
          'Divulgamos la información relevante de forma proactiva.',
          'Tenemos canales claros de diálogo con los grupos de interés.',
        ],
      },
      {
        key: 'integrity',
        label: 'Integridad',
        importanceQ: '¿Qué importancia tiene que las acciones de tu organización se correspondan con los valores que declara?',
        managementQ: '¿Hasta qué punto se alinean hoy las acciones cotidianas de tu organización con sus valores públicos?',
        deep: [
          'Contamos con mecanismos eficaces de ética y cumplimiento.',
          'Los incidentes se gestionan de forma coherente con nuestros valores.',
        ],
      },
      {
        key: 'purpose',
        label: 'Propósito',
        importanceQ: '¿Qué importancia tienen un propósito claro y un impacto positivo más allá de los resultados comerciales?',
        managementQ: '¿Con qué claridad articula y cumple hoy tu organización su propósito?',
        deep: [
          'Nuestro propósito está integrado en las decisiones de negocio.',
          'Medimos nuestro impacto más allá de los resultados financieros.',
        ],
      },
    ],

    priorityStep: {
      title: 'Prioridad y reto',
      chooseLabel: '¿Qué dimensión es tu prioridad ahora mismo?',
      urgencyLabel: '¿Qué urgencia tiene actuar sobre ella?',
      urgency: ['Nada urgente', 'Poco urgente', 'Urgencia media', 'Bastante urgente', 'Muy urgente'],
      challengeLabel: '¿Cuál es el principal reto reputacional al que te enfrentas?',
      challengePlaceholder: 'Descríbelo brevemente…',
    },

    maturityStep: {
      title: 'Madurez en la gestión de la reputación',
      intro: '¿En qué medida estás de acuerdo con cada afirmación sobre tu organización?',
      dims: [
        { key: 'governance', label: 'Gobernanza', q: 'La reputación tiene un responsable claro en la dirección o el consejo.' },
        { key: 'strategy', label: 'Estrategia y relato', q: 'Tenemos una estrategia de reputación y un relato definidos.' },
        { key: 'resources', label: 'Recursos', q: 'La gestión de la reputación cuenta con presupuesto y recursos suficientes.' },
        { key: 'measurement', label: 'Medición', q: 'Medimos nuestra reputación con datos y hacemos seguimiento en el tiempo.' },
        { key: 'culture', label: 'Cultura', q: 'Nuestra cultura sostiene la reputación en toda la organización.' },
        { key: 'crisis', label: 'Preparación ante crisis', q: 'Estamos preparados para responder con eficacia ante una crisis reputacional.' },
      ],
    },

    deepStep: {
      title: 'Profundicemos en {area}',
      intro: 'Algunas afirmaciones específicas sobre tu dimensión prioritaria.',
    },

    expectationsStep: {
      title: 'Expectativas',
      resultLabel: '¿Qué resultado te gustaría conseguir?',
      resultPlaceholder: 'El resultado que haría que todo esto mereciera la pena…',
      availabilityLabel: '¿Cuándo te gustaría actuar?',
      availability: [
        { value: 'now', label: 'De inmediato' },
        { value: 'quarter', label: 'Este trimestre' },
        { value: 'year', label: 'Este año' },
        { value: 'exploring', label: 'Solo explorando' },
      ],
      alignmentLabel: '¿Hasta qué punto está alineado tu equipo directivo en esto?',
    },

    results: {
      title: 'Tu perfil de reputación',
      imrLabel: 'Índice de Madurez Reputacional',
      iarLabel: 'Índice de Ambición Reputacional',
      imrHint: 'Dónde estás',
      iarHint: 'Hacia dónde quieres ir',
      radarAria: 'Radar de importancia frente a gestión actual en las cinco dimensiones GERS',
      radarImportance: 'Importancia',
      radarManagement: 'Gestión actual',
      quadrantLabel: 'Tu posición',
      quadrants: {
        highPotential: { name: 'Alto potencial', body: 'Ambición alta con margen para madurar: el momento ideal para invertir en reputación.' },
        advanced: { name: 'Referente', body: 'Ambición alta y gestión sólida: protege y demuestra tu ventaja.' },
        littleRoom: { name: 'Poco recorrido', body: 'Ambición y madurez más bajas: la reputación todavía no es una palanca que estés aprovechando.' },
        comfortable: { name: 'Consolidado', body: 'Gestión sólida con menor ambición: una buena base, con recorrido si elevas el listón.' },
      },
      profileLabel: 'Tu tipo de reputación',
      profiles: {
        exposed: { name: 'Expuesto', body: 'Falta lo básico: no hay un responsable ni una estrategia claros de reputación. Ese es el primer cuello de botella que resolver.' },
        blind: { name: 'A ciegas', body: 'La base existe, pero faltan medición y una cultura que la sostenga. Gestionas la reputación sin instrumentos.' },
        resilient: { name: 'Resiliente', body: 'Gestión sólida en todo y preparada para una crisis. Tu reputación es un activo real: sigue demostrándolo.' },
        advanced: { name: 'Avanzado', body: 'Sin bloqueos claros de estrategia ni de medición, aunque todavía sin una excelencia uniforme. Cierra las últimas brechas.' },
      },
      gapTitle: 'Tus mayores brechas',
      gapHint: 'Donde una dimensión importa mucho más de lo que hoy la gestionas.',
      coherenceTitle: 'Foco frente a la realidad',
      coherenceMatch: 'Tu prioridad ({priority}) coincide con tu mayor brecha: el foco está bien puesto.',
      coherenceMismatch: 'Tu mayor brecha está en {gap}, no en la dimensión que priorizaste ({priority}). Conviene revisarlo: es un punto ciego habitual.',
      recoTitle: 'Por dónde empezar',
      recoLead: 'Tu mayor brecha está en {gap}, justo lo que nuestro trabajo de {service} está pensado para cerrar.',
      recoCta: 'Ver {service} →',
      recoPartners: 'Dirigido por',
    },

    // Dimensión con mayor brecha → servicio recomendado (slug de services.blocks)
    recoMap: {
      brand: 'media-relations',
      performance: 'corporate-affairs',
      transparency: 'media-relations',
      integrity: 'corporate-affairs',
      purpose: 'corporate-affairs',
    },

    // Captura como "desbloqueo": los resultados de arriba se ven; el desglose
    // por dimensión, la recomendación y el informe completo requieren email.
    capture: {
      title: 'Desbloquea tu desglose completo',
      sub: 'Déjanos tus datos para ver tus brechas dimensión a dimensión y por dónde empezar, y recibe por email tu informe GERS© completo, elaborado por nuestro equipo.',
      namePlaceholder: 'Nombre',
      emailPlaceholder: 'Email profesional *',
      companyPlaceholder: 'Empresa',
      submit: 'Desbloquear y enviarme el informe',
    },
    thanksTitle: 'Tu informe completo está en camino.',
    thanksBody: 'Nos pondremos en contacto en breve con tu análisis GERS© completo, elaborado por nuestro equipo. Abajo tienes tu desglose detallado para ir empezando.',
  },

  briefing: {
    eyebrow: 'Trimestral',
    title: 'The Briefing',
    status: 'Primer número — Invierno 2026/27',
    teaser: 'Un nuevo briefing trimestral. Primer número en invierno de 2026/27 — suscríbete gratis.',
    lead: 'Lanzamos un briefing trimestral para la alta dirección: autopsias de crisis, hacia dónde se están moviendo las expectativas de los grupos de interés e ideas de nuestro Lab. El primer número llega en invierno de 2026/27 — suscríbete gratis para recibirlo.',
    teaserCta: 'Leer el Briefing →',
    expectLabel: 'Qué vas a encontrar',
    writingLabel: 'Publicaciones recientes',
    readOnLinkedin: 'Leer en LinkedIn →',
    issuesLabel: 'Números anteriores',
    back: '← Volver al inicio',
    subscribe: {
      placeholder: 'Email profesional',
      submit: 'Suscribirme',
      consent:
        'Acepto recibir el Briefing de X21 y que X21 trate mi email con esta finalidad. Consulta nuestra <a href="{privacy}">política de privacidad</a>.',
      thanks: 'Gracias — ya estás en la lista. El próximo briefing llegará a tu bandeja de entrada.',
    },
    expect: [
      { title: 'Autopsias de crisis', body: 'Qué pasó, qué revela la lente GERS y cuál es la lección — análisis de casos reputacionales recientes.' },
      { title: 'Expectativas en movimiento', body: 'Hacia dónde se mueven las expectativas de los grupos de interés en tu sector y qué significa para tu legitimidad.' },
      { title: 'Desde nuestro Lab', body: 'Lecturas y datos originales extraídos de nuestra investigación, cuando estén listos para compartir.' },
    ],
    articles: [
      {
        title: 'IA y riesgo reputacional: un reto creciente',
        summary: 'Por qué la IA se ha convertido en un riesgo reputacional de primer nivel — y qué revelan sobre ello las divulgaciones de las S&P 500.',
        date: 'Enero de 2025',
        url: 'https://www.linkedin.com/pulse/ai-reputational-risk-growing-challenge-xpectations21-csiyf/',
      },
      {
        title: 'Alinear expectativas e incentivos',
        summary: 'Cómo BlackRock integra la reputación en su sistema de incentivos y por qué alinear expectativas e incentivos multiplica el desempeño.',
        date: 'Noviembre de 2024',
        url: 'https://www.linkedin.com/pulse/aligning-expectations-incentives-embedding-reputation-incentive-du0nf/',
      },
      {
        title: 'Rising to Higher Ground',
        summary: "Lecciones de 'Higher Ground', de Alison Taylor, sobre tratar la ética como palanca estratégica y no como una casilla de cumplimiento.",
        date: 'Noviembre de 2024',
        url: 'https://www.linkedin.com/pulse/rising-higher-ground-lessons-from-alison-taylor-ethics-resilience-wazdf/',
      },
    ],
    issues: [],
  },

  footer: {
    trademark: 'X21 y GERS son marcas registradas.',
    legal: [
      { label: 'Aviso Legal', href: '/aviso-legal' },
      { label: 'Declaración de Accesibilidad', href: '/declaracion-de-accesibilidad' },
      { label: 'Mapa Web', href: '/mapa-web' },
    ],
  },

  forms: {
    sending: 'Enviando…',
    invalidEmail: 'Introduce un email válido.',
    needConsent: 'Acepta el aviso de tratamiento de datos.',
    needReach: 'Añade un teléfono o un email para que podamos contactarte.',
    genericError: 'Algo ha ido mal. Inténtalo de nuevo o escríbenos directamente.',
    networkError: 'Error de red. Inténtalo de nuevo o escríbenos directamente.',
  },

  legal: {
    crumbHome: 'Inicio',
    notice: {
      title: 'Aviso Legal',
      description: 'Condiciones Generales de Uso del Sitio Web — XPECTATIONS21 S.L.U.',
      heading: 'Condiciones Generales de Uso del Sitio Web',
      sections: [
        {
          h3: 'Datos identificativos',
          html: '<p>En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se facilita la siguiente información: el titular de <a href="https://x21.consulting/">www.x21.consulting</a> es <strong>XPECTATIONS21, S.L.U.</strong> (en adelante, <strong>X21</strong>), con CIF B44874667 y domicilio a estos efectos en C/ Costa Brava, 35, 1ºB, Esc. Dcha, 28034 (Madrid), y correo electrónico de contacto: jcardona@x21.consulting.</p>',
        },
        {
          h3: 'Usuarios',
          html: '<p><strong>Acceso y uso del portal:</strong> el acceso y/o uso de este portal de <strong>X21</strong> atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Estas condiciones serán de aplicación con independencia de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.</p><p><strong>Uso del portal:</strong> www.x21.consulting proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, «los contenidos») en Internet pertenecientes a <strong>X21</strong> y a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que, en su caso, fuera necesario para acceder a determinados servicios o contenidos.</p><p>En dicho registro, el USUARIO será responsable de aportar información veraz y lícita. Como consecuencia de este registro, al USUARIO se le podrá proporcionar una contraseña de la que será responsable, comprometiéndose a hacer un uso diligente y confidencial de la misma. El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios que <strong>X21</strong> ofrece a través de su sitio web y a no emplearlos para incurrir en actividades ilícitas o contrarias al orden público, la defensa nacional o la salud pública.</p><p>En cualquier caso, <strong>X21</strong> se reserva el derecho a modificar unilateralmente, en cualquier momento y sin previo aviso, la estructura y el diseño del sitio web, así como a modificar o eliminar los servicios, los contenidos y las condiciones de acceso y/o uso del sitio web. Del mismo modo, <strong>X21</strong> se reserva el derecho a modificar en cualquier momento las presentes condiciones de uso, así como cualesquiera otras condiciones particulares contenidas en el sitio web.</p>',
        },
        {
          h3: 'Protección de datos personales',
          html: '<p>En cumplimiento de lo dispuesto en el Reglamento (UE) 2016/679, General de Protección de Datos (RGPD), y en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, informamos al usuario de que los datos personales que facilite voluntariamente a través de nuestros medios de recogida de datos serán incorporados a las Actividades de Tratamiento de Datos Personales automatizadas de las que es titular <strong>X21</strong>. Ello se realiza con el fin de prestar nuestros servicios y mantenerle informado sobre cuestiones relativas a la actividad y los servicios de la empresa. Los campos marcados con «*» son obligatorios; la falta de cumplimentación de dichos campos impedirá al USUARIO disfrutar de determinados servicios e informaciones ofrecidos en el sitio web. Los datos recogidos serán tratados de forma confidencial.</p><p><strong>X21</strong> cumple plenamente la legislación vigente en materia de protección de datos personales y los compromisos de confidencialidad propios de su actividad. <strong>X21</strong> ha adoptado las medidas técnicas necesarias para mantener el nivel de seguridad exigido, según la naturaleza de los datos personales tratados y las circunstancias de su tratamiento, con el fin de evitar, en la medida de lo posible y de acuerdo con el estado de la técnica, su alteración, pérdida, tratamiento o acceso no autorizados. Para gestionar las finalidades indicadas, puede ser necesario comunicar los datos a encargados del tratamiento, empresas colaboradoras y administraciones públicas (que podrán verificar la exactitud de los datos).</p><p>Si el USUARIO facilita datos personales de terceros distintos de sí mismo, deberá, con carácter previo a su inclusión, informarles del contenido de esta cláusula, de conformidad con el Reglamento (UE) 2016/679 y la Ley Orgánica 3/2018, de 5 de diciembre.</p><p><strong>X21</strong>, como responsable de las Actividades de Tratamiento, garantiza el ejercicio de los derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad de los datos facilitados, de conformidad con el Reglamento (UE) 2016/679 y la Ley Orgánica 3/2018, de 5 de diciembre. El USUARIO podrá ejercer estos derechos en cualquier momento mediante solicitud escrita dirigida al domicilio social de la empresa, acompañada de copia de su DNI o pasaporte.</p><p><strong>X21</strong> garantiza que todas las comunicaciones comerciales dirigidas a sus clientes cumplen la normativa vigente. En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico y de la Ley 9/2014 General de Telecomunicaciones, se informa al USUARIO de que <strong>X21</strong> podrá remitirle por medios electrónicos información sobre productos y servicios de su interés, a lo que presta su consentimiento. Podrá revocar esta autorización en cualquier momento escribiéndonos a <a href="mailto:jcardona@x21.consulting">jcardona@x21.consulting</a>.</p>',
        },
        {
          h3: 'Uso de cookies',
          html: '<p>Se informa al USUARIO de que este sitio web utiliza cookies. Las cookies son pequeños archivos de texto que se instalan en el navegador del USUARIO para registrar su actividad, enviando un identificador anónimo que se almacena en el navegador. La finalidad de las cookies es facilitar la navegación, permitiendo, por ejemplo, que los USUARIOS registrados accedan a áreas, servicios, promociones o concursos reservados exclusivamente para ellos sin necesidad de identificarse en cada visita. Las cookies también pueden utilizarse para medir la audiencia, los parámetros de tráfico, el tiempo de navegación, la duración de la sesión y/o para controlar el progreso y el número de entradas.</p><p><strong>X21</strong> hará todo lo posible por implantar los mecanismos adecuados para recabar el consentimiento del USUARIO respecto de la instalación de las cookies que lo requieran. No obstante, de conformidad con la ley: (i) se entenderá que el USUARIO otorga su consentimiento si modifica la configuración de su navegador para deshabilitar las restricciones que impiden la entrada de cookies, y (ii) dicho consentimiento no será necesario para la instalación de las cookies estrictamente necesarias para prestar un servicio expresamente solicitado por el USUARIO.</p><p>Es posible que algunas cookies utilizadas en este sitio web no estén relacionadas con <strong>X21</strong>, ya que determinadas páginas incluyen contenidos incrustados procedentes de sitios web de terceros (como un vídeo de YouTube). Al proceder este contenido de otro sitio web, <strong>X21</strong> no controla la configuración de dichas cookies. Si desea cambiar la configuración de las cookies, debe consultar los sitios web de los terceros correspondientes para obtener más información.</p>',
        },
        {
          h3: 'Propiedad intelectual e industrial',
          html: '<p><strong>X21</strong>, por sí misma o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su sitio web, así como de los elementos contenidos en el mismo (a título enunciativo y no limitativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño). Queda expresamente prohibida la reproducción, distribución y comunicación pública, incluida la puesta a disposición, de la totalidad o parte de los contenidos de este sitio web, en cualquier soporte y por cualquier medio técnico, sin la autorización previa de <strong>X21</strong>. El USUARIO se compromete a respetar los derechos de propiedad intelectual e industrial titularidad de <strong>X21</strong>, y deberá abstenerse de suprimir, alterar, eludir o manipular cualquier dispositivo de protección o sistema de seguridad instalado en el sitio web.</p>',
        },
        {
          h3: 'Exclusión de garantías y responsabilidad',
          html: '<p><strong>X21</strong> no será responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionarse, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del sitio web o transmisión de virus o programas maliciosos o lesivos en los contenidos, pese a haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p><p><strong>X21</strong> no se responsabiliza de las deficiencias del servicio, de los problemas de la red de comunicaciones, de los problemas derivados del mal funcionamiento o uso de versiones no optimizadas de cualquier navegador, de los posibles errores de seguridad ni de los posibles daños que puedan causarse al sistema informático del USUARIO, a sus ficheros o documentos almacenados en él. Estas incidencias pueden deberse a la presencia de virus en el equipo del USUARIO, a averías telefónicas, interferencias, omisiones o desconexiones en el funcionamiento del sistema electrónico por causas ajenas a <strong>X21</strong>.</p><p><strong>X21</strong> tampoco se responsabiliza del conocimiento no autorizado por parte de terceros de las condiciones, características y circunstancias de acceso y uso que los USUARIOS hagan del sitio web y de sus servicios. Asimismo, <strong>X21</strong> declina toda responsabilidad por el uso ilícito, negligente, fraudulento o indebido del sitio web, de sus servicios o de sus contenidos por parte de los USUARIOS que vulnere estas Condiciones Generales, la buena fe, los usos generalmente aceptados o el orden público.</p>',
        },
        {
          h3: 'Modificaciones',
          html: '<p>El sitio web podrá utilizar cookies o tecnologías similares, que se regirán por lo dispuesto en la Política de Cookies, accesible en todo momento y respetando la confidencialidad y la privacidad del usuario. La Política de Cookies forma parte integrante de este Aviso Legal.</p>',
        },
        {
          h3: 'Navegación',
          html: '<p><strong>X21</strong> se reserva el derecho a realizar, sin previo aviso, las modificaciones que considere oportunas en el sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios prestados a través del mismo como la forma en que estos se presenten o se ubiquen en el portal.</p>',
        },
        {
          h3: 'Enlaces',
          html: '<p>En el caso de que en www.x21.consulting se incluyeran enlaces o hipervínculos a otros sitios de Internet, <strong>X21</strong> no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso X21 asumirá responsabilidad alguna por los contenidos de un enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, la calidad, la fiabilidad, la exactitud, la amplitud, la veracidad, la validez o la constitucionalidad de cualquier material o información contenida en tales hipervínculos u otros sitios de Internet. Asimismo, la inclusión de estas conexiones externas no implicará ningún tipo de asociación, fusión o participación con las entidades conectadas.</p>',
        },
        {
          h3: 'Derecho de exclusión',
          html: '<p><strong>X21</strong> se reserva el derecho a denegar o retirar el acceso a un USUARIO, sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan estas Condiciones Generales de Uso o ante cualquier indicio de uso fraudulento de los servicios ofrecidos.</p>',
        },
        {
          h3: 'Generalidades',
          html: '<p><strong>X21</strong> perseguirá el incumplimiento de las presentes condiciones, así como cualquier utilización indebida de su portal, ejerciendo todas las acciones civiles y penales que puedan corresponderle en derecho.</p>',
        },
        {
          h3: 'Modificación de las presentes condiciones y duración',
          html: '<p><strong>X21</strong> podrá modificar en cualquier momento las presentes condiciones, y dichas modificaciones se publicarán debidamente tal como aparecen aquí. La vigencia de las presentes condiciones dependerá de su publicación y estará en vigor hasta que sean modificadas por otras debidamente publicadas.</p>',
        },
        {
          h3: 'Legislación aplicable y jurisdicción',
          html: '<p>La relación entre <strong>X21</strong> y el USUARIO se regirá por la normativa española aplicable, y cualquier controversia se someterá a los Juzgados y Tribunales de Madrid (España).</p>',
        },
      ],
    },
    accessibility: {
      title: 'Declaración de Accesibilidad',
      description:
        'Compromiso de accesibilidad de Xpectations21 conforme a WCAG 2.1 y UNE-EN 301 549:2022.',
      html: '<p>Xpectations21 se compromete a hacer accesible su sitio web de conformidad con las normas de accesibilidad WCAG 2.1, que sirven como evidencia para cumplir los criterios de accesibilidad del Programa Kit Digital. El sitio web está estructurado conforme a los anexos de la norma UNE-EN 301 549:2022.</p><p>Esta declaración de accesibilidad se aplica al sitio web «Xpectations 21».</p>',
    },
    sitemap: {
      title: 'Mapa Web',
      description: 'Mapa web de x21.consulting.',
      mainLabel: 'Principal',
      legalLabel: 'Legal',
      home: 'Inicio',
    },
  },
};
