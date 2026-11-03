import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EXPERTISE_LIST } from '../data/portfolioData';

export const Expertise: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="expertise" className="relative py-28 sm:py-36 bg-[#08080A] dark:bg-[#08080A] light:bg-[#ECEAE4] border-t border-white/10 dark:border-white/10 light:border-black/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-16">
          <span className="font-mono text-xs tracking-ultra text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32] font-semibold">
            03 / EXPERTISE
          </span>
          <span className="h-[1px] w-12 bg-[#C8A96B]/40" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <h2 className="text-editorial-title font-black text-atelier-text tracking-tight uppercase">
            WHAT I BUILD.
          </h2>
          <p className="text-sm font-mono text-atelier-muted mt-4 md:mt-0 max-w-md">
            Delivering clean architecture across content management, customized storefronts, and server-side web logic.
          </p>
        </div>

        {/* Large Interactive Editorial Rows */}
        <div className="divide-y divide-white/10 dark:divide-white/10 light:divide-black/10 border-y border-white/10 dark:border-white/10 light:border-black/10">
          {EXPERTISE_LIST.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={item.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group py-8 sm:py-10 transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 px-4 -mx-4 rounded-2xl hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5"
              >
                {/* Number & Title */}
                <div className="flex items-baseline space-x-6 sm:space-x-10">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32]">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-atelier-text group-hover:text-[#C8A96B] transition-colors font-display">
                      {item.title}
                    </h3>
                    <div className="text-[11px] font-mono text-atelier-muted mt-1">
                      {item.tag}
                    </div>
                  </div>
                </div>

                {/* Description & Interactive Arrow */}
                <div className="flex items-center justify-between md:justify-end space-x-8 pl-12 md:pl-0">
                  <p className="text-xs sm:text-sm text-atelier-secondary max-w-sm font-normal leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div
                    className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? 'bg-[#C8A96B] text-black border-[#C8A96B] scale-110'
                        : 'text-atelier-muted'
                    }`}
                  >
                    <ArrowUpRight
                      size={18}
                      className={`transition-transform duration-300 ${
                        isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
