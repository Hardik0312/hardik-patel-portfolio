import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, ShoppingBag, Layers, Code2 } from 'lucide-react';
import gsap from 'gsap';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-intro-pill', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
      .from('.hero-headline-line', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.9,
      }, '-=0.3')
      .from('.hero-subtext', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, '-=0.4')
      .from('.hero-cta-buttons', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, '-=0.4')
      .from('.hero-portrait-card', {
        opacity: 0,
        scale: 0.94,
        y: 30,
        duration: 1.1,
        ease: 'power2.out',
      }, '-=0.8')
      .from('.hero-floating-tag', {
        opacity: 0,
        scale: 0.8,
        stagger: 0.12,
        duration: 0.6,
      }, '-=0.5');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-atelier-border stipple-overlay"
    >
      {/* Electric Blue ambient spray / glow spots inspired by the reference design */}
      <div className="absolute top-12 right-1/4 w-[450px] h-[450px] rounded-full blue-spray-glow -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full blue-spray-glow -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Main Hero Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Expressive Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small Label Pill */}
            <div className="hero-intro-pill inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-atelier-border bg-atelier-surface/80 backdrop-blur-sm self-start mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-atelier-text">
                HELLO, I'M HARDIK 👋
              </span>
            </div>

            {/* Main Heading: WEB DEVELOPER & DIGITAL EXPERIENCE BUILDER. */}
            <h1 className="text-reference-hero font-black text-atelier-text tracking-tighter mb-6 leading-none">
              <div className="hero-headline-line">
                <span>WEB</span>{' '}
                <span className="text-atelier-accent">DEVELOPER</span>
              </div>
              <div className="hero-headline-line">
                <span>& DIGITAL</span>
              </div>
              <div className="hero-headline-line flex items-center flex-wrap gap-3">
                <span className="text-atelier-accent">EXPERIENCE</span>
                <span>BUILDER.</span>
                <span className="text-atelier-accent text-3xl sm:text-5xl font-light">+</span>
              </div>
            </h1>

            {/* Supporting Text */}
            <p className="hero-subtext text-base sm:text-lg text-atelier-secondary max-w-xl font-normal leading-relaxed mb-8">
              Building modern Shopify, WordPress and PHP websites with 3+ years of hands-on development experience.
            </p>

            {/* CTAs */}
            <div className="hero-cta-buttons flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#work"
                data-cursor="WORK"
                className="group inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-atelier-accent text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-lg shadow-[#4B78FF]/25 hover:-translate-y-0.5"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                data-cursor="TALK"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full border border-atelier-border bg-atelier-surface hover:border-atelier-accent text-atelier-text font-bold text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight size={15} className="text-atelier-accent" />
              </a>
            </div>

            {/* Quick Micro-Bio card matching the reference style ("HI, I'M ...") */}
            <div className="p-6 rounded-2xl border border-atelier-border bg-atelier-surface/60 backdrop-blur-sm max-w-xl">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-atelier-accent font-bold">
                  ABOUT HARDIK PATEL
                </span>
              </div>
              <p className="text-sm text-atelier-secondary leading-relaxed">
                I'm a web developer with <strong className="text-atelier-text font-semibold">3+ years of hands-on experience</strong> working across <span className="text-atelier-accent font-semibold">Shopify, WordPress and PHP</span>. I focus on building responsive, high-converting websites and maintaining client digital infrastructure with precision.
              </p>
            </div>
          </div>

          {/* Right Column: Actual Real Photograph with Reference-Inspired Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Background Geometric Layer Card (Tilted Dark Slate) */}
            <div className="hero-portrait-card relative w-full max-w-md">
              
              {/* Back Card: dark slate/blue tilted plate */}
              <div className="absolute inset-0 bg-[#0F1424] dark:bg-[#121624] light:bg-[#EAF0FF] rounded-3xl transform rotate-3 translate-x-2 translate-y-3 border border-atelier-border/80 shadow-2xl -z-10" />

              {/* Decorative Spiral / Orbital Line Vector (SVG) */}
              <svg
                className="absolute -top-10 -right-8 w-36 h-36 text-atelier-accent/40 pointer-events-none -z-10 animate-spin-slow"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="50" cy="50" r="45" strokeDasharray="4 6" />
                <ellipse cx="50" cy="50" rx="35" ry="18" transform="rotate(30 50 50)" />
              </svg>

              {/* Main Photo Container */}
              <div
                ref={portraitRef}
                className="relative rounded-3xl overflow-hidden border border-atelier-border bg-atelier-surface shadow-2xl group"
              >
                {/* Real Profile Photo of Hardik Patel */}
                <div className="aspect-[4/4.8] w-full overflow-hidden bg-gradient-to-t from-black/20 to-transparent">
                  <img
                    src="./images/hardik-profile.png"
                    alt="Hardik Patel - WordPress, Shopify & PHP Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                </div>

                {/* Bottom Overlay Gradient & Name Ribbon */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white flex items-center justify-between">
                  <div>
                    <h3 className="font-extrabold text-base tracking-tight text-white">
                      Hardik Patel
                    </h3>
                    <p className="text-xs font-mono text-[#4B78FF]">
                      WordPress · Shopify · PHP
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                    Gujarat, IN
                  </span>
                </div>
              </div>

              {/* Floating Tag 1: SHOPIFY (Top-Left) */}
              <div className="hero-floating-tag absolute -top-4 -left-4 px-4 py-2 rounded-xl bg-atelier-surface/95 border border-atelier-border backdrop-blur-md shadow-xl flex items-center space-x-2 z-20">
                <div className="w-6 h-6 rounded-lg bg-[#95BF47]/15 text-[#95BF47] flex items-center justify-center">
                  <ShoppingBag size={13} />
                </div>
                <span className="text-xs font-bold font-mono tracking-wider text-atelier-text">
                  SHOPIFY
                </span>
              </div>

              {/* Floating Tag 2: WORDPRESS (Bottom-Right) */}
              <div className="hero-floating-tag absolute -bottom-5 -right-3 px-4 py-2 rounded-xl bg-atelier-surface/95 border border-atelier-border backdrop-blur-md shadow-xl flex items-center space-x-2 z-20">
                <div className="w-6 h-6 rounded-lg bg-[#21759B]/15 text-[#21759B] flex items-center justify-center">
                  <Layers size={13} />
                </div>
                <span className="text-xs font-bold font-mono tracking-wider text-atelier-text">
                  WORDPRESS
                </span>
              </div>

              {/* Floating Tag 3: PHP (Center-Right) */}
              <div className="hero-floating-tag absolute top-1/2 -right-6 hidden sm:flex px-3.5 py-2 rounded-xl bg-atelier-surface/95 border border-atelier-border backdrop-blur-md shadow-xl items-center space-x-2 z-20">
                <div className="w-6 h-6 rounded-lg bg-[#4B78FF]/15 text-atelier-accent flex items-center justify-center">
                  <Code2 size={13} />
                </div>
                <span className="text-xs font-bold font-mono tracking-wider text-atelier-text">
                  PHP
                </span>
              </div>

              {/* Circular Reference-Style Badge ("AVAILABLE FOR WORK ↗") */}
              <div className="hero-floating-tag absolute -top-6 -right-6 hidden sm:flex w-20 h-20 rounded-full bg-atelier-accent text-white p-2 flex-col items-center justify-center text-center shadow-lg shadow-[#4B78FF]/30 transform rotate-12 animate-pulse-subtle z-20">
                <span className="text-[9px] font-black uppercase tracking-tighter leading-tight">
                  LET'S WORK
                </span>
                <ArrowUpRight size={14} className="mt-0.5" />
              </div>

            </div>

          </div>

        </div>

        {/* Section 6: Experience Statistics (Three-column horizontal bar from reference: 1.9k+ / 1,320+ / 07) */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-atelier-border grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          
          <div className="flex flex-col sm:items-start items-center p-4 rounded-2xl hover:bg-atelier-surface/50 transition-colors">
            <span className="text-4xl sm:text-5xl font-black text-atelier-text tracking-tight font-display">
              03<span className="text-atelier-accent">+</span>
            </span>
            <span className="text-xs font-mono font-bold tracking-widest text-atelier-muted uppercase mt-1">
              Years Experience
            </span>
          </div>

          <div className="flex flex-col sm:items-start items-center p-4 rounded-2xl hover:bg-atelier-surface/50 transition-colors">
            <span className="text-4xl sm:text-5xl font-black text-atelier-text tracking-tight font-display">
              06
            </span>
            <span className="text-xs font-mono font-bold tracking-widest text-atelier-muted uppercase mt-1">
              Featured Projects
            </span>
          </div>

          <div className="flex flex-col sm:items-start items-center p-4 rounded-2xl hover:bg-atelier-surface/50 transition-colors">
            <span className="text-4xl sm:text-5xl font-black text-atelier-accent tracking-tight font-display">
              03
            </span>
            <span className="text-xs font-mono font-bold tracking-widest text-atelier-muted uppercase mt-1">
              Core Technologies
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
