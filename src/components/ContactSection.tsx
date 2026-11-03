import React, { useState } from 'react';
import { Mail, Phone, ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Shopify',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedDirectly, setSubmittedDirectly] = useState(false);

  const projectOptions = [
    'Shopify',
    'WordPress',
    'PHP',
    'Website Maintenance',
    'Other',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please provide details about your project';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} Development - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Hardik,\n\nName: ${formData.name}\nProject Type: ${formData.projectType}\nEmail: ${formData.email}\n\nProject Overview:\n${formData.message}\n\nLooking forward to speaking with you.`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmittedDirectly(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-atelier-bg border-b border-atelier-border relative overflow-hidden">
      
      {/* Background soft spray */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blue-spray-glow -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section 10: Centered Reference-Style CTA Header with Orbital Spiral Doodles */}
        <div className="text-center max-w-4xl mx-auto mb-20 relative">
          
          <span className="text-xs font-mono font-bold tracking-widest text-atelier-accent uppercase mb-4 block">
            GET IN TOUCH
          </span>

          <h2 className="text-section-heading font-black text-atelier-text leading-tight mb-6">
            Anything in mind?
            <br />
            <span className="text-atelier-accent">Let's talk.</span>
          </h2>

          <p className="text-base sm:text-xl text-atelier-secondary max-w-xl mx-auto leading-relaxed mb-12">
            Have a Shopify, WordPress or PHP project? I'd love to hear about it.
          </p>

          {/* Reference-Inspired Center Composition: Circular Badge with Spiral Spring Doodles */}
          <div className="relative flex items-center justify-center my-10">
            {/* Left Spiral Doodle (SVG) */}
            <svg
              className="hidden md:block w-32 h-20 text-atelier-accent/40 mr-6 transform -scale-x-100"
              viewBox="0 0 120 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10,30 Q20,5 35,30 T60,30 T85,30 T110,30" strokeDasharray="3 3" />
              <path d="M15,35 C30,10 40,50 55,30 C70,10 80,50 95,30" />
            </svg>

            {/* Circular CTA Button (Matching Reference badge) */}
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20from%20Portfolio`}
              data-cursor="TALK"
              className="group relative w-36 h-36 rounded-full bg-atelier-text text-atelier-bg dark:bg-white dark:text-black light:bg-black light:text-white flex flex-col items-center justify-center p-4 text-center shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-atelier-accent"
            >
              <span className="text-[11px] font-black uppercase tracking-wider leading-tight">
                LET'S BUILD
                <br />
                SOMETHING
              </span>
              <ArrowUpRight size={18} className="mt-1 text-atelier-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* Right Spiral Doodle (SVG) */}
            <svg
              className="hidden md:block w-32 h-20 text-atelier-accent/40 ml-6"
              viewBox="0 0 120 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10,30 Q20,5 35,30 T60,30 T85,30 T110,30" strokeDasharray="3 3" />
              <path d="M15,35 C30,10 40,50 55,30 C70,10 80,50 95,30" />
            </svg>
          </div>

          {/* Quick Clickable Contact Chips */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-atelier-border bg-atelier-surface hover:border-atelier-accent text-atelier-text text-xs font-mono font-bold transition-all"
            >
              <Mail size={14} className="text-atelier-accent" />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-atelier-border bg-atelier-surface hover:border-atelier-accent text-atelier-text text-xs font-mono font-bold transition-all"
            >
              <Phone size={14} className="text-atelier-accent" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
          </div>

        </div>

        {/* Project Inquiry Specification Form */}
        <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl border border-atelier-border bg-atelier-surface/90 backdrop-blur-md shadow-xl">
          <h3 className="text-xs font-mono uppercase tracking-widest text-atelier-accent font-bold mb-6 pb-3 border-b border-atelier-border">
            SEND A PROJECT INQUIRY
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-atelier-secondary mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-atelier-bg border border-atelier-border text-atelier-text placeholder-atelier-muted text-sm focus:outline-none focus:border-atelier-accent transition-colors"
                />
                {errors.name && <p className="text-[11px] text-rose-500 mt-1 font-mono">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-atelier-secondary mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-atelier-bg border border-atelier-border text-atelier-text placeholder-atelier-muted text-sm focus:outline-none focus:border-atelier-accent transition-colors"
                />
                {errors.email && <p className="text-[11px] text-rose-500 mt-1 font-mono">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-atelier-secondary mb-2.5">
                Project Focus
              </label>
              <div className="flex flex-wrap gap-2">
                {projectOptions.map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setFormData({ ...formData, projectType: type })}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                      formData.projectType === type
                        ? 'bg-atelier-accent text-white font-bold'
                        : 'bg-atelier-bg text-atelier-muted hover:text-atelier-text border border-atelier-border'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-atelier-secondary mb-2">
                Project Overview *
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe what you'd like to build, deadlines or existing site..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-atelier-bg border border-atelier-border text-atelier-text placeholder-atelier-muted text-sm focus:outline-none focus:border-atelier-accent transition-colors resize-none"
              />
              {errors.message && <p className="text-[11px] text-rose-500 mt-1 font-mono">{errors.message}</p>}
            </div>

            <button
              type="submit"
              data-cursor="SEND"
              className="w-full py-4 rounded-xl bg-atelier-accent text-white font-extrabold text-xs uppercase tracking-widest hover:opacity-95 transition-opacity flex items-center justify-center space-x-2 shadow-lg shadow-[#4B78FF]/25"
            >
              <span>SEND INQUIRY TO HARDIK</span>
              <Send size={14} />
            </button>

            {submittedDirectly && (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono text-center">
                ✓ Mail client opened with pre-filled message. You can also connect directly on WhatsApp (+91 8238778874).
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};
