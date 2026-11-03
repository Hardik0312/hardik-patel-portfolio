import React, { useState } from 'react';
import { TOOLKIT } from '../data/portfolioData';
import { Layers, ShoppingBag, Code, Terminal, CheckCircle2 } from 'lucide-react';

export const Toolkit: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const primaryIcons: Record<string, any> = {
    SHOPIFY: ShoppingBag,
    WORDPRESS: Layers,
    PHP: Code,
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#050505] dark:bg-[#050505] light:bg-[#F5F3EE] border-t border-white/10 dark:border-white/10 light:border-black/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-16">
          <span className="font-mono text-xs tracking-ultra text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32] font-semibold">
            04 / TOOLKIT
          </span>
          <span className="h-[1px] w-12 bg-[#C8A96B]/40" />
        </div>

        <div className="mb-16">
          <h2 className="text-editorial-title font-black text-atelier-text tracking-tight uppercase">
            The tools behind the work.
          </h2>
          <p className="text-sm sm:text-base text-atelier-muted mt-3 max-w-xl">
            A purposeful technical stack refined through daily hands-on implementation across modern web and ecommerce platforms.
          </p>
        </div>

        {/* Primary Stack: Large Typographic Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TOOLKIT.primary.map((tech) => {
            const Icon = primaryIcons[tech.name] || Terminal;
            return (
              <div
                key={tech.name}
                className="group relative p-8 rounded-3xl bg-[#0A0A0D] dark:bg-[#0A0A0D] light:bg-[#FFFFFF] border border-white/10 dark:border-white/10 light:border-black/10 transition-all duration-300 hover:border-[#C8A96B] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 flex items-center justify-center text-[#C8A96B] mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>

                <div className="text-[10px] font-mono tracking-widest text-[#C8A96B] uppercase mb-1">
                  CORE SPECIALIZATION
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-atelier-text mb-3 tracking-tight font-display">
                  {tech.name}
                </h3>

                <p className="text-xs sm:text-sm text-atelier-secondary leading-relaxed">
                  {tech.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[10px] font-mono text-atelier-muted">
                  <CheckCircle2 size={13} className="text-[#C8A96B] mr-1.5" />
                  <span>3+ Years Practical Work</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Technologies: Artistic Typographic Composition */}
        <div>
          <div className="text-xs font-mono tracking-widest uppercase text-atelier-muted mb-6">
            ADDITIONAL PROFICIENCIES & PRODUCTION TOOLS
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {TOOLKIT.technologies.map((tech) => {
              const isActive = activeSkill === tech;

              return (
                <div
                  key={tech}
                  onMouseEnter={() => setActiveSkill(tech)}
                  onMouseLeave={() => setActiveSkill(null)}
                  className={`px-5 py-3 rounded-2xl border text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 cursor-default select-none ${
                    isActive
                      ? 'bg-[#C8A96B] text-black border-[#C8A96B] shadow-lg shadow-[#C8A96B]/20 scale-105'
                      : 'bg-[#0E0E12] dark:bg-[#0E0E12] light:bg-[#FFFFFF] text-atelier-secondary border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/30'
                  }`}
                >
                  <span className="font-semibold">{tech}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
