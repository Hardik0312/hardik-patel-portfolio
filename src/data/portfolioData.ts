import { Project, ServiceItem, ProcessStep, ExpertiseRow } from '../types';

export const PERSONAL_INFO = {
  name: 'Hardik Patel',
  title: 'WordPress / Shopify / PHP Developer',
  experience: '3+ Years',
  location: 'Gujarat, India',
  email: 'phardik.1293@gmail.com',
  phone: '+91 8238778874',
  tagline: 'WEBSITES BUILT TO WORK. DESIGNED TO BE REMEMBERED.',
  shortBio: 'WordPress, Shopify & PHP developer with 3+ years of hands-on experience building, maintaining and improving business websites and ecommerce experiences.',
  availability: 'AVAILABLE FOR WEB PROJECTS',
  copyright: '© 2026 HARDIK PATEL',
};

export const PROJECTS: Project[] = [
  {
    id: 'wellversed',
    number: '01',
    name: 'WELLVERSED',
    platform: 'Shopify',
    category: 'Ecommerce',
    description: 'Shopify ecommerce development and website improvements focused on product presentation, collection pages, responsive experience and store content implementation.',
    detailedDescription: 'Engineered custom Liquid storefront templates, dynamic collection filters, and modular product sections for an established health and wellness ecommerce brand. Optimized mobile browsing speed and checkout path accessibility.',
    technologies: ['Shopify', 'Liquid', 'Ecommerce', 'Responsive UI'],
    features: [
      'Custom Liquid storefront sections & schema',
      'Dynamic product variants and nutrition display',
      'High-performance collection filtering',
      'Mobile-first checkout UX optimization'
    ],
    visualHighlights: 'Health & Wellness Storefront · Custom Liquid · Clean Cart UX',
    accentColor: '#C8A96B',
    badge: 'SHOPIFY STOREFRONT'
  },
  {
    id: 'solvet-ca',
    number: '02',
    name: 'SOLVET.CA',
    platform: 'WordPress',
    category: 'Business Website',
    description: 'WordPress development and website maintenance focused on responsive layouts, content implementation, configuration and ongoing improvements.',
    detailedDescription: 'Developed and structured a comprehensive corporate veterinary and healthcare solutions website. Implemented custom Elementor modules, technical documentation directories, and multi-tier product catalogs.',
    technologies: ['WordPress', 'Elementor', 'Responsive Design', 'Maintenance'],
    features: [
      'Custom Elementor corporate layout architecture',
      'Structured scientific catalog & document downloads',
      'Responsive multi-breakpoint design system',
      'Regular security, caching and plugin maintenance'
    ],
    visualHighlights: 'Corporate Healthcare Architecture · Elementor · Technical Catalog',
    accentColor: '#8B5CF6',
    badge: 'WORDPRESS CORPORATE'
  },
  {
    id: 'gmtn',
    number: '03',
    name: 'GMTN',
    platform: 'PHP',
    category: 'Business / Industrial',
    description: 'PHP-based website development and maintenance including content updates, frontend improvements and website implementation.',
    detailedDescription: 'Modernized the industrial web portal using custom PHP, semantic HTML5, and performance-tuned CSS/JavaScript. Streamlined product machinery specifications and interactive inquiry forms.',
    technologies: ['PHP', 'HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Custom PHP dynamic page templates and routing',
      'Heavy machinery specifications catalog',
      'Inquiry form processing and lead capture',
      'Cross-browser performance optimization'
    ],
    visualHighlights: 'Industrial Machinery Portal · Custom PHP · Spec Sheets',
    accentColor: '#C8A96B',
    badge: 'CUSTOM PHP SYSTEM'
  },
  {
    id: 'bodhi-health',
    number: '04',
    name: 'BODHI HEALTH',
    platform: 'Shopify',
    category: 'Health Ecommerce',
    description: 'Shopify ecommerce work focused on product presentation, collection experience, responsive layouts and storefront improvements.',
    detailedDescription: 'Created a calm, minimalist shopping atmosphere for dietary health supplements. Implemented custom collection layouts, sticky add-to-cart bars, and refined badge displays.',
    technologies: ['Shopify', 'Liquid', 'Ecommerce', 'UI'],
    features: [
      'Minimalist lifestyle storefront theming',
      'Interactive ingredient disclosure panels',
      'Seamless collection grid pagination',
      'Touch-optimized mobile drawer cart'
    ],
    visualHighlights: 'Wellness Boutique · Responsive Theme · Product Detail UI',
    accentColor: '#8B5CF6',
    badge: 'SHOPIFY BOUTIQUE'
  },
  {
    id: 'kilongwan',
    number: '05',
    name: 'KILONGWAN',
    platform: 'Shopify',
    category: 'Ecommerce',
    description: 'Shopify storefront customization with a focus on responsive ecommerce experience, visual presentation and storefront improvements.',
    detailedDescription: 'Delivered tailored storefront customizations, promotional banner sections, and high-conversion collection landing pages tailored for global retail customers.',
    technologies: ['Shopify', 'Liquid', 'Responsive', 'Ecommerce'],
    features: [
      'Custom promotional banners & announcement grids',
      'Responsive product detail zoom & gallery',
      'Integrated currency and localization setup',
      'Fast-loading asset bundling'
    ],
    visualHighlights: 'Modern Retail Store · Promotional Grid · Liquid Customizer',
    accentColor: '#C8A96B',
    badge: 'SHOPIFY RETAIL'
  },
  {
    id: 'work-compliant',
    number: '06',
    name: 'WORK COMPLIANT',
    platform: 'WordPress',
    category: 'Business Website',
    description: 'WordPress website development and maintenance including responsive layouts, content updates and website improvements.',
    detailedDescription: 'Built and maintained an authoritative compliance and workplace regulation portal. Structured intricate legal resource tables, client consultation scheduling, and swift page response times.',
    technologies: ['WordPress', 'Elementor', 'Responsive', 'Maintenance'],
    features: [
      'Authoritative corporate typography and layouts',
      'Compliance policy document repository',
      'Lead capture and appointment booking integration',
      'Ongoing WordPress core & plugin maintenance'
    ],
    visualHighlights: 'Regulatory Portal · WordPress · Content Architecture',
    accentColor: '#8B5CF6',
    badge: 'WORDPRESS PORTAL'
  }
];

