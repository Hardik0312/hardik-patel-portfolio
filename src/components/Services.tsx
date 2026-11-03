import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First expanded by default

  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#050505] dark:bg-[#050505] light:bg-[#F5F3EE] border-t border-white/10 dark:border-white/10 light:border-black/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-16">
          <span className="font-mono text-xs tracking-ultra text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32] font-semibold">
            SERVICES & CAPABILITIES
          </span>
          <span className="h-[1px] w-12 bg-[#C8A96B]/40" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
          <h2 className="text-editorial-title font-black text-atelier-text tracking-tight uppercase">
            HOW I CAN HELP.
          </h2>
          <p className="text-sm font-mono text-atelier-muted mt-3 sm:mt-0 max-w-sm">
            Professional web engineering tailored to the exact scale and technical needs of your business.
          </p>
        </div>

        {/* Premium Expandable Service Rows */}
        <div className="space-y-4">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={service.number}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
                  isExpanded
                    ? 'bg-[#0E0E12] dark:bg-[#0E0E12] light:bg-[#FFFFFF] border-[#C8A96B] shadow-xl'
                    : 'bg-[#08080A] dark:bg-[#08080A] light:bg-[#ECEAE4] border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 sm:space-x-8">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32]">
                      {service.number}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-atelier-text font-display">
                      {service.title}
                    </h3>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${
                      isExpanded ? 'rotate-90 bg-[#C8A96B] text-black border-[#C8A96B]' : 'text-atelier-muted'
                    }`}
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Collapsible Content */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-white/10 dark:border-white/10 light:border-black/10 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-sm sm:text-base text-atelier-secondary leading-relaxed max-w-2xl mb-6">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-xs font-mono text-atelier-muted p-2 rounded-lg bg-white/5 dark:bg-white/5 light:bg-black/5"
                        >
                          <Check size={13} className="text-[#C8A96B] flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
