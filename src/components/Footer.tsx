import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERTISE', href: '#expertise' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#020202] text-[#F5F5F5] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Giant Monolithic Editorial Name */}
        <div className="border-b border-white/10 pb-16 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase font-display leading-none">
                HARDIK PATEL
              </h2>
              <p className="font-mono text-xs sm:text-sm tracking-ultra text-[#C8A96B] uppercase mt-3 font-semibold">
                WORDPRESS · SHOPIFY · PHP
              </p>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              data-cursor="TOP"
              className="group self-start md:self-auto flex items-center space-x-2 px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:border-[#C8A96B] text-xs font-mono uppercase tracking-widest text-neutral-300 transition-all duration-300"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} className="text-[#C8A96B] group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Links and Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-[#C8A96B] uppercase block">
              THE DIGITAL ATELIER
            </span>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Crafting reliable ecommerce storefronts, high-converting WordPress sites, and modular PHP solutions for businesses worldwide.
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#C8A96B] uppercase block">
              NAVIGATION
            </span>
            <div className="flex flex-col space-y-2 text-xs font-mono text-neutral-400">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#C8A96B] uppercase block">
              DIRECT CHANNELS
            </span>
            <div className="space-y-2 text-xs font-mono text-neutral-400">
              <div className="flex items-center space-x-2">
                <Mail size={13} className="text-[#C8A96B]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={13} className="text-[#C8A96B]" />
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={13} className="text-[#C8A96B]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <div>
            {PERSONAL_INFO.copyright} · All rights reserved.
          </div>
          <div className="text-[11px] text-neutral-400">
            "Built with attention to detail."
          </div>
        </div>

      </div>
    </footer>
  );
};
