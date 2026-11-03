import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERTISE', href: '#expertise' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full border ${
          scrolled
            ? 'py-2.5 px-5 bg-[#050505]/80 dark:bg-[#050505]/80 light:bg-[#F5F3EE]/85 border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-xl shadow-2xl scale-[0.98]'
            : 'py-4 px-6 bg-[#0A0A0C]/50 dark:bg-[#0A0A0C]/50 light:bg-white/60 border-white/5 dark:border-white/5 light:border-black/5 backdrop-blur-md'
        }`}
      >
        {/* Brand / Name */}
        <a
          href="#"
          className="group flex items-center space-x-2.5 font-bold tracking-tight text-sm uppercase text-atelier-text focus:outline-none"
        >
          <span className="w-2 h-2 rounded-full bg-[#C8A96B] group-hover:scale-125 transition-transform duration-300"></span>
          <span className="font-display tracking-widest text-xs sm:text-sm font-extrabold">
            HARDIK PATEL
          </span>
          <span className="hidden md:inline-block text-[10px] font-mono tracking-widest text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32] opacity-75 border-l border-white/10 dark:border-white/10 light:border-black/10 pl-2">
            ATELIER
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest text-atelier-secondary">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative transition-colors duration-200 hover:text-[#C8A96B] dark:hover:text-[#C8A96B] light:hover:text-[#8A6A32] py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A96B] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action Bar */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            data-cursor="TALK"
            className="hidden sm:inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full bg-[#C8A96B] text-black hover:bg-[#d8bc80] transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-[#C8A96B]/20"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-atelier-text rounded-full hover:bg-white/5 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 p-6 rounded-3xl bg-[#0A0A0C]/95 dark:bg-[#0A0A0C]/95 light:bg-[#F5F3EE]/95 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-2xl shadow-2xl z-50 flex flex-col space-y-5 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-bold tracking-widest text-atelier-text hover:text-[#C8A96B] transition-colors py-2 border-b border-white/5 dark:border-white/5 light:border-black/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center space-x-2 text-center text-xs font-bold tracking-widest uppercase py-3 rounded-full bg-[#C8A96B] text-black"
            >
              <span>LET'S WORK TOGETHER</span>
              <ArrowUpRight size={14} />
            </a>
            <div className="text-center font-mono text-[11px] text-atelier-muted">
              phardik.1293@gmail.com · +91 8238778874
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
