import React from 'react';

export const ExperienceHighlight: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/10 dark:border-white/10 light:border-black/10 bg-[#08080A] dark:bg-[#08080A] light:bg-[#ECEAE4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Big Oversized 03+ */}
          <div className="lg:col-span-5 flex items-baseline space-x-4">
            <span className="text-editorial-huge font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-atelier-text via-[#C8A96B] to-atelier-text select-none">
              03+
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32]">
                YEARS OF
              </span>
              <span className="font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-atelier-text">
                EXPERIENCE
              </span>
            </div>
          </div>

          {/* Big Editorial Platform Tags */}
          <div className="lg:col-span-7 flex flex-wrap items-center gap-4 sm:gap-6 lg:justify-end">
            <div className="px-6 py-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-atelier-muted block">ECOMMERCE ARCHITECTURE</span>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-atelier-text">SHOPIFY</span>
            </div>

            <div className="px-6 py-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-atelier-muted block">CONTENT MANAGEMENT</span>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-atelier-text">WORDPRESS</span>
            </div>

            <div className="px-6 py-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-atelier-muted block">BACKEND LOGIC</span>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-atelier-text">PHP</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
