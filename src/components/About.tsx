import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-atelier-border bg-atelier-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Editorial Description */}
          <div className="lg:col-span-8">
            <span className="text-xs font-mono font-bold tracking-widest text-atelier-accent uppercase mb-3 block">
              HELLO, I'M HARDIK.
            </span>

            <h2 className="text-section-heading font-black text-atelier-text mb-6">
              "Turning ideas into functional digital experiences."
            </h2>

            <p className="text-base sm:text-lg text-atelier-secondary leading-relaxed mb-6 font-normal">
              I'm a web developer with <strong className="text-atelier-text font-semibold">3+ years of experience</strong> working across <span className="text-atelier-accent font-semibold">Shopify, WordPress and PHP</span>. I enjoy building responsive websites, improving ecommerce experiences and maintaining professional business websites.
            </p>

            <p className="text-sm sm:text-base text-atelier-muted leading-relaxed mb-8">
              Based in Gujarat, India, I collaborate with brands, business owners, and digital agencies to deliver clean code, mobile-first responsiveness, and dependable technical execution.
            </p>

            {/* Email & Contact links */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-atelier-accent text-white text-xs font-bold tracking-wider uppercase hover:opacity-95 transition-opacity"
              >
                <Mail size={14} />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href="https://github.com/Hardik0312"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-atelier-border bg-atelier-surface hover:border-atelier-accent text-atelier-text text-xs font-bold tracking-wider uppercase transition-colors"
              >
                <Github size={14} />
                <span>GitHub Profile</span>
                <ArrowUpRight size={13} className="text-atelier-accent" />
              </a>
            </div>
          </div>

          {/* Right Column: Key Attributes */}
          <div className="lg:col-span-4 p-8 rounded-3xl border border-atelier-border bg-atelier-surface/80 backdrop-blur-sm">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-atelier-accent mb-6">
              QUICK INFORMATION
            </h3>

            <div className="space-y-5 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-atelier-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-atelier-muted uppercase">Location</div>
                  <div className="font-bold text-atelier-text">Gujarat, India</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-atelier-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-atelier-muted uppercase">Phone / WhatsApp</div>
                  <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="font-bold text-atelier-text hover:text-atelier-accent transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-atelier-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-atelier-muted uppercase">Primary Email</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="font-bold text-atelier-text hover:text-atelier-accent transition-colors font-mono text-xs">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
