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
      tagline: 'The strategic and institutional core.',
      items: [
        'Reputation strategy and narrative',
        'Reputational due diligence in M&A',
        'Expert reputation reports for litigation (party-appointed)',
        'Stakeholder engagement and support: investors, regulators, public institutions, foundations and NGOs',
      ],
    },
    {
      icon: 'media',
      title: 'Media Relations',
      tagline: 'Visibility and voice.',
      items: [
        'Media relations',
        'Spokesperson preparation',
        'Messaging for high-stakes moments',
      ],
    },
    {
      icon: 'risk',
      title: 'Risk & Crisis Management',
      tagline: 'Anticipation and protection.',
      items: [
        'Press and social monitoring, with sentiment analysis and narrative detection',
        'Risk identification and mitigation',
        'Crisis management and trust recovery',
      ],
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
