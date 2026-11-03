import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-atelier-bg text-atelier-text pt-20 pb-12 border-t border-atelier-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-atelier-border items-start">
          
          {/* Left Column: HARDIK PATEL & Headline */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-7 h-7 rounded-lg bg-atelier-accent text-white flex items-center justify-center font-bold text-xs">
                HP
              </span>
              <span className="font-black text-xl tracking-tight uppercase">
                HARDIK PATEL
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-atelier-text tracking-tight max-w-lg leading-snug font-display">
              "Today, improve your business with quality web development."
            </h3>

            <p className="text-sm text-atelier-muted max-w-md">
              Specialized in Shopify Liquid storefronts, WordPress CMS architecture, and custom PHP web applications.
            </p>
          </div>

          {/* Right Column: Contact details & quick links */}
          <div className="md:col-span-5 flex flex-col md:items-end space-y-4 text-sm font-mono">
            <div className="flex items-center space-x-2 text-atelier-secondary">
              <Mail size={15} className="text-atelier-accent" />
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-atelier-accent transition-colors">
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="flex items-center space-x-2 text-atelier-secondary">
              <Phone size={15} className="text-atelier-accent" />
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-atelier-accent transition-colors">
                {PERSONAL_INFO.phone}
              </a>
            </div>

            <div className="flex items-center space-x-2 text-atelier-muted">
              <MapPin size={15} className="text-atelier-accent" />
              <span>Gujarat, India</span>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://github.com/Hardik0312"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-atelier-border hover:border-atelier-accent text-atelier-text hover:text-atelier-accent transition-colors"
                title="GitHub"
              >
                <Github size={16} />
              </a>

              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="px-4 py-2 rounded-full border border-atelier-border hover:border-atelier-accent text-xs uppercase tracking-wider flex items-center space-x-1.5 transition-colors"
              >
                <span>TOP</span>
                <ArrowUp size={13} className="text-atelier-accent" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-atelier-muted gap-4">
          <div>
            © 2026 Hardik Patel. All rights reserved.
          </div>
          <div>
            Built with modern React, TypeScript, Tailwind CSS & GSAP.
          </div>
        </div>

      </div>
    </footer>
  );
};
