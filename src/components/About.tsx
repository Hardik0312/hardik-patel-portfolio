import React from 'react';
import { ArrowDownRight, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36 border-t border-white/5 dark:border-white/5 light:border-black/5 bg-[#050505] dark:bg-[#050505] light:bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs tracking-ultra text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32] font-semibold">
            01 / ABOUT
          </span>
          <span className="h-[1px] w-12 bg-[#C8A96B]/40" />
        </div>

        {/* Big Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Statement */}
          <div className="lg:col-span-8">
            <h2 className="text-editorial-title font-bold text-atelier-text leading-tight mb-8">
              "Technology meets visual experience."
            </h2>

            <div className="space-y-6 text-lg sm:text-xl text-atelier-secondary font-normal leading-relaxed">
              <p>
                I'm a web developer with <strong className="font-semibold text-atelier-text">3+ years of hands-on experience</strong> working across <span className="text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32] font-semibold">WordPress, Shopify and PHP</span>. I focus on building responsive, reliable and business-focused websites that provide a strong user experience.
              </p>
              <p>
                My work includes ecommerce development, business websites, website maintenance, content implementation, hosting and website improvements. Every build is treated with precision: writing clean code, structuring accessible layouts, and making sure the digital presence performs seamlessly in real business conditions.
              </p>
            </div>

            {/* Core Values / Working Philosophy */}
            <div className="mt-12 pt-8 border-t border-white/10 dark:border-white/10 light:border-black/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-[#C8A96B] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-atelier-text tracking-wide mb-1 uppercase font-display">Business First</h4>
                  <p className="text-xs text-atelier-muted leading-relaxed">Websites engineered around real conversion paths and measurable user clarity.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-[#C8A96B] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-atelier-text tracking-wide mb-1 uppercase font-display">Clean Code</h4>
                  <p className="text-xs text-atelier-muted leading-relaxed">Modular Liquid & PHP structures that are easy to maintain and scale.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-[#C8A96B] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-atelier-text tracking-wide mb-1 uppercase font-display">Rock-Solid Support</h4>
                  <p className="text-xs text-atelier-muted leading-relaxed">Ongoing maintenance, updates, backups and swift technical turnaround.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Details Card */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-[#0A0A0C] dark:bg-[#0A0A0C] light:bg-[#ECEAE4] border border-white/10 dark:border-white/10 light:border-black/10">
            <div className="text-[11px] font-mono tracking-widest uppercase text-[#C8A96B] mb-6 flex items-center justify-between">
              <span>DEVELOPER PROFILE</span>
              <ArrowDownRight size={14} />
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-atelier-muted">LOCATION</div>
                <div className="text-base font-bold text-atelier-text mt-0.5">Gujarat, India</div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-atelier-muted">EXPERIENCE</div>
                <div className="text-base font-bold text-atelier-text mt-0.5">3+ Years Professional Practice</div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-atelier-muted">SPECIALIZATION</div>
                <div className="text-base font-bold text-atelier-text mt-0.5">Shopify Liquid · WordPress · PHP</div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-atelier-muted">DIRECT CONTACT</div>
                <a
                  href="mailto:phardik.1293@gmail.com"
                  className="block text-sm font-mono text-[#C8A96B] hover:underline mt-0.5"
                >
                  phardik.1293@gmail.com
                </a>
                <a
                  href="tel:+918238778874"
                  className="block text-sm font-mono text-atelier-secondary hover:text-atelier-text mt-0.5"
                >
                  +91 8238778874
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
