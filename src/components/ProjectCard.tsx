import React from 'react';
import { ArrowUpRight, ShoppingBag, Layers, Wrench, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenDetails }) => {
  const isEven = index % 2 === 1;

  // Render bespoke simulated mockup based on project
  const renderMockup = () => {
    switch (project.id) {
      case 'wellversed':
        return (
          <div className="w-full h-full bg-[#0D0D11] dark:bg-[#0D0D11] light:bg-[#FAF8F5] p-5 sm:p-7 flex flex-col justify-between text-left select-none overflow-hidden rounded-2xl">
            {/* Store Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 dark:border-white/10 light:border-black/10">
              <span className="font-extrabold tracking-widest text-xs uppercase text-[#C8A96B]">WELLVERSED NUTRITION</span>
              <div className="flex items-center space-x-2 text-[10px] font-mono text-atelier-muted">
                <span className="hidden sm:inline">PROTEIN</span>
                <span className="hidden sm:inline">KETO</span>
                <span className="px-2 py-0.5 rounded bg-[#C8A96B]/20 text-[#C8A96B] font-bold">STOREFRONT</span>
              </div>
            </div>

            {/* Simulated Product Card Grid */}
            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10">
                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center mb-2 relative overflow-hidden">
                  <div className="w-10 h-14 rounded-md bg-[#C8A96B]/30 border border-[#C8A96B]/50 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-[#C8A96B]">W-ISO</span>
                  </div>
                  <span className="absolute top-1.5 left-1.5 text-[8px] font-mono bg-emerald-500/20 text-emerald-400 px-1 rounded">IN STOCK</span>
                </div>
                <div className="text-[11px] font-bold text-atelier-text truncate">Ultra Whey Isolate 1kg</div>
                <div className="text-[10px] font-mono text-[#C8A96B] mt-0.5">₹3,499</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10">
                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center mb-2 relative overflow-hidden">
                  <div className="w-10 h-14 rounded-md bg-[#8B5CF6]/30 border border-[#8B5CF6]/50 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-[#8B5CF6]">KETO</span>
                  </div>
                  <span className="absolute top-1.5 left-1.5 text-[8px] font-mono bg-[#8B5CF6]/20 text-[#8B5CF6] px-1 rounded">NEW</span>
                </div>
                <div className="text-[11px] font-bold text-atelier-text truncate">Organic Keto Electrolytes</div>
                <div className="text-[10px] font-mono text-[#C8A96B] mt-0.5">₹1,899</div>
              </div>
            </div>

            {/* Liquid Tech Footer */}
            <div className="flex items-center justify-between text-[10px] font-mono text-atelier-muted pt-2 border-t border-white/5">
              <span>Liquid Theme / Schema V2</span>
              <span className="text-emerald-400">● 99.8% Uptime</span>
            </div>
          </div>
        );

      case 'solvet-ca':
        return (
          <div className="w-full h-full bg-[#0B0C10] dark:bg-[#0B0C10] light:bg-[#F6F5F2] p-5 sm:p-7 flex flex-col justify-between text-left select-none overflow-hidden rounded-2xl">
            {/* Corporate Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 dark:border-white/10 light:border-black/10">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />
                <span className="font-extrabold tracking-wider text-xs uppercase text-atelier-text">SOLVET CANADIAN HEALTH</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#8B5CF6]/20 text-[#8B5CF6] font-bold">
                ELEMENTOR
              </span>
            </div>

            {/* Corporate Content simulation */}
            <div className="my-3 space-y-2.5">
              <div className="p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10">
                <div className="text-[9px] font-mono text-[#8B5CF6] uppercase">VETERINARY DIRECTORY</div>
                <div className="text-xs font-bold text-atelier-text mt-0.5">Pharmaceutical Catalog & Dosage Guides</div>
                <p className="text-[10px] text-atelier-muted mt-1 line-clamp-2">
                  Structured custom post types with downloadable PDF monographs and compliant Canadian distribution data.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-[11px] font-bold text-atelier-text">140+</div>
                  <div className="text-[8px] font-mono text-atelier-muted">Products</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-[11px] font-bold text-atelier-text">100%</div>
                  <div className="text-[8px] font-mono text-atelier-muted">Responsive</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-[11px] font-bold text-atelier-text">Fast</div>
                  <div className="text-[8px] font-mono text-atelier-muted">Caching</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-atelier-muted pt-2 border-t border-white/5">
              <span>WordPress 6.x · Custom Fields</span>
              <span className="text-[#8B5CF6]">solvet.ca</span>
            </div>
          </div>
        );

      case 'gmtn':
        return (
          <div className="w-full h-full bg-[#0A0D12] dark:bg-[#0A0D12] light:bg-[#F2F5F8] p-5 sm:p-7 flex flex-col justify-between text-left select-none overflow-hidden rounded-2xl font-mono">
            {/* Industrial Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 dark:border-white/10 light:border-black/10">
              <div className="flex items-center space-x-2">
                <Wrench size={14} className="text-[#C8A96B]" />
                <span className="font-bold text-xs uppercase text-atelier-text">GMTN INDUSTRIAL SYSTEMS</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-[#C8A96B]/20 text-[#C8A96B]">PHP / MYSQL</span>
            </div>

            {/* Industrial Spec Table Simulation */}
            <div className="my-3 p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 text-[10px]">
              <div className="text-atelier-muted mb-1 text-[9px] uppercase tracking-wider">ENGINEERING SPECIFICATION PORTAL</div>
              <div className="space-y-1.5 text-atelier-secondary">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>SYSTEM ARCHITECTURE</span>
                  <span className="text-[#C8A96B]">Modular PHP Router</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>CATALOG FILTERING</span>
                  <span className="text-atelier-text">Dynamic JavaScript DOM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>INQUIRY PIPELINE</span>
                  <span className="text-emerald-400">SMTP Form Validation</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] text-atelier-muted pt-2 border-t border-white/5">
              <span>Industrial Web Implementation</span>
              <span className="text-[#C8A96B]">Performance: 97/100</span>
            </div>
          </div>
        );

      case 'bodhi-health':
        return (
          <div className="w-full h-full bg-[#0E0F12] dark:bg-[#0E0F12] light:bg-[#FAF9F6] p-5 sm:p-7 flex flex-col justify-between text-left select-none overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 dark:border-white/10 light:border-black/10">
              <div className="flex items-center space-x-2">
                <Heart size={14} className="text-[#8B5CF6]" />
                <span className="font-extrabold tracking-widest text-xs uppercase text-atelier-text">BODHI HEALTH</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#8B5CF6]/20 text-[#8B5CF6]">
                WELLNESS
              </span>
            </div>

            <div className="my-3 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-[#8B5CF6] uppercase">DAILY ESSENTIALS</span>
                <div className="text-sm font-bold text-atelier-text mt-0.5">Adaptogenic Elixir Blend</div>
                <div className="text-[11px] font-mono text-[#C8A96B] mt-1">Liquid Collection Layout</div>
              </div>
              <div className="w-12 h-16 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center text-[#8B5CF6]">
                <Sparkles size={16} />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-atelier-muted pt-2 border-t border-white/5">
              <span>Clean Cart Flow</span>
              <span className="text-[#8B5CF6]">Shopify Liquid</span>
            </div>
          </div>
        );

      case 'kilongwan':
        return (
          <div className="w-full h-full bg-[#100F12] dark:bg-[#100F12] light:bg-[#F7F6F3] p-5 sm:p-7 flex flex-col justify-between text-left select-none overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 dark:border-white/10 light:border-black/10">
              <span className="font-extrabold tracking-widest text-xs uppercase text-[#C8A96B]">KILONGWAN RETAIL</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C8A96B]/20 text-[#C8A96B]">
                STOREFRONT
              </span>
            </div>

            <div className="my-3 space-y-2">
              <div className="h-20 rounded-xl bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-800 p-3 flex flex-col justify-end border border-white/10 relative overflow-hidden">
                <span className="text-[9px] font-mono text-[#C8A96B] uppercase">SEASONAL HERO PROMO</span>
                <div className="text-xs font-bold text-atelier-text">Global Collection Launch</div>
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-atelier-secondary px-1">
                <span>Multi-currency Selector</span>
                <span>Optimized Bundles</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-atelier-muted pt-2 border-t border-white/5">
              <span>Mobile-First Theme</span>
              <span className="text-[#C8A96B]">Shopify Ecosystem</span>
            </div>
          </div>
        );

      case 'work-compliant':
      default:
        return (
          <div className="w-full h-full bg-[#0D0E12] dark:bg-[#0D0E12] light:bg-[#F5F6F8] p-5 sm:p-7 flex flex-col justify-between text-left select-none overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 dark:border-white/10 light:border-black/10">
              <div className="flex items-center space-x-2">
                <ShieldCheck size={14} className="text-[#8B5CF6]" />
                <span className="font-extrabold tracking-wider text-xs uppercase text-atelier-text">WORK COMPLIANT</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#8B5CF6]/20 text-[#8B5CF6]">
                WORDPRESS
              </span>
            </div>

            <div className="my-3 p-3.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10">
              <div className="text-[9px] font-mono text-[#8B5CF6] uppercase">GOVERNANCE & AUDIT</div>
              <div className="text-xs font-bold text-atelier-text mt-0.5">Policy Frameworks & Resource Center</div>
              <div className="mt-2 flex items-center space-x-2 text-[10px] font-mono text-atelier-muted">
                <span className="px-1.5 py-0.5 rounded bg-white/5">Legal Templates</span>
                <span className="px-1.5 py-0.5 rounded bg-white/5">Audit Trails</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-atelier-muted pt-2 border-t border-white/5">
              <span>Elementor Pro · Maintenance</span>
              <span className="text-[#8B5CF6]">Active Portal</span>
            </div>
          </div>
        );
    }
  };

  return (
    <article
      className="group relative rounded-3xl p-6 sm:p-8 md:p-10 bg-[#0A0A0D] dark:bg-[#0A0A0D] light:bg-[#FFFFFF] border border-white/10 dark:border-white/10 light:border-black/10 transition-all duration-500 hover:border-[#C8A96B]/50 hover:shadow-2xl overflow-hidden"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          isEven ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Visual Mockup Presentation Column (Alternating) */}
        <div
          onClick={() => onOpenDetails(project)}
          data-cursor="VIEW"
          className={`lg:col-span-7 relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 transition-transform duration-500 group-hover:scale-[1.01] ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          {/* Aspect container */}
          <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative">
            {renderMockup()}

            {/* Hover overlay indicator */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="px-5 py-2.5 rounded-full bg-[#C8A96B] text-black font-bold text-xs font-mono uppercase tracking-widest flex items-center space-x-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                <span>VIEW CASE OVERVIEW</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          {/* Project Number & Platform Badge */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="font-mono text-xs font-bold text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32]">
              {project.number}
            </span>
            <span className="text-neutral-500">/</span>
            <span className="text-xs font-mono uppercase tracking-widest text-atelier-muted">
              {project.platform}
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-xs font-mono uppercase tracking-widest text-atelier-muted">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3
            onClick={() => onOpenDetails(project)}
            className="text-2xl sm:text-3xl font-extrabold text-atelier-text mb-4 tracking-tight group-hover:text-[#C8A96B] transition-colors cursor-pointer font-display"
          >
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-atelier-secondary font-normal leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-[11px] font-mono bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 text-atelier-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Trigger Details Link */}
          <div>
            <button
              onClick={() => onOpenDetails(project)}
              data-cursor="OPEN"
              className="inline-flex items-center space-x-2 text-xs font-bold font-mono tracking-widest uppercase text-atelier-text hover:text-[#C8A96B] transition-colors group/btn"
            >
              <span>EXPLORE CASE DETAILS</span>
              <ArrowUpRight size={14} className="text-[#C8A96B] transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </button>
          </div>
        </div>

      </div>
    </article>
  );
};
