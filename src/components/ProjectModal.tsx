import React from 'react';
import { X, ExternalLink, CheckCircle, Code, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0A0A0C] dark:bg-[#0A0A0C] light:bg-[#FAF9F6] border border-white/15 dark:border-white/15 light:border-black/15 shadow-2xl p-6 sm:p-10 text-atelier-text"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 hover:bg-[#C8A96B] hover:text-black transition-colors focus:outline-none"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#C8A96B]/20 text-[#C8A96B] border border-[#C8A96B]/30">
            {project.badge}
          </span>
          <span className="text-xs font-mono text-atelier-muted">PROJECT {project.number}</span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2 font-display">
          {project.name}
        </h3>
        <p className="text-xs sm:text-sm font-mono text-atelier-muted uppercase tracking-widest mb-6">
          {project.category} · {project.platform}
        </p>

        {/* Main description */}
        <div className="p-6 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#C8A96B] mb-2">
            Scope & Implementation Summary
          </h4>
          <p className="text-base text-atelier-secondary leading-relaxed">
            {project.detailedDescription}
          </p>
        </div>

        {/* Deliverables & Features */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#C8A96B] mb-4">
            Key Technical Implementations
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 p-3.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/5 text-sm text-atelier-secondary"
              >
                <CheckCircle size={16} className="text-[#C8A96B] flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology stack */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#C8A96B] mb-3">
            Technologies Utilized
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-white/10 dark:bg-white/10 light:bg-black/10 border border-white/10 text-atelier-text"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Transparency note */}
        <div className="p-4 rounded-xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-neutral-100 border border-white/5 dark:border-white/5 light:border-black/5 flex items-center space-x-3 text-xs font-mono text-atelier-muted">
          <Sparkles size={16} className="text-[#C8A96B] flex-shrink-0" />
          <span>
            Visual mockups created for portfolio presentation. All work reflect genuine development contributions across Shopify, WordPress, and PHP stacks.
          </span>
        </div>

        {/* Close CTA */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#C8A96B] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#d8bc80] transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
