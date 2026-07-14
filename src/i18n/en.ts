// Contenido en inglés. La forma de este objeto define el "contrato" que
// `es.ts` debe cumplir (ver `SiteContent` en index.ts).

export const en = {
  // ---- Metadatos globales / chrome ----
  meta: {
    defaultTitle: 'X21 — Reputation to Growth',
    description:
      'Strategic reputation advisory. We help leaders, companies, foundations and private wealth structures drive growth by enhancing strategic reputation management and aligning stakeholder expectations.',
    ogLocale: 'en_US',
    skip: 'Skip to main content',
    htmlLang: 'en',
  },

  nav: {
    items: [
      { label: 'Services', href: '#services' },
      { label: 'Team', href: '#team' },
      { label: 'Briefing', href: '/briefing' },
      { label: 'Why X21', href: '#why' },
    ],
    contact: 'Contact',
    homeAria: 'X21 — home',
    switchAria: 'Switch language',
    otherLangLabel: 'ES',
    otherLangName: 'Español',
  },

  hero: {
    kicker: 'Strategic reputation advisory',
    title: ['Reputation', 'to Growth'],
    body: 'We help leaders, companies, foundations and private wealth structures drive growth by enhancing strategic reputation management and aligning stakeholder expectations.',
    primaryCta: { label: 'Start the conversation', href: '#contact' },
  },

  services: {
    eyebrow: 'Services',
    title: 'What we do',
    lead: 'Strategic advisory for senior leadership and key decision-makers, focused on what really matters: legitimacy, competitive advantage, resilience, and reputational impact.',
    image: '/services.jpg',
    imageCaption: 'Reputation for changing times',
    learnMore: 'Learn more →',
    blocks: [
      {
        icon: 'affairs',
        title: 'Corporate Affairs',
        slug: 'corporate-affairs',
        tagline: 'The strategic and institutional core.',
        lead: "When reputation is the asset at stake, strategy can't be improvised. Corporate Affairs is where we set the narrative, protect value in critical transactions, and align the institutions and stakeholders that define your room to operate.",
        capabilities: [
          { title: 'Reputation strategy and narrative', body: 'A clear, defensible account of who you are and why you matter — built to hold up under scrutiny and to guide every decision and message.' },
          { title: 'Reputational due diligence in M&A', body: 'Surfacing the reputational risk and value hidden inside a transaction before they become your problem, so you negotiate and integrate with eyes open.' },
          { title: 'Expert reputation reports for litigation', body: 'Independent, methodologically grounded reports on reputation and its damage, prepared to stand as party-appointed expert evidence.' },
          { title: 'Stakeholder engagement and support', body: 'Positioning and dialogue with the investors, regulators, public institutions, foundations and NGOs whose expectations shape your legitimacy.' },
        ],
        partners: ['Antonieta Mendoza', 'Claudio Vallejo'],
      },
      {
        icon: 'media',
        title: 'Media Relations',
        slug: 'media-relations',
        tagline: 'Visibility and voice.',
        lead: 'Visibility is earned, not bought. We turn complex positions into clear messages and put your voice where it counts — above all when the stakes are highest.',
        capabilities: [
          { title: 'Media relations', body: 'Building and sustaining the relationships with journalists and outlets that matter to your audiences.' },
          { title: 'Spokesperson preparation', body: 'Readying your leaders to speak with clarity and authority — on the record and under pressure.' },
          { title: 'Messaging for high-stakes moments', body: 'Sharp, aligned messaging for the announcements, transactions and scrutiny that define how you are perceived.' },
        ],
        partners: ['Gemma Martín'],
      },
      {
        icon: 'risk',
        title: 'Risk & Crisis Management',
        slug: 'risk-crisis',
        tagline: 'Anticipation and protection.',
        lead: 'Reputation is lost faster than it is built. We anticipate what could go wrong, reduce the exposure, and stand beside you when a crisis hits — to contain the damage and rebuild trust.',
        capabilities: [
          { title: 'Monitoring, sentiment and narrative detection', body: 'Continuous listening across press and social, using AI to read shifting sentiment and catch emerging narratives before they escalate.' },
          { title: 'Risk identification and mitigation', body: 'Mapping the reputational risks specific to your business and putting plans in place before they materialize.' },
          { title: 'Crisis management and trust recovery', body: 'Clear-headed counsel and execution through the crisis, and a structured path to rebuild trust afterwards.' },
        ],
        partners: ['Juan Cardona'],
      },
    ],
    // Página de detalle de servicio
    detail: {
      eyebrow: 'Services',
      ledBy: 'Led by',
      cta: 'Start a conversation',
      back: '← All services',
    },
  },

  team: {
    eyebrow: 'Team',
    title: 'Reputation Advisors',
    image: '/team.jpg',
    lead: 'We bring together experts in reputation strategy, data analytics, and stakeholder engagement to help design, validate, and govern strategic plans with reputational intelligence.',
    meetPartners: 'Meet our partners',
    members: [
      {
        name: 'Juan Cardona',
        title: 'CEO & Partner',
        area: 'Technology, Risks and Reputational Crisis',
        icon: 'risk',
        photo: '/team-juan.jpg',
        email: 'jcardona@x21.consulting',
        linkedin: 'https://www.linkedin.com/in/jcardonasoriano/',
        bio: 'Corporate advisor with 25 years of experience in strategic communications, reputation and sustainability. He has held executive positions at LLYC, Corporate Excellence and Grupo Ferrovial. He has advised the Government of Spain on its sustainability strategy.',
      },
      {
        name: 'Antonieta Mendoza',
        title: 'Partner',
        area: 'Corporate Affairs',
        icon: 'affairs',
        photo: '/team-antonieta.jpg',
        email: 'amendoza@x21.consulting',
        linkedin: 'https://www.linkedin.com/in/antonieta-mendoza-de-l%C3%B3pez-a9bb6a15b',
        bio: 'Senior strategic communications and media relations professional with over 30 years of international experience across Spain, the United States and multi-regional projects. She has positioned organizations and leaders in top-tier media such as the Financial Times, Bloomberg, The Economist, CNN and BBC.',
      },
      {
        name: 'Claudio Vallejo',
        title: 'Partner',
        area: 'Corporate Affairs',
        icon: 'affairs',
        photo: '/team-claudio.jpg',
        email: 'cvallejo@x21.consulting',
        linkedin: 'https://www.linkedin.com/in/claudiovallejoaguilareal/',
        bio: 'Senior consultant in communications, reputation and public diplomacy with over 30 years of international experience across Spain and Latin America. He has held executive positions at LLYC, Kreab, CODERE, Ence and Unión Fenosa, leading corporate communications, crisis management and financial communications — including IPO processes — across energy, pulp, private gaming and professional services. He began his career as Commercial Attaché at the Embassy of Spain in Ecuador, coordinating ICEX activity and bilateral economic diplomacy. He combines corporate vision, multinational experience and institutional sensibility, with projects in more than eight countries across two continents.',
      },
      {
        name: 'Gemma Martín',
        title: 'Senior Advisor',
        area: 'Media Relations',
        icon: 'media',
        photo: '/team-gemma.jpg',
        email: 'gemmamartinpiquet@x21.consulting',
        linkedin: 'https://www.linkedin.com/in/gemma-martin-b166551/',
        bio: 'Senior strategic communications and media relations professional with over 20 years of international experience across Spain, the United States and multi-regional projects (Europe, the Middle East, the Americas and Asia). She has led corporate and institutional communications strategies across energy, infrastructure, finance and the public sector, positioning organizations and leaders in top-tier media (Financial Times, Bloomberg, The Economist, CNN, BBC) and at international forums (UN, Davos, EU).',
      },
    ],
    quote: {
      text: 'Corporate reputation is the key lever for any company to grow in the 21st Century.',
      author: 'Juan Cardona',
      role: 'X21 Founder & CEO',
    },
    // Página /team
    page: {
      title: 'Our partners',
      lead: 'Meet the X21 partners — senior advisors in corporate affairs, media relations, technology and reputational crisis.',
      back: '← Back to home',
      cta: 'Start the conversation',
      linkedin: 'LinkedIn',
    },
  },

  why: {
    eyebrow: 'Why X21',
    title: 'The science of reputation',
    image: '/why.jpg',
    lead: 'Most reputation tools measure perception. Our proprietary GERS© model goes deeper — gauging how closely your conduct aligns with what stakeholders expect of you. Scientifically validated and powered by AI and natural-language processing to read those expectations, it connects reputation directly to advocacy and a higher Net Promoter Score (NPS): the behavior that grows your business.',
    pillars: [
      { label: 'Brand', body: 'Enhance your corporate identity to foster trust and recognition.' },
      { label: 'Performance', body: 'Meet stakeholder expectations through measurable impact.' },
      { label: 'Transparency', body: 'Build credibility with clear and open communication.' },
      { label: 'Integrity', body: 'Reinforce ethical practices to strengthen relationships.' },
      { label: 'Purpose', body: 'Drive meaningful change and connect with a greater mission.' },
    ],
  },

  commitments: {
    eyebrow: 'Our commitments',
    title: 'What you can hold us to',
    intro: 'The principles behind every engagement — true whoever you work with, and whatever the brief.',
    items: [
      { title: 'Partners, not pyramids', body: 'The people who win the work do the work. Senior counsel throughout, never delegated down.' },
      { title: 'Evidence before opinion', body: 'We measure reputation with our GERS© model before we advise on it.' },
      { title: 'Candor over comfort', body: "Independent enough to tell you what you'd rather not hear." },
      { title: 'Discretion as default', body: 'The most important work is the work no one sees.' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Your growth starts here.',
    lead: "However you arrived, there's a way in — tell us what you need.",
    address: 'Velázquez, 34 — 7F, 28001 Madrid, Spain',
    addressUrl: 'https://maps.google.com/?q=Velázquez+34+Madrid',
    phoneLabel: '+34 910 623 660',
    phoneHref: 'tel:+34910623660',
    email: 'info@x21.consulting',
    linkedin: 'https://www.linkedin.com/company/x21-consulting/',
    meta: { office: 'Office', email: 'Email', community: 'Community' },
    routes: {
      explore: { name: 'Explore', desc: 'See what we do and how the GERS© model works.' },
      diagnose: { name: 'Diagnose', desc: 'Get an instant reputation profile in two minutes.' },
      propose: { name: 'Propose', desc: 'Tell us about a project and get a proposal.' },
      crisis: { name: 'Crisis', desc: "A reputational emergency that can't wait." },
    },
    crisis: {
      phoneHref: 'tel:+34618780772',
      phoneLabel: '+34 618 780 772',
      email: 'crisis@x21.consulting',
      now: 'Right now',
      note: 'Call or email and you reach a person, not a queue. Or leave your details and we call you back immediately.',
      submit: 'Request an urgent call',
      thanks: "Thank you — we've received your message and will contact you right away.",
      msgPlaceholder: "What's happening?",
    },
    propose: {
      kicker: 'Tell us about your project',
      emailPlaceholder: 'Work email *',
      phonePlaceholder: 'Phone (optional)',
      msgPlaceholder: 'What would you like to achieve? Sector, challenge, timeline…',
      submit: 'Request a proposal',
      thanks: "Thank you — your request is on its way. We'll be in touch shortly.",
    },
    fields: { name: 'Name', company: 'Company', phone: 'Phone', email: 'Email' },
    consent: 'I agree that X21 may process my data to respond to my request. See our <a href="{privacy}">privacy policy</a>.',
  },

  diagnostic: {
    title: 'Reputation self-diagnostic — X21',
    description:
      'Assess your organization across the five GERS© dimensions and your capacity to manage reputation — and get an instant profile.',
    eyebrow: 'Self-diagnostic',
    heading: 'How aligned is your reputation?',
    lead: 'A 10-minute self-diagnostic built on our GERS© model. Rate each dimension by importance and by how well you manage it today, add your reputation-management maturity, and get an instant profile: gaps, indices and your reputation type. For a full, sector-benchmarked assessment, leave your details at the end.',
    startCta: 'Start the diagnostic',

    wizard: {
      stepOf: 'Step {i} of {n}',
      next: 'Next',
      back: 'Back',
      seeResults: 'See my results',
      restart: 'Start over',
      incomplete: 'Please answer every question on this step to continue.',
    },

    scale: {
      importanceLabel: 'Importance',
      managementLabel: 'How you manage it today',
      importance: ['Not important', 'Slightly', 'Moderately', 'Very', 'Critical'],
      management: ['Very weak', 'Weak', 'Fair', 'Strong', 'Excellent'],
      agreement: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree'],
    },

    areasStep: {
      title: 'The five GERS© dimensions',
      intro: 'For each dimension, tell us how important it is to your organization and how well you manage it today.',
    },
    areas: [
      {
        key: 'brand',
        label: 'Brand',
        importanceQ: 'How important is a strong, recognized brand to your organization?',
        managementQ: 'How well do you manage your brand identity and recognition today?',
        deep: [
          'Our brand is clearly differentiated from our competitors.',
          'Our leadership is visible and associated with the brand.',
        ],
      },
      {
        key: 'performance',
        label: 'Performance',
        importanceQ: 'How important is consistently delivering on your commitments to your reputation?',
        managementQ: 'How consistently do you deliver on the commitments you make to stakeholders?',
        deep: [
          'We can evidence our track record to stakeholders.',
          'We manage expectations before we make commitments.',
        ],
      },
      {
        key: 'transparency',
        label: 'Transparency',
        importanceQ: 'How important is open, timely communication to your legitimacy?',
        managementQ: 'How openly do you communicate today, including when the news is difficult?',
        deep: [
          'We disclose material information proactively.',
          'We have clear channels for stakeholder dialogue.',
        ],
      },
      {
        key: 'integrity',
        label: 'Integrity',
        importanceQ: 'How important is it that your actions match your stated values?',
        managementQ: 'How well do your day-to-day actions align with your public values today?',
        deep: [
          'We have effective ethics and compliance mechanisms.',
          'Incidents are handled consistently with our values.',
        ],
      },
      {
        key: 'purpose',
        label: 'Purpose',
        importanceQ: 'How important is a clear purpose and positive impact beyond commercial results?',
        managementQ: 'How well do you articulate and deliver on your purpose today?',
        deep: [
          'Our purpose is embedded in our business decisions.',
          'We measure our impact beyond financial results.',
        ],
      },
    ],

    priorityStep: {
      title: 'Priority and challenge',
      chooseLabel: 'Which dimension is your top priority right now?',
      urgencyLabel: 'How urgent is acting on it?',
      urgency: ['Not urgent', 'Low', 'Moderate', 'High', 'Extremely urgent'],
      challengeLabel: 'What is the main reputational challenge you face?',
      challengePlaceholder: 'Briefly describe it…',
    },

    maturityStep: {
      title: 'Reputation-management maturity',
      intro: 'How much do you agree with each statement about your organization?',
      dims: [
        { key: 'governance', label: 'Governance', q: 'Reputation has a clear owner at senior or board level.' },
        { key: 'strategy', label: 'Strategy & narrative', q: 'We have a defined reputation strategy and narrative.' },
        { key: 'resources', label: 'Resources', q: 'Reputation management has adequate budget and resources.' },
        { key: 'measurement', label: 'Measurement', q: 'We measure our reputation with data and track it over time.' },
        { key: 'culture', label: 'Culture', q: 'Our culture supports and sustains reputation across the organization.' },
        { key: 'crisis', label: 'Crisis-readiness', q: 'We are prepared to respond effectively to a reputational crisis.' },
      ],
    },

    deepStep: {
      title: 'A closer look at {area}',
      intro: 'A few statements specific to your priority dimension.',
    },

    expectationsStep: {
      title: 'Expectations',
      resultLabel: 'What outcome would you like to achieve?',
      resultPlaceholder: 'The result that would make this worthwhile…',
      availabilityLabel: 'When would you want to act?',
      availability: [
        { value: 'now', label: 'Right away' },
        { value: 'quarter', label: 'This quarter' },
        { value: 'year', label: 'This year' },
        { value: 'exploring', label: 'Just exploring' },
      ],
      alignmentLabel: 'How aligned is your leadership team on this?',
    },

    results: {
      title: 'Your reputation profile',
      imrLabel: 'Reputation Maturity Index',
      iarLabel: 'Reputation Ambition Index',
      imrHint: 'Where you are',
      iarHint: 'Where you want to go',
      radarAria: 'Radar of importance versus current management across the five GERS dimensions',
      radarImportance: 'Importance',
      radarManagement: 'Current management',
      quadrantLabel: 'Your position',
      quadrants: {
        highPotential: { name: 'High potential', body: 'High ambition with room to mature — the ideal moment to invest in reputation.' },
        advanced: { name: 'Advanced', body: 'High ambition and strong management — protect and prove your edge.' },
        littleRoom: { name: 'Limited traction', body: 'Lower ambition and maturity — reputation is not yet a lever you are pulling.' },
        comfortable: { name: 'Consolidated', body: 'Strong management with lower ambition — solid, with upside if you raise the bar.' },
      },
      profileLabel: 'Your reputation type',
      profiles: {
        exposed: { name: 'Exposed', body: 'The basics are missing — no clear ownership or strategy for reputation. That is the first bottleneck to resolve.' },
        blind: { name: 'Flying blind', body: 'The foundation exists, but you lack measurement and a culture that sustains it. You are managing reputation without instruments.' },
        resilient: { name: 'Resilient', body: 'Strong across the board and ready for a crisis. Your reputation is a genuine asset — keep proving it.' },
        advanced: { name: 'Advanced', body: 'No clear strategic or measurement blockage, but not yet uniform excellence. Close the last gaps.' },
      },
      gapTitle: 'Your biggest gaps',
      gapHint: 'Where a dimension matters far more than you currently manage it.',
      coherenceTitle: 'Focus vs. reality',
      coherenceMatch: 'Your priority ({priority}) matches your largest gap — your focus is well placed.',
      coherenceMismatch: 'Your largest gap is in {gap}, not the dimension you prioritized ({priority}). Worth a second look — this is a common blind spot.',
      recoTitle: 'Where to focus',
      recoLead: 'Your biggest gap is in {gap}. This is exactly what our {service} work is built to close.',
      recoCta: 'Explore {service} →',
      recoPartners: 'Led by',
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
      title: 'Unlock your full breakdown',
      sub: 'Leave your details to reveal your dimension-by-dimension gaps and where to focus — and get your full, sector-benchmarked GERS© report by email.',
      namePlaceholder: 'Name',
      emailPlaceholder: 'Work email *',
      companyPlaceholder: 'Company',
      submit: 'Unlock and send my report',
    },
    thanksTitle: 'Your full report is on its way.',
    thanksBody: 'We will be in touch shortly with your complete, sector-benchmarked GERS© assessment. Below is your detailed breakdown to get started.',
  },

  briefing: {
    eyebrow: 'Quarterly',
    title: 'The Briefing',
    status: 'First issue — Winter 2026/27',
    teaser: 'A new quarterly briefing. First issue Winter 2026/27 — subscribe free.',
    lead: "We're launching a quarterly briefing for senior leaders: crisis autopsies, where stakeholder expectations are shifting, and insights from our Lab. The first issue arrives Winter 2026/27 — subscribe free to receive it.",
    teaserCta: 'Read the Briefing →',
    expectLabel: 'What to expect',
    writingLabel: 'Recent writing',
    readOnLinkedin: 'Read on LinkedIn →',
    issuesLabel: 'Past issues',
    back: '← Back home',
    subscribe: {
      placeholder: 'Work email',
      submit: 'Subscribe',
      consent:
        'I agree to receive the X21 Briefing and that X21 may process my email for this purpose. See our <a href="{privacy}">privacy policy</a>.',
      thanks: "Thank you — you're on the list. The next briefing will land in your inbox.",
    },
    expect: [
      { title: 'Crisis autopsies', body: 'What happened, what the GERS lens reveals, and the lesson — read on recent reputational events.' },
      { title: 'Shifting expectations', body: 'Where stakeholder expectations are moving in your sector, and what that means for legitimacy.' },
      { title: 'From our Lab', body: 'Original reads and data drawn from our research, when they are ready to share.' },
    ],
    articles: [
      {
        title: 'AI and Reputational Risk: A Growing Challenge',
        summary: 'Why AI has become a board-level reputational risk — and what S&P 500 disclosures reveal about it.',
        date: 'January 2025',
        url: 'https://www.linkedin.com/pulse/ai-reputational-risk-growing-challenge-xpectations21-csiyf/',
      },
      {
        title: 'Aligning Expectations and Incentives',
        summary: 'How BlackRock embeds reputation into its incentive system, and why aligning expectations with incentives compounds performance.',
        date: 'November 2024',
        url: 'https://www.linkedin.com/pulse/aligning-expectations-incentives-embedding-reputation-incentive-du0nf/',
      },
      {
        title: 'Rising to Higher Ground',
        summary: "Lessons from Alison Taylor's 'Higher Ground' on treating ethics as a strategic enabler, not a compliance checkbox.",
        date: 'November 2024',
        url: 'https://www.linkedin.com/pulse/rising-higher-ground-lessons-from-alison-taylor-ethics-resilience-wazdf/',
      },
    ] as { title: string; summary: string; date: string; url: string }[],
    issues: [] as { label: string; href: string }[],
  },

  footer: {
    trademark: 'X21 and GERS are registered trademarks.',
    legal: [
      { label: 'Legal Notice', href: '/aviso-legal' },
      { label: 'Accessibility Statement', href: '/declaracion-de-accesibilidad' },
      { label: 'Site Map', href: '/mapa-web' },
    ],
  },

  // Formularios: mensajes de estado compartidos (usados desde JS de cliente)
  forms: {
    sending: 'Sending…',
    invalidEmail: 'Please enter a valid email.',
    needConsent: 'Please accept the data processing notice.',
    needReach: 'Add a phone or email so we can reach you.',
    genericError: 'Something went wrong. Please try again or email us directly.',
    networkError: 'Network error. Please try again or email us directly.',
  },

  legal: {
    crumbHome: 'Home',
    notice: {
      title: 'Legal Notice',
      description: 'General Terms and Conditions of Website Use — XPECTATIONS21 S.L.U.',
      heading: 'General Terms and Conditions of Website Use',
      sections: [
        {
          h3: 'Identification data',
          html: '<p>In compliance with the duty of information set forth in Article 10 of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce, the following information is provided: the owner of <a href="https://x21.consulting/">www.x21.consulting</a> is <strong>XPECTATIONS21, S.L.U.</strong> (hereinafter referred to as <strong>X21</strong>), with Tax Identification Number (CIF) B44874667 and registered address for these purposes at C/ Costa Brava, 35, 1ºB, Esc. Dcha, 28034 (Madrid), with the contact email: jcardona@x21.consulting.</p>',
        },
        {
          h3: 'Users',
          html: '<p><strong>Access and use of the portal:</strong> Access to and/or use of this portal of <strong>X21</strong> grants the condition of USER, who accepts, from the moment of such access and/or use, the General Terms of Use outlined herein. These terms shall apply regardless of any General Terms and Conditions of Contract that may be mandatory.</p><p><strong>Use of the portal:</strong> www.x21.consulting provides access to a variety of information, services, programs, or data (hereinafter referred to as “the contents”) on the Internet that belong to <strong>X21</strong> and are accessible to the USER. The USER assumes responsibility for the use of the portal. This responsibility extends to any registration required to access certain services or contents.</p><p>During registration, the USER is responsible for providing truthful and lawful information. As a result of registration, the USER may be provided with a password, which they shall be responsible for safeguarding, committing to use it diligently and confidentially. The USER agrees to make appropriate use of the contents and services that <strong>X21</strong> offers through its website and undertakes not to use them for activities that may be unlawful, contrary to public order, national defense, or public health.</p><p>In any case, <strong>X21</strong> reserves the right to unilaterally modify, at any time and without prior notice, the structure and design of the website, including modifying or removing services or contents, as well as the terms of access and/or use of the website. Similarly, <strong>X21</strong> reserves the right to modify these terms of use and any other specific conditions contained on the website at any time.</p>',
        },
        {
          h3: 'Personal data protection',
          html: '<p>In compliance with the provisions of Regulation (EU) 2016/679 on General Data Protection Regulation (GDPR) and Organic Law 3/2018, of December 5, on Personal Data Protection and Guarantee of Digital Rights, we inform the user that any personal data voluntarily provided through our data collection methods will be incorporated into the automated Personal Data Processing Activities owned by <strong>X21</strong>. This is done in order to provide our services and to keep you informed about matters related to the company’s activities and services. Fields marked with “*” are mandatory; failure to complete these fields will prevent the USER from enjoying certain services and information offered on the website. The data collected will be treated confidentially.</p><p><strong>X21</strong> fully complies with the current legislation on personal data protection and with the confidentiality commitments inherent to its activity. <strong>X21</strong> has implemented the necessary technical measures to maintain the required level of security, according to the nature of the personal data processed and the circumstances of its processing, to prevent, as far as possible and in line with current technology, alteration, loss, unauthorized processing, or access. To manage the aforementioned purposes, it may be necessary to share the data with data processors, collaborating companies, and public administrations (which may verify the accuracy of the data).</p><p>If the USER provides personal data concerning individuals other than themselves, they must, prior to inclusion, inform them of the content of this clause, in accordance with Regulation (EU) 2016/679 and Organic Law 3/2018, of December 5.</p><p><strong>X21</strong>, as the controller of the Processing Activities, guarantees the exercise of the rights of access, rectification, erasure, restriction, objection, and portability of the data provided, in accordance with Regulation (EU) 2016/679 and Organic Law 3/2018, of December 5. The USER may exercise these rights at any time by sending a written request to the company’s registered address, accompanied by a copy of their ID or Passport.</p><p><strong>X21</strong> guarantees that all commercial communications sent to its clients comply with current regulations. In compliance with Law 34/2002 on Information Society Services and Electronic Commerce and Law 9/2014 on General Telecommunications, the USER is informed that <strong>X21</strong> may send them information about products and services of interest electronically, to which you give your consent. You may revoke this authorization at any time by contacting us at <a href="mailto:jcardona@x21.consulting">jcardona@x21.consulting</a>.</p>',
        },
        {
          h3: 'Use of cookies',
          html: '<p>The USER is informed that this website uses cookies. Cookies are small text files installed in the USER’s browser to record their activity, sending an anonymous identifier stored in the browser. The purpose of cookies is to make browsing easier, allowing, for instance, registered USERS to access areas, services, promotions, or contests reserved exclusively for them without needing to log in during each visit. Cookies may also be used to measure audience, traffic parameters, navigation time, session duration, and/or monitor progress and the number of entries.</p><p><strong>X21</strong> will make every effort to implement appropriate mechanisms to obtain the USER’s consent for the installation of cookies that require it. However, in accordance with the law: (i) the USER is deemed to have given their consent if they modify their browser settings to disable restrictions that prevent the entry of cookies, and (ii) such consent will not be necessary for the installation of cookies strictly required to provide a service expressly requested by the USER.</p><p>It is possible that some cookies used on this website are not related to <strong>X21</strong>, because certain pages contain embedded content from third-party websites (such as a YouTube video). Since this content originates from another website, <strong>X21</strong> does not control the configuration of these cookies. If you wish to change your cookie settings, you should consult the respective third-party websites for more information.</p>',
        },
        {
          h3: 'Intellectual and industrial property',
          html: '<p><strong>X21</strong>, either as the owner or assignee, holds all intellectual and industrial property rights to its website, as well as to the elements contained therein (including but not limited to images, sound, audio, video, software, or texts; trademarks or logos, color combinations, structure, and design). The reproduction, distribution, and public communication, including the means of making available all or part of the contents of this website, on any medium and through any technical means, is expressly prohibited without prior authorization from <strong>X21</strong>. The USER agrees to respect the intellectual and industrial property rights owned by <strong>X21</strong>, and must refrain from removing, altering, bypassing, or tampering with any protection device or security system installed on the website.</p>',
        },
        {
          h3: 'Disclaimer of warranties and liability',
          html: '<p><strong>X21</strong> shall not, under any circumstances, be held liable for damages of any kind that may arise, including but not limited to errors or omissions in the contents, lack of website availability, or the transmission of viruses or malicious or harmful programs in the contents, despite having adopted all necessary technological measures to prevent such issues.</p><p><strong>X21</strong> is not responsible for service deficiencies, communication network issues, problems arising from the malfunction or use of non-optimized versions of any browser, potential security errors, or possible damages to the USER’s computer system, files, or documents stored therein. These issues may result from the presence of viruses in the USER’s computer, telephone failures, interferences, omissions, or disconnections in the operation of the electronic system due to causes beyond <strong>X21</strong>’s control.</p><p><strong>X21</strong> is also not responsible for unauthorized third-party knowledge of the conditions, characteristics, and circumstances of access and use by USERS of the website and its services. Furthermore, <strong>X21</strong> disclaims liability for any unlawful, negligent, fraudulent, or improper use of the website, its services, or contents by USERS that violates these General Terms, good faith, generally accepted standards, or public order.</p>',
        },
        {
          h3: 'Modifications',
          html: '<p>The Website may use cookies or similar technologies, which will be governed by the provisions of the Cookie Policy, accessible at all times and respecting the confidentiality and privacy of the user. The Cookie Policy is an integral part of this Legal Notice.</p>',
        },
        {
          h3: 'Browsing',
          html: '<p><strong>X21</strong> reserves the right to make any modifications it deems appropriate to the website without prior notice, including changing, removing, or adding both the contents and services provided through the site, as well as the way they are presented or located on the portal.</p>',
        },
        {
          h3: 'Links',
          html: '<p>In the event that links or hyperlinks to other internet sites are provided on www.x21.consulting, <strong>X21</strong> will not exercise any control over such sites and their content. Under no circumstances will X21 assume any responsibility for the contents of any link belonging to an external website, nor will it guarantee the technical availability, quality, reliability, accuracy, completeness, truthfulness, validity, or constitutionality of any material or information contained in such hyperlinks or other internet sites. Similarly, the inclusion of these external links does not imply any association, merger, or partnership with the connected entities.</p>',
        },
        {
          h3: 'Right of exclusion',
          html: '<p><strong>X21</strong> reserves the right to block a USER’s access in the event of any indication of fraudulent use of the services offered, without prior notice and at its own discretion or at the request of a third party, for those users who violate these General Terms of Use.</p>',
        },
        {
          h3: 'General provisions',
          html: '<p><strong>X21</strong> will pursue any violation of these terms, as well as any improper use of its portal, by exercising all civil and criminal actions to which it may be entitled under the law.</p>',
        },
        {
          h3: 'Amendment of these terms and duration',
          html: '<p><strong>X21</strong> may modify these terms at any time, and such modifications will be duly published as they appear here. The validity of these terms will depend on their publication and will remain in effect until they are replaced by other terms that are duly published.</p>',
        },
        {
          h3: 'Applicable law and jurisdiction',
          html: '<p>The relationship between <strong>X21</strong> and the USER shall be governed by the applicable Spanish legislation, and any disputes shall be submitted to the Courts and Tribunals of Madrid (Spain).</p>',
        },
      ],
    },
    accessibility: {
      title: 'Accessibility Statement',
      description:
        'Xpectations21 accessibility commitment under WCAG 2.1 and UNE-EN 301 549:2022.',
      html: '<p>Xpectations21 is committed to making its website accessible in compliance with WCAG 2.1 accessibility standards, which serve as evidence for meeting the accessibility criteria of the Digital Kit Program. The website is structured in accordance with the annexes of the UNE-EN 301 549:2022 standard.</p><p>This accessibility statement applies to the “Xpectations 21” website.</p>',
    },
    sitemap: {
      title: 'Site Map',
      description: 'Site map of x21.consulting.',
      mainLabel: 'Main',
      legalLabel: 'Legal',
      home: 'Home',
    },
  },
};
