import React from 'react';
import { ArrowUpRight, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenDetails }) => {
  const isEven = index % 2 === 1;

  // Render bespoke simulated mockup based on project
  const renderVisual = () => {
    switch (project.id) {
      case 'wellversed':
        return (
          <div className="w-full h-full bg-[#0D111E] dark:bg-[#0D111E] light:bg-[#F2F6FF] p-6 sm:p-8 flex flex-col justify-between text-left select-none relative overflow-hidden rounded-3xl border border-atelier-border">
            {/* Background glow spot */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#4B78FF]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-atelier-border">
              <span className="font-extrabold tracking-widest text-xs uppercase text-atelier-accent font-mono">
                WELLVERSED NUTRITION
              </span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-atelier-accent text-white font-bold">
                SHOPIFY STOREFRONT
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-2xl bg-atelier-surface border border-atelier-border">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[#1B2236] to-[#121624] flex items-center justify-center mb-3 relative overflow-hidden">
                  <div className="w-12 h-16 rounded-lg bg-atelier-accent/20 border border-atelier-accent/40 flex items-center justify-center">
                    <span className="text-[9px] font-bold text-atelier-accent">W-PRO</span>
                  </div>
                  <span className="absolute top-2 left-2 text-[8px] font-mono bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">
                    IN STOCK
                  </span>
                </div>
                <div className="text-xs font-bold text-atelier-text truncate">Ultra Whey Isolate 1kg</div>
                <div className="text-xs font-mono text-atelier-accent mt-1">₹3,499</div>
              </div>

              <div className="p-4 rounded-2xl bg-atelier-surface border border-atelier-border">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[#1B2236] to-[#121624] flex items-center justify-center mb-3 relative overflow-hidden">
                  <div className="w-12 h-16 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                    <span className="text-[9px] font-bold text-purple-400">KETO</span>
                  </div>
                  <span className="absolute top-2 left-2 text-[8px] font-mono bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">
                    FEATURED
                  </span>
                </div>
                <div className="text-xs font-bold text-atelier-text truncate">Organic Keto Electrolytes</div>
                <div className="text-xs font-mono text-atelier-accent mt-1">₹1,899</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-atelier-muted pt-3 border-t border-atelier-border">
              <span>Liquid Theme / Schema V2</span>
              <span className="text-emerald-400">● 99.8% Uptime</span>
            </div>
          </div>
        );

      case 'solvet-ca':
        return (
          <div className="w-full h-full bg-[#0D121B] dark:bg-[#0D121B] light:bg-[#F2F6FA] p-6 sm:p-8 flex flex-col justify-between text-left select-none relative overflow-hidden rounded-3xl border border-atelier-border">
            <div className="flex items-center justify-between pb-4 border-b border-atelier-border">
              <span className="font-extrabold tracking-widest text-xs uppercase text-atelier-accent font-mono">
                SOLVET CANADIAN HEALTH
              </span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-purple-600 text-white font-bold">
                WORDPRESS PORTAL
              </span>
            </div>

            <div className="my-6 space-y-3">
              <div className="p-4 rounded-2xl bg-atelier-surface border border-atelier-border">
                <div className="text-[10px] font-mono text-atelier-accent uppercase font-bold">VETERINARY PHARMACEUTICALS</div>
                <div className="text-sm font-bold text-atelier-text mt-1">Complete Scientific Monograph Directory</div>
                <p className="text-xs text-atelier-secondary mt-1.5 line-clamp-2">
                  Engineered with Elementor and customized post structures for Canadian veterinary distributors.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-2.5 rounded-xl bg-atelier-surface border border-atelier-border">
                  <div className="text-sm font-bold text-atelier-text">140+</div>
                  <div className="text-[9px] font-mono text-atelier-muted">Products</div>
                </div>
                <div className="p-2.5 rounded-xl bg-atelier-surface border border-atelier-border">
                  <div className="text-sm font-bold text-atelier-text">100%</div>
                  <div className="text-[9px] font-mono text-atelier-muted">Responsive</div>
                </div>
                <div className="p-2.5 rounded-xl bg-atelier-surface border border-atelier-border">
                  <div className="text-sm font-bold text-atelier-text">Fast</div>
                  <div className="text-[9px] font-mono text-atelier-muted">Caching</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-atelier-muted pt-3 border-t border-atelier-border">
              <span>WordPress 6.x · Custom Fields</span>
              <span className="text-atelier-accent">solvet.ca</span>
            </div>
          </div>
        );

      case 'gmtn':
        return (
          <div className="w-full h-full bg-[#0E1017] dark:bg-[#0E1017] light:bg-[#F4F6F9] p-6 sm:p-8 flex flex-col justify-between text-left select-none relative overflow-hidden rounded-3xl border border-atelier-border">
            <div className="flex items-center justify-between pb-4 border-b border-atelier-border">
              <span className="font-extrabold tracking-widest text-xs uppercase text-atelier-accent font-mono">
                GMTN INDUSTRIAL SYSTEMS
              </span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyan-600 text-white font-bold">
                PHP / MYSQL
              </span>
            </div>

            <div className="my-6 p-4 rounded-2xl bg-atelier-surface border border-atelier-border space-y-2 text-xs font-mono">
              <div className="text-atelier-muted text-[10px] uppercase tracking-wider mb-2">TECHNICAL ENGINEERING SPECIFICATIONS</div>
              <div className="flex justify-between py-1 border-b border-atelier-border/50 text-atelier-secondary">
                <span>SYSTEM ROUTING</span>
                <span className="text-atelier-accent font-bold">Modular PHP Engine</span>
              </div>
              <div className="flex justify-between py-1 border-b border-atelier-border/50 text-atelier-secondary">
                <span>CATALOG SEARCH</span>
                <span className="text-atelier-text">Dynamic JavaScript DOM</span>
              </div>
              <div className="flex justify-between py-1 text-atelier-secondary">
                <span>INQUIRY FORM</span>
                <span className="text-emerald-400 font-bold">Validated SMTP Mailer</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-atelier-muted pt-3 border-t border-atelier-border">
              <span>Industrial Web Implementation</span>
              <span className="text-atelier-accent">Performance: 97/100</span>
            </div>
          </div>
        );

      case 'bodhi-health':
        return (
          <div className="w-full h-full bg-[#0D121B] dark:bg-[#0D121B] light:bg-[#F2F6FA] p-6 sm:p-8 flex flex-col justify-between text-left select-none relative overflow-hidden rounded-3xl border border-atelier-border">
            <div className="flex items-center justify-between pb-4 border-b border-atelier-border">
              <span className="font-extrabold tracking-widest text-xs uppercase text-atelier-accent font-mono">
                BODHI HEALTH
              </span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-600 text-white font-bold">
                HEALTH SHOPIFY
              </span>
            </div>

            <div className="my-6 p-5 rounded-2xl bg-gradient-to-br from-atelier-surface to-atelier-surface/60 border border-atelier-border flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-atelier-accent uppercase font-bold">ADAPTOGENIC WELLNESS</span>
                <div className="text-base font-bold text-atelier-text mt-1">Holistic Herbal Elixir Drops</div>
                <div className="text-xs font-mono text-atelier-muted mt-1.5">Liquid Collection Layout</div>
              </div>
              <div className="w-14 h-16 rounded-xl bg-atelier-accent/20 border border-atelier-accent/30 flex items-center justify-center text-atelier-accent">
                <Sparkles size={20} />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-atelier-muted pt-3 border-t border-atelier-border">
              <span>Clean Cart & Variant Selector</span>
              <span className="text-atelier-accent">Liquid Theming</span>
            </div>
          </div>
        );

      case 'kilongwan':
        return (
          <div className="w-full h-full bg-[#10131E] dark:bg-[#10131E] light:bg-[#F5F7FD] p-6 sm:p-8 flex flex-col justify-between text-left select-none relative overflow-hidden rounded-3xl border border-atelier-border">
            <div className="flex items-center justify-between pb-4 border-b border-atelier-border">
              <span className="font-extrabold tracking-widest text-xs uppercase text-atelier-accent font-mono">
                KILONGWAN STORE
              </span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-atelier-accent text-white font-bold">
                GLOBAL RETAIL
              </span>
            </div>

            <div className="my-6 space-y-3">
              <div className="h-24 rounded-2xl bg-gradient-to-r from-atelier-accent/20 via-atelier-surface to-atelier-accent/10 border border-atelier-border p-4 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-atelier-accent uppercase font-bold">SEASONAL HERO PROMO</span>
                <div className="text-sm font-bold text-atelier-text">Global Collection Launch Interface</div>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-atelier-secondary px-1">
                <span>Multi-currency Switching</span>
                <span>Optimized Bundles</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-atelier-muted pt-3 border-t border-atelier-border">
              <span>Mobile-First Storefront</span>
              <span className="text-atelier-accent">Shopify Liquid</span>
            </div>
          </div>
        );

      case 'work-compliant':
      default:
        return (
          <div className="w-full h-full bg-[#0F111A] dark:bg-[#0F111A] light:bg-[#F3F5FA] p-6 sm:p-8 flex flex-col justify-between text-left select-none relative overflow-hidden rounded-3xl border border-atelier-border">
            <div className="flex items-center justify-between pb-4 border-b border-atelier-border">
              <span className="font-extrabold tracking-widest text-xs uppercase text-atelier-accent font-mono">
                WORK COMPLIANT
              </span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-purple-600 text-white font-bold">
                COMPLIANCE PORTAL
              </span>
            </div>

            <div className="my-6 p-4 rounded-2xl bg-atelier-surface border border-atelier-border">
              <div className="text-[10px] font-mono text-atelier-accent uppercase font-bold">REGULATORY FRAMEWORK</div>
              <div className="text-sm font-bold text-atelier-text mt-1">Workplace Standards & Audit Forms</div>
              <div className="mt-3 flex items-center space-x-2 text-[10px] font-mono text-atelier-muted">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Legal Templates</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Audit Checklists</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-atelier-muted pt-3 border-t border-atelier-border">
              <span>Elementor Pro · Maintenance</span>
              <span className="text-atelier-accent">Active Business Site</span>
            </div>
          </div>
        );
    }
  };

  return (
    <article className="group py-12 sm:py-16 border-b border-atelier-border">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
          isEven ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Visual Mockup Presentation Column (Alternating) */}
        <div
          onClick={() => onOpenDetails(project)}
          data-cursor="CASE"
          className={`lg:col-span-7 relative cursor-pointer overflow-hidden rounded-3xl transition-transform duration-500 group-hover:scale-[1.01] ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative">
            {renderVisual()}

            {/* Hover overlay indicator */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="px-6 py-3 rounded-full bg-atelier-accent text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight size={15} />
              </div>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          
          {/* Project Number & Platform Tag */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="font-mono text-sm font-bold text-atelier-accent">
              {project.number}
            </span>
            <span className="text-atelier-muted">/</span>
            <span className="text-xs font-mono uppercase tracking-widest font-bold text-atelier-muted">
              {project.platform}
            </span>
            <span className="text-atelier-muted">·</span>
            <span className="text-xs font-mono uppercase tracking-widest text-atelier-muted">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3
            onClick={() => onOpenDetails(project)}
            className="text-3xl sm:text-4xl font-black text-atelier-text mb-4 tracking-tight group-hover:text-atelier-accent transition-colors cursor-pointer font-display"
          >
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-base text-atelier-secondary leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-atelier-surface border border-atelier-border text-atelier-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Trigger Details Link */}
          <div>
            <button
              onClick={() => onOpenDetails(project)}
              data-cursor="CASE"
              className="inline-flex items-center space-x-2 text-xs font-bold font-mono tracking-widest uppercase text-atelier-accent hover:underline group/btn"
            >
              <span>EXPLORE CASE DETAILS</span>
              <ArrowUpRight size={15} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </button>
          </div>

        </div>

      </div>
    </article>
  );
};
