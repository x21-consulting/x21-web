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
        'Positioning before investors, regulators, public institutions, foundations and NGOs',
        'Reputational due diligence in M&A',
        'Stakeholder engagement and support',
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
  quote: {
    text: 'Corporate reputation is the key lever for any company to grow in the 21st Century.',
    author: 'Juan Cardona',
    role: 'X21 Founder & CEO',
  },
};

export const why = {
  eyebrow: 'Why X21',
  title: 'Reputation 2 Growth',
  image: '/why.jpg',
  lead: 'Using the GERS© model and data analytics, we translate intangible value into measurable impact — enhancing both your reputation and Net Promoter Score.',
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
  linkedin: 'https://www.linkedin.com/company/xpectations21/',
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
