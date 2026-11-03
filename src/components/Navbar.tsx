import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-atelier-bg/85 backdrop-blur-md border-b border-atelier-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left: HP / Hardik Patel */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-2 text-atelier-text font-black tracking-tight text-lg group focus:outline-none"
        >
          <span className="w-8 h-8 rounded-lg bg-atelier-accent text-white flex items-center justify-center font-bold text-xs shadow-md shadow-[#4B78FF]/30 group-hover:scale-105 transition-transform">
            HP
          </span>
          <span className="font-extrabold text-sm sm:text-base tracking-tight">
            Hardik Patel
          </span>
        </a>

        {/* Center: Home | Work | About | Contact */}
        <nav className="hidden md:flex items-center space-x-1 p-1 rounded-full border border-atelier-border bg-atelier-surface/50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-atelier-secondary hover:text-atelier-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Theme Toggle & LET'S TALK ↗ */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            data-cursor="TALK"
            className="hidden sm:inline-flex items-center space-x-2 px-5 py-2 rounded-full border border-atelier-border hover:border-atelier-accent bg-atelier-surface/50 hover:bg-atelier-accent hover:text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 text-atelier-text shadow-sm"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="md:hidden p-2 text-atelier-text rounded-lg hover:bg-white/5 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-atelier-border bg-atelier-bg/95 backdrop-blur-xl px-6 py-5 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-base font-bold text-atelier-text hover:text-atelier-accent transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full py-3 rounded-xl bg-atelier-accent text-white text-xs font-bold tracking-wider uppercase text-center flex items-center justify-center space-x-2 mt-2"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
};
