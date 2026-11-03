import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Layers, Code, ShoppingBag } from 'lucide-react';
import gsap from 'gsap';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const cardShopifyRef = useRef<HTMLDivElement>(null);
  const cardWpRef = useRef<HTMLDivElement>(null);
  const cardPhpRef = useRef<HTMLDivElement>(null);

  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for cinematic entrance sequence
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
      })
      .from('.hero-title-line', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
      }, '-=0.4')
      .from('.hero-description', {
        opacity: 0,
        y: 25,
        duration: 0.8,
      }, '-=0.5')
      .from('.hero-cta-group', {
        opacity: 0,
        y: 20,
        duration: 0.8,
      }, '-=0.5')
      .from('.hero-status', {
        opacity: 0,
        duration: 0.6,
      }, '-=0.4')
      .from('.hero-mockup-wrapper', {
        opacity: 0,
        scale: 0.93,
        y: 30,
        duration: 1.2,
        ease: 'power2.out',
      }, '-=1.0')
      .from('.hero-float-card', {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.9,
      }, '-=0.8');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Subtle 3D perspective mouse tilt (2-3 degrees)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mockupRef.current) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    // Limit to max 3 degrees
    const rotateY = x * 6;
    const rotateX = -y * 6;

    setMouseOffset({ x: rotateY, y: rotateX });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-screen pt-28 sm:pt-36 pb-20 flex items-center justify-center overflow-hidden atelier-grid"
    >
      {/* Atmospheric lighting glows */}
      <div className="atelier-glow w-[550px] h-[550px] bg-[#C8A96B] -top-32 -left-20 opacity-[0.08]" />
      <div className="atelier-glow w-[600px] h-[600px] bg-[#8B5CF6] top-1/3 -right-32 opacity-[0.07]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetrical Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Micro label */}
            <div className="hero-badge flex items-center space-x-3 mb-6">
              <span className="h-[1px] w-8 bg-[#C8A96B]" />
              <span className="font-mono text-xs tracking-ultra uppercase text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32] font-semibold">
                INDEPENDENT WEB DEVELOPER
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-editorial-hero font-extrabold text-atelier-text leading-none tracking-tighter mb-8">
              <div className="hero-title-line overflow-hidden">
                <span>WEBSITES BUILT</span>
              </div>
              <div className="hero-title-line overflow-hidden">
                <span>TO WORK.</span>
              </div>
              <div className="hero-title-line overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96B] via-[#E2CB96] to-[#C8A96B] animate-pulse-subtle">
                <span>DESIGNED TO BE</span>
              </div>
              <div className="hero-title-line overflow-hidden">
                <span className="italic font-normal font-serif">REMEMBERED.</span>
              </div>
            </h1>

            {/* Supporting Statement */}
            <p className="hero-description text-base sm:text-lg text-atelier-secondary max-w-xl font-normal leading-relaxed mb-10">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* CTAs */}
            <div className="hero-cta-group flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
              <a
                href="#work"
                data-cursor="VIEW"
                className="group relative inline-flex items-center space-x-3 px-7 py-4 rounded-full bg-[#C8A96B] text-black font-bold text-xs tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-[#d8bc80] hover:shadow-xl hover:shadow-[#C8A96B]/20"
              >
                <span>EXPLORE SELECTED WORK</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                data-cursor="OPEN"
                className="group inline-flex items-center space-x-2 px-7 py-4 rounded-full border border-white/15 dark:border-white/15 light:border-black/15 text-atelier-text hover:border-[#C8A96B] font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-white/5 dark:bg-white/5 light:bg-black/5 backdrop-blur-sm"
              >
                <span>LET'S WORK TOGETHER</span>
                <ArrowUpRight size={15} className="text-[#C8A96B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Availability status badge */}
            <div className="hero-status inline-flex items-center space-x-3 text-xs font-mono tracking-widest text-atelier-muted">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="uppercase text-[11px] font-semibold">{PERSONAL_INFO.availability}</span>
              <span className="text-neutral-500">·</span>
              <span className="text-[11px] text-neutral-400">GUJARAT, INDIA</span>
            </div>
          </div>

          {/* Right Column: 3D Browser Mockup with floating platform cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center perspective-1000 mt-6 lg:mt-0">
            {/* Background Floating Card: SHOPIFY */}
            <div
              ref={cardShopifyRef}
              className="hero-float-card absolute -top-8 -left-6 z-20 hidden sm:flex items-center space-x-2.5 px-4 py-2.5 rounded-xl bg-[#111114]/90 dark:bg-[#111114]/90 light:bg-white/95 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-105"
              style={{
                transform: `translate(${mouseOffset.x * -1.5}px, ${mouseOffset.y * -1.5}px)`
              }}
            >
              <div className="w-7 h-7 rounded-lg bg-[#95BF47]/10 flex items-center justify-center text-[#95BF47]">
                <ShoppingBag size={14} />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold tracking-wider text-atelier-muted">ECOMMERCE</div>
                <div className="text-xs font-bold text-atelier-text">SHOPIFY / LIQUID</div>
              </div>
            </div>

            {/* Background Floating Card: WORDPRESS */}
            <div
              ref={cardWpRef}
              className="hero-float-card absolute -bottom-6 -left-4 z-20 hidden sm:flex items-center space-x-2.5 px-4 py-2.5 rounded-xl bg-[#111114]/90 dark:bg-[#111114]/90 light:bg-white/95 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-105"
              style={{
                transform: `translate(${mouseOffset.x * 2}px, ${mouseOffset.y * 2}px)`
              }}
            >
              <div className="w-7 h-7 rounded-lg bg-[#21759B]/10 flex items-center justify-center text-[#21759B]">
                <Layers size={14} />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold tracking-wider text-atelier-muted">CONTENT ARCHITECTURE</div>
                <div className="text-xs font-bold text-atelier-text">WORDPRESS & ELEMENTOR</div>
              </div>
            </div>

            {/* Background Floating Card: PHP */}
            <div
              ref={cardPhpRef}
              className="hero-float-card absolute top-1/2 -right-6 z-20 hidden sm:flex items-center space-x-2.5 px-4 py-2.5 rounded-xl bg-[#111114]/90 dark:bg-[#111114]/90 light:bg-white/95 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-105"
              style={{
                transform: `translate(${mouseOffset.x * -2}px, ${mouseOffset.y * -2}px)`
              }}
            >
              <div className="w-7 h-7 rounded-lg bg-[#777BB4]/15 flex items-center justify-center text-[#777BB4]">
                <Code size={14} />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold tracking-wider text-atelier-muted">BACKEND LOGIC</div>
                <div className="text-xs font-bold text-atelier-text">MODULAR PHP</div>
              </div>
            </div>

            {/* Main Interactive Browser Mockup */}
            <div
              ref={mockupRef}
              className="hero-mockup-wrapper w-full max-w-lg rounded-2xl overflow-hidden bg-[#111114] dark:bg-[#111114] light:bg-[#FFFFFF] border border-white/15 dark:border-white/15 light:border-black/10 shadow-2xl transition-transform duration-300 ease-out preserve-3d"
              style={{
                transform: `rotateY(${mouseOffset.x}deg) rotateX(${mouseOffset.y}deg)`,
              }}
            >
              {/* Browser Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 dark:border-white/10 light:border-black/10 bg-[#0A0A0C]/90 dark:bg-[#0A0A0C]/90 light:bg-[#ECEAE4]">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 rounded-md bg-white/5 dark:bg-white/5 light:bg-black/5 text-[10px] font-mono text-atelier-muted border border-white/5">
                  <span className="text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32]">https://</span>
                  <span>atelier.hardikpatel.dev</span>
                </div>
                <div className="text-atelier-muted text-xs">
                  <Sparkles size={12} className="text-[#C8A96B]" />
                </div>
              </div>

              {/* Browser Window Content: Luxury Ecommerce Interface Preview */}
              <div className="p-5 sm:p-6 bg-[#0E0E12] dark:bg-[#0E0E12] light:bg-[#FAF9F6]">
                {/* Store mini header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5 dark:border-white/5 light:border-black/5">
                  <div className="font-display font-extrabold tracking-widest text-xs uppercase text-atelier-text">
                    L'ÉLIXIR BOTANICS
                  </div>
                  <div className="flex items-center space-x-3 text-[10px] font-mono text-atelier-secondary">
                    <span>COLLECTIONS</span>
                    <span>ARCHIVE</span>
                    <span className="px-2 py-0.5 rounded bg-[#C8A96B]/20 text-[#C8A96B] font-bold">CART (1)</span>
                  </div>
                </div>

                {/* Hero Product Spotlight */}
                <div className="grid grid-cols-2 gap-4 items-center">
                  {/* Product Visual simulation */}
                  <div className="aspect-[4/5] rounded-xl bg-gradient-to-b from-[#18181D] to-[#121216] dark:from-[#18181D] dark:to-[#121216] light:from-[#F0EEEA] light:to-[#E5E2DC] p-4 flex flex-col justify-between relative overflow-hidden border border-white/5">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#C8A96B] self-start px-1.5 py-0.5 rounded bg-[#C8A96B]/10">
                      ORGANIC RESTORATIVE
                    </span>

                    {/* Minimalist product bottle graphic */}
                    <div className="my-auto flex flex-col items-center">
                      <div className="w-6 h-4 bg-[#C8A96B]/40 rounded-t-sm" />
                      <div className="w-16 h-24 rounded-lg bg-gradient-to-tr from-[#25252D] via-[#1a1a20] to-[#2e2e38] dark:from-[#25252D] dark:to-[#2e2e38] light:from-[#D8D4CC] light:to-[#EDEAE3] border border-white/10 flex flex-col items-center justify-center p-2 shadow-inner">
                        <div className="w-8 h-10 border border-[#C8A96B]/30 rounded flex items-center justify-center">
                          <span className="text-[8px] font-serif text-[#C8A96B] font-bold">HP</span>
                        </div>
                        <span className="text-[7px] font-mono tracking-tighter text-neutral-400 mt-1">NO. 03</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[9px] font-mono text-atelier-muted">
                      <span>50 ML</span>
                      <span className="text-[#C8A96B] font-bold">₹2,850</span>
                    </div>
                  </div>

                  {/* Product Details Simulation */}
                  <div className="flex flex-col justify-between h-full py-1">
                    <div>
                      <div className="text-[10px] font-mono tracking-wider text-[#C8A96B] mb-1">
                        LIMITED RELEASE
                      </div>
                      <h4 className="text-sm font-bold text-atelier-text mb-2 leading-tight">
                        CELLULAR REPAIR INFUSION
                      </h4>
                      <p className="text-[11px] text-atelier-muted leading-relaxed line-clamp-2 mb-3">
                        Shopify theme engineered with modular Liquid sections, dynamic variant pills, and sub-second load times.
                      </p>

                      <div className="flex items-center space-x-1.5 mb-3">
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-atelier-secondary">30ml</span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#C8A96B]/20 border border-[#C8A96B]/40 text-[#C8A96B] font-bold">50ml</span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-atelier-secondary">100ml</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <button className="w-full py-2 px-3 rounded-lg bg-[#C8A96B] text-black font-extrabold text-[10px] tracking-wider uppercase flex items-center justify-center space-x-1.5">
                        <span>ADD TO CART</span>
                        <ArrowRight size={11} />
                      </button>
                      <div className="flex items-center justify-between text-[9px] font-mono text-atelier-muted px-1">
                        <span>✓ Fast Shipping</span>
                        <span>✓ Secure Liquid Checkout</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-bar metrics */}
                <div className="mt-4 pt-3 border-t border-white/5 dark:border-white/5 light:border-black/5 flex items-center justify-between text-[10px] font-mono text-atelier-muted">
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Performance Score: 98</span>
                  </span>
                  <span className="text-[#C8A96B]">Liquid / Elementor / PHP</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
