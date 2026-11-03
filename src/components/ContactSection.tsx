import React, { useState } from 'react';
import { Mail, Phone, ArrowUpRight, Copy, Check, Send, Sparkles } from 'lucide-react';
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
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please provide brief details about your project';
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

    // Generate direct mailto link with encoded message for real submission
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} Development - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Hardik,\n\nMy name is ${formData.name}.\nProject Type: ${formData.projectType}\nEmail: ${formData.email}\n\nProject Overview:\n${formData.message}\n\nLooking forward to speaking with you.`
    );
    
    // Trigger real mail client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmittedDirectly(true);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#030303] text-[#F5F5F5] overflow-hidden border-t border-white/10">
      {/* Subtle radial atmosphere */}
      <div className="atelier-glow w-[700px] h-[700px] bg-[#C8A96B] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Top Micro-label */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="font-mono text-xs tracking-ultra text-[#C8A96B] font-semibold">
            07 / CONTACT & INQUIRY
          </span>
          <span className="h-[1px] w-12 bg-[#C8A96B]/40" />
        </div>

        {/* Dramatic Heading */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-editorial-huge font-black tracking-tight leading-[0.95] text-white uppercase mb-8">
            LET'S BUILD SOMETHING WORTH VISITING.
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 font-normal max-w-2xl leading-relaxed">
            Have a website, ecommerce store or improvement project in mind? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#C8A96B] uppercase mb-4">
                DIRECT CHANNELS
              </div>

              <div className="space-y-4">
                {/* Email card */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group hover:border-[#C8A96B] transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#C8A96B]/10 text-[#C8A96B] flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-neutral-400 uppercase">EMAIL DIRECTLY</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm sm:text-base font-bold text-white hover:text-[#C8A96B] transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email Address"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 transition-colors"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone card */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group hover:border-[#C8A96B] transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-neutral-400 uppercase">PHONE / WHATSAPP</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                        className="text-sm sm:text-base font-bold text-white hover:text-[#8B5CF6] transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/918238778874`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 transition-colors"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability reminder */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/5 text-xs font-mono text-neutral-400 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACCEPTING NEW WORK</span>
              </div>
              <p>
                Available for freelance contracts, custom Shopify/WordPress implementations, store redesigns, and technical website maintenance.
              </p>
            </div>
          </div>

          {/* Right Column: Polished Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0A0A0D] border border-white/10">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="text-xs font-mono tracking-widest text-[#C8A96B] uppercase font-bold">
                  PROJECT SPECIFICATION INQUIRY
                </div>
                <Sparkles size={14} className="text-[#C8A96B]" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#C8A96B] transition-colors"
                    />
                    {errors.name && <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#C8A96B] transition-colors"
                    />
                    {errors.email && <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.email}</p>}
                  </div>
                </div>

                {/* Project Type Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-3">
                    Project Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectOptions.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-4 py-2 rounded-xl text-xs font-mono uppercase transition-all duration-200 ${
                          formData.projectType === type
                            ? 'bg-[#C8A96B] text-black font-bold'
                            : 'bg-white/5 text-neutral-400 hover:text-white border border-white/10'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Project Overview & Timeline *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe what you'd like to build, your current website link, or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#C8A96B] transition-colors resize-none"
                  />
                  {errors.message && <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  data-cursor="SEND"
                  className="w-full py-4 rounded-xl bg-[#C8A96B] text-black font-extrabold text-xs uppercase tracking-widest hover:bg-[#d8bc80] transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-[#C8A96B]/20"
                >
                  <span>SEND PROJECT DETAILS</span>
                  <Send size={14} />
                </button>

                {/* Notice for genuine transparency */}
                <div className="text-[11px] font-mono text-neutral-500 text-center">
                  Submitting directly triggers your mail application addressed to Hardik Patel at phardik.1293@gmail.com.
                </div>

                {submittedDirectly && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center animate-in fade-in">
                    ✓ Email client invoked with pre-filled inquiry. You can also message directly on WhatsApp (+91 8238778874).
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
