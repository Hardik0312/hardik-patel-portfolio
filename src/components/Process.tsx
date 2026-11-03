import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#08080A] dark:bg-[#08080A] light:bg-[#ECEAE4] border-t border-white/10 dark:border-white/10 light:border-black/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-16">
          <span className="font-mono text-xs tracking-ultra text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32] font-semibold">
            06 / PROCESS
          </span>
          <span className="h-[1px] w-12 bg-[#C8A96B]/40" />
        </div>

        <div className="mb-16">
          <h2 className="text-editorial-title font-black text-atelier-text tracking-tight uppercase">
            From idea to launch.
          </h2>
          <p className="text-sm sm:text-base text-atelier-muted mt-3 max-w-xl">
            A reliable 4-stage delivery process ensuring transparent collaboration, rigorous quality, and on-time deployment.
          </p>
        </div>

        {/* Process Timeline Grid: Horizontal on desktop, Vertical on mobile */}
        <div className="relative">
          {/* Subtle connecting line across desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 dark:via-white/15 light:via-black/15 to-transparent -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="group p-8 rounded-3xl bg-[#0B0B0E] dark:bg-[#0B0B0E] light:bg-[#FFFFFF] border border-white/10 dark:border-white/10 light:border-black/10 transition-all duration-300 hover:border-[#C8A96B] hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-full bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-[#C8A96B]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-atelier-muted uppercase">
                      STAGE {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-atelier-text mb-2 font-display">
                    {step.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32] mb-3">
                    {step.description}
                  </p>
                </div>

                <p className="text-xs text-atelier-muted leading-relaxed mt-4 pt-4 border-t border-white/5">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
