// Contenido centralizado del sitio. Editar aquí cambia toda la web.

export const site = {
  name: 'X21',
  legalName: 'XPECTATIONS21 S.L.U.',
  url: 'https://x21.consulting',
  description:
    'Strategic reputation advisory. We help leaders, companies, foundations and private wealth structures drive growth by enhancing strategic reputation management and aligning stakeholder expectations.',
};

// "Contact" vive solo como botón CTA en el nav, no como enlace (antes salía dos veces).
export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Briefing', href: '/briefing' },
  { label: 'Why X21', href: '#why' },
];

export const hero = {
  kicker: 'Strategic reputation advisory',
  title: ['Reputation', 'to Growth'],
  body: 'We help leaders, companies, foundations and private wealth structures drive growth by enhancing strategic reputation management and aligning stakeholder expectations.',
  primaryCta: { label: 'Start the conversation', href: '#contact' },
};

// Tres bloques que agrupan todas las capacidades (Corporate Affairs / Media / Risk & Crisis).
export const services = {
  eyebrow: 'Services',
  title: 'What we do',
  lead: 'Strategic advisory for senior leadership and key decision-makers, focused on what really matters: legitimacy, competitive advantage, resilience, and reputational impact.',
  image: '/services.jpg',
  imageCaption: 'Reputation for changing times',
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
};

export const team = {
  eyebrow: 'Team',
  title: 'Reputation Advisors',
  image: '/team.jpg',
  lead: 'We bring together experts in reputation strategy, data analytics, and stakeholder engagement to help design, validate, and govern strategic plans with reputational intelligence.',
  members: [
    {
      name: 'Juan Cardona',
      title: 'CEO & Partner',
      area: 'Technology, Risks and Reputational Crisis',
      icon: 'risk',
      photo: '/team-juan.jpg',
      bio: 'Corporate advisor with 25 years of experience in strategic communications, reputation and sustainability. He has held executive positions at LLYC, Corporate Excellence and Grupo Ferrovial. He has advised the Government of Spain on its sustainability strategy.',
    },
    {
      name: 'Antonieta Mendoza',
      title: 'Partner',
      area: 'Corporate Affairs',
      icon: 'affairs',
      photo: '/team-antonieta.jpg',
      bio: 'Senior strategic communications and media relations professional with over 30 years of international experience across Spain, the United States and multi-regional projects. She has positioned organizations and leaders in top-tier media such as the Financial Times, Bloomberg, The Economist, CNN and BBC.',
    },
    {
      name: 'Claudio Vallejo',
      title: 'Partner',
      area: 'Corporate Affairs',
      icon: 'affairs',
      photo: '/team-claudio.jpg',
      bio: 'Senior consultant in communications, reputation and public diplomacy with over 30 years of international experience across Spain and Latin America. He has held executive positions at LLYC, Kreab, CODERE, Ence and Unión Fenosa, leading corporate communications, crisis management and financial communications — including IPO processes — across energy, pulp, private gaming and professional services. He began his career as Commercial Attaché at the Embassy of Spain in Ecuador, coordinating ICEX activity and bilateral economic diplomacy. He combines corporate vision, multinational experience and institutional sensibility, with projects in more than eight countries across two continents.',
    },
    {
      name: 'Gemma Martín',
      title: 'Associate',
      area: 'Media Relations',
      icon: 'media',
      photo: '/team-gemma.jpg',
      bio: 'Senior strategic communications and media relations professional with over 20 years of international experience across Spain, the United States and multi-regional projects (Europe, the Middle East, the Americas and Asia). She has led corporate and institutional communications strategies across energy, infrastructure, finance and the public sector, positioning organizations and leaders in top-tier media (Financial Times, Bloomberg, The Economist, CNN, BBC) and at international forums (UN, Davos, EU).',
    },
  ],
  quote: {
    text: 'Corporate reputation is the key lever for any company to grow in the 21st Century.',
    author: 'Juan Cardona',
    role: 'X21 Founder & CEO',
  },
};

export const why = {
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
};

export const contact = {
  eyebrow: 'Contact',
  title: 'Your growth starts here.',
  address: 'Velázquez, 34 — 7F, 28001 Madrid, Spain',
  addressUrl: 'https://maps.google.com/?q=Velázquez+34+Madrid',
  phoneLabel: '+34 910 623 660',
  phoneHref: 'tel:+34910623660',
  email: 'info@x21.consulting',
  linkedin: 'https://www.linkedin.com/company/x21-consulting/',
};

export const footer = {
  trademark: 'X21 and GERS are registered trademarks.',
  year: new Date().getFullYear(),
  legal: [
    { label: 'Legal Notice', href: '/aviso-legal' },
    { label: 'Accessibility Statement', href: '/declaracion-de-accesibilidad' },
    { label: 'Site Map', href: '/mapa-web' },
  ],
};

export const commitments = {
  eyebrow: 'Our commitments',
  items: [
    {
      title: 'Partners, not pyramids',
      body: 'The people who win the work do the work. Senior counsel throughout, never delegated down.',
    },
    {
      title: 'Evidence before opinion',
      body: 'We measure reputation with our GERS© model before we advise on it.',
    },
    {
      title: 'Candor over comfort',
      body: "Independent enough to tell you what you'd rather not hear.",
    },
    {
      title: 'Discretion as default',
      body: 'The most important work is the work no one sees.',
    },
  ],
};

export const briefing = {
  eyebrow: 'Quarterly',
  title: 'The Briefing',
  teaser: 'A quarterly briefing for senior leaders. High signal, no noise.',
  lead: 'A quarterly briefing for senior leaders — crisis autopsies, where stakeholder expectations are shifting, and insights from our Lab. High signal, no noise.',
  expect: [
    {
      title: 'Crisis autopsies',
      body: 'What happened, what the GERS lens reveals, and the lesson — read on recent reputational events.',
    },
    {
      title: 'Shifting expectations',
      body: 'Where stakeholder expectations are moving in your sector, and what that means for legitimacy.',
    },
    {
      title: 'From our Lab',
      body: 'Original reads and data drawn from our research, when they are ready to share.',
    },
  ],
  // Cuando haya números, se listan aquí y aparece el archivo automáticamente.
  // { label: 'Nº 01 — Spring 2026', href: '/briefing/01.pdf', cover: '#17130e' }
  issues: [] as { label: string; href: string }[],
};
