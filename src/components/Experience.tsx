import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#08080A] dark:bg-[#08080A] light:bg-[#ECEAE4] border-t border-white/10 dark:border-white/10 light:border-black/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-16">
          <span className="font-mono text-xs tracking-ultra text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32] font-semibold">
            05 / EXPERIENCE
          </span>
          <span className="h-[1px] w-12 bg-[#C8A96B]/40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5">
            <h2 className="text-editorial-title font-black text-atelier-text tracking-tight uppercase mb-6">
              Experience built through real projects.
            </h2>
            <p className="text-sm sm:text-base text-atelier-secondary leading-relaxed mb-8">
              A track record grounded in working across ecommerce stores, business websites, responsive interfaces, website maintenance, content implementation and website improvements.
            </p>

            <div className="p-6 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 text-xs font-mono text-atelier-muted space-y-2">
              <div className="flex items-center space-x-2 text-atelier-text">
                <Briefcase size={14} className="text-[#C8A96B]" />
                <span className="font-bold">WordPress / Shopify / PHP Developer</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={14} className="text-[#C8A96B]" />
                <span>3+ Years Practical Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-[#C8A96B]" />
                <span>Gujarat, India</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {/* Practical Areas */}
            <div className="p-8 rounded-3xl bg-[#0B0B0E] dark:bg-[#0B0B0E] light:bg-[#FFFFFF] border border-white/10 dark:border-white/10 light:border-black/10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 dark:border-white/10 light:border-black/10">
                <div>
                  <h3 className="text-lg font-bold text-atelier-text">
                    Ecommerce & Storefront Engineering
                  </h3>
                  <div className="text-xs font-mono text-[#C8A96B]">Shopify · Liquid · UI Improvements</div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#C8A96B]/10 text-[#C8A96B] font-bold">
                  Core Area
                </span>
              </div>

              <p className="text-sm text-atelier-secondary leading-relaxed mb-4">
                Hands-on development of customized Shopify storefronts, tailoring Liquid templates, setting up product variations, creating collection filter drawers, and improving mobile buying workflows.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-atelier-muted">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-[#C8A96B]" />
                  <span>Custom theme sections</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-[#C8A96B]" />
                  <span>Cart & collection optimization</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#0B0B0E] dark:bg-[#0B0B0E] light:bg-[#FFFFFF] border border-white/10 dark:border-white/10 light:border-black/10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 dark:border-white/10 light:border-black/10">
                <div>
                  <h3 className="text-lg font-bold text-atelier-text">
                    WordPress CMS & Business Sites
                  </h3>
                  <div className="text-xs font-mono text-[#8B5CF6]">WordPress · Elementor · Content Structures</div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] font-bold">
                  Core Area
                </span>
              </div>

              <p className="text-sm text-atelier-secondary leading-relaxed mb-4">
                Delivering responsive business websites using WordPress and Elementor. Implementing structured custom fields, media libraries, reliable contact mechanisms, and smooth client editing capabilities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-atelier-muted">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-[#8B5CF6]" />
                  <span>Responsive page layouts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-[#8B5CF6]" />
                  <span>Ongoing site maintenance & updates</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#0B0B0E] dark:bg-[#0B0B0E] light:bg-[#FFFFFF] border border-white/10 dark:border-white/10 light:border-black/10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 dark:border-white/10 light:border-black/10">
                <div>
                  <h3 className="text-lg font-bold text-atelier-text">
                    PHP Backend & Hosting Management
                  </h3>
                  <div className="text-xs font-mono text-[#C8A96B]">PHP · Hostinger · cPanel · Git</div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-atelier-text font-bold">
                  Technical
                </span>
              </div>

              <p className="text-sm text-atelier-secondary leading-relaxed mb-4">
                Managing deployments, cPanel and Hostinger hosting environments, SSL setups, version control with Git and GitHub, and server-side PHP scripting.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-atelier-muted">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-[#C8A96B]" />
                  <span>Hostinger & cPanel deployment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-[#C8A96B]" />
                  <span>Performance & speed tuning</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
