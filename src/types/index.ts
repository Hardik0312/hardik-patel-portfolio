export type Platform = 'Shopify' | 'WordPress' | 'PHP' | 'All';

export interface Project {
  id: string;
  number: string;
  name: string;
  platform: 'Shopify' | 'WordPress' | 'PHP';
  category: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  visualHighlights: string;
  linkText?: string;
  url?: string;
  accentColor: string;
  badge: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface ExpertiseRow {
  number: string;
  title: string;
  description: string;
  tag: string;
}
