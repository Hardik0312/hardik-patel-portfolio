import React from 'react';
import { ShoppingBag, Layers, Code2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceCards = [
    {
      id: 'shopify',
      number: 'CARD 01',
      title: 'Shopify Development',
      badge: 'POPULAR & ECOMMERCE',
      description: 'Shopify storefronts, Liquid customization, ecommerce layouts and theme improvements.',
      techs: ['Liquid Themes', 'Custom Sections', 'Cart Optimization', 'App Setup'],
      isFeatured: true, // Vibrant electric blue card inspired by the reference screenshot
      icon: ShoppingBag,
    },
    {
      id: 'wordpress',
      number: 'CARD 02',
      title: 'WordPress Development',
      badge: 'CMS & BUSINESS',
      description: 'Business websites, Elementor, WooCommerce and ongoing website maintenance.',
      techs: ['Elementor Pro', 'WooCommerce Stores', 'Custom Fields', 'Site Maintenance'],
      isFeatured: false,
      icon: Layers,
    },
    {
      id: 'php',
      number: 'CARD 03',
      title: 'PHP Development',
      badge: 'CUSTOM & BACKEND',
      description: 'PHP website development, customization and frontend improvements.',
      techs: ['Modular PHP', 'Form Handlers', 'cPanel / Hostinger', 'Speed Optimization'],
      isFeatured: false,
      icon: Code2,
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 border-b border-atelier-border bg-atelier-bg relative overflow-hidden">
      {/* Background soft spray */}
      <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] rounded-full blue-spray-glow -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-atelier-border">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-atelier-accent uppercase mb-3 block">
              SERVICES & EXPERTISE
            </span>
            <h2 className="text-section-heading font-black text-atelier-text">
              All kind of web development solutions.
            </h2>
          </div>

          <a
            href="#contact"
            className="mt-6 sm:mt-0 inline-flex items-center space-x-2 text-xs font-bold font-mono tracking-wider uppercase text-atelier-accent hover:underline self-start sm:self-auto"
          >
            <span>DISCUSS A PROJECT</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* 3 Premium Service Cards (Inspired by the Reference screenshot's 3-card layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card) => {
            const Icon = card.icon;

            if (card.isFeatured) {
              // Highlighted Vibrant Electric Blue Card (matching reference Card 1)
              return (
                <div
                  key={card.id}
                  className="relative p-8 rounded-3xl bg-atelier-accent text-white shadow-2xl shadow-[#4B78FF]/30 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <Icon size={24} />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full bg-white/20 uppercase font-bold text-white">
                        {card.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black tracking-tight mb-4 text-white font-display">
                      {card.title}
                    </h3>

                    <p className="text-sm text-white/90 leading-relaxed mb-8">
                      {card.description}
                    </p>
                  </div>

                  <div>
                    <div className="space-y-2 mb-8 border-t border-white/20 pt-6">
                      {card.techs.map((tech) => (
                        <div key={tech} className="flex items-center space-x-2 text-xs font-mono text-white/95">
                          <CheckCircle2 size={14} className="text-white flex-shrink-0" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="w-full py-3 rounded-2xl bg-white text-atelier-accent hover:bg-neutral-100 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md"
                    >
                      <span>START SHOPIFY STORE</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              );
            }

            // Cards 2 & 3: Soft Elevated Cards
            return (
              <div
                key={card.id}
                className="relative p-8 rounded-3xl bg-atelier-surface border border-atelier-border hover:border-atelier-accent flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 group shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-atelier-softblue flex items-center justify-center text-atelier-accent">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full bg-atelier-border/50 text-atelier-muted uppercase font-bold">
                      {card.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black tracking-tight mb-4 text-atelier-text font-display group-hover:text-atelier-accent transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-atelier-secondary leading-relaxed mb-8">
                    {card.description}
                  </p>
                </div>

                <div>
                  <div className="space-y-2 mb-8 border-t border-atelier-border pt-6">
                    {card.techs.map((tech) => (
                      <div key={tech} className="flex items-center space-x-2 text-xs font-mono text-atelier-secondary">
                        <CheckCircle2 size={14} className="text-atelier-accent flex-shrink-0" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="w-full py-3 rounded-2xl border border-atelier-border hover:border-atelier-accent bg-atelier-bg hover:bg-atelier-accent hover:text-white text-atelier-text font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-sm"
                  >
                    <span>EXPLORE SOLUTIONS</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