export const EXPERTISE_LIST: ExpertiseRow[] = [
  {
    number: '01',
    title: 'SHOPIFY DEVELOPMENT',
    description: 'Storefront development, Liquid customization, ecommerce layouts and theme improvements.',
    tag: 'Liquid · Themes · Custom Sections'
  },
  {
    number: '02',
    title: 'WORDPRESS DEVELOPMENT',
    description: 'Business websites, Elementor development, WooCommerce and ongoing website maintenance.',
    tag: 'Elementor · WooCommerce · Custom Architecture'
  },
  {
    number: '03',
    title: 'PHP DEVELOPMENT',
    description: 'PHP website development, customization and maintenance.',
    tag: 'PHP Backend · Dynamic Templates · Forms'
  },
  {
    number: '04',
    title: 'ECOMMERCE DEVELOPMENT',
    description: 'High-converting online store architectures, cart flows, checkout experience and collection interfaces.',
    tag: 'Conversion UX · Catalog Structures · Speed'
  },
  {
    number: '05',
    title: 'RESPONSIVE WEBSITES',
    description: 'Interfaces designed and rigorously tested across desktop, tablet and mobile form factors.',
    tag: 'Mobile First · Fluid Breakpoints · CSS3'
  },
  {
    number: '06',
    title: 'WEBSITE MAINTENANCE',
    description: 'Website updates, content changes, configuration and ongoing improvements.',
    tag: 'Security Updates · Bug Fixes · Backups'
  }
];

export const TOOLKIT = {
  primary: [
    { name: 'SHOPIFY', desc: 'Custom Liquid themes, storefront sections, App embeds & configurations' },
    { name: 'WORDPRESS', desc: 'Custom CMS architecture, Elementor builds, WooCommerce stores' },
    { name: 'PHP', desc: 'Modular server-side logic, custom endpoints, database integration' }
  ],
  technologies: [
    'HTML5',
    'CSS3',
    'JAVASCRIPT',
    'LIQUID',
    'ELEMENTOR',
    'WOOCOMMERCE',
    'GOOGLE ANALYTICS',
    'HOSTINGER',
    'CPANEL',
    'GIT',
    'GITHUB',
    'RESPONSIVE DESIGN',
    'WEBSITE OPTIMIZATION'
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Shopify Development',
    description: 'Custom theme creation, Liquid programming, cart optimization, and tailored storefront features that convert.',
    deliverables: ['Custom Liquid sections', 'Storefront speed improvement', 'App integration & styling', 'Checkout flow UX']
  },
  {
    number: '02',
    title: 'WordPress Development',
    description: 'Clean, reliable business sites built on modern WordPress standards with tailored content structures and easy client editing.',
    deliverables: ['Elementor Pro development', 'Custom post types & fields', 'Speed & caching setup', 'Security hardening']
  },
  {
    number: '03',
    title: 'PHP Development',
    description: 'Custom back-end code, forms processing, API integrations, and ongoing script maintenance.',
    deliverables: ['Dynamic page logic', 'Secure form handlers', 'Database interactions', 'Legacy code refactoring']
  },
  {
    number: '04',
    title: 'Website Maintenance',
    description: 'Proactive upkeep keeping your digital assets safe, fast, and up to date with zero stress for your business.',
    deliverables: ['Plugin & core updates', 'Automated cloud backups', 'Broken link & bug fixes', 'Content updates & additions']
  },
  {
    number: '05',
    title: 'Elementor Development',
    description: 'Pixel-perfect, lightweight Elementor builds that give you visual control without bloated page code.',
    deliverables: ['Pixel-perfect responsive design', 'Reusable template parts', 'Custom CSS styling', 'Motion effects']
  },
  {
    number: '06',
    title: 'Website Optimization',
    description: 'Speed audits, asset compression, caching, and mobile responsiveness tuning to maximize organic performance.',
    deliverables: ['Core Web Vitals tuning', 'Image optimization', 'Minification & lazy loading', 'Technical SEO basics']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Understand the business and requirements.',
    details: 'Initial analysis of brand goals, audience expectations, technical constraints, and current website pain points.'
  },
  {
    step: '02',
    title: 'PLAN',
    description: 'Define structure and technical approach.',
    details: 'Structuring pages, data flows, responsive breakpoints, Shopify/WordPress architecture, and asset strategies.'
  },
  {
    step: '03',
    title: 'BUILD',
    description: 'Develop, test and refine.',
    details: 'Clean coding with modern standards, cross-browser verification, mobile responsiveness testing, and client review.'
  },
  {
    step: '04',
    title: 'LAUNCH',
    description: 'Deploy, test and provide support.',
    details: 'DNS configuration, SSL verification, hosting deployment, final speed checks, and ongoing maintenance handoff.'
  }
];
