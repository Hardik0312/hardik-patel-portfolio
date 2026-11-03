import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project, Platform } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<Platform>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterTabs: Platform[] = ['All', 'Shopify', 'WordPress', 'PHP'];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.platform === selectedFilter);
  }, [selectedFilter]);

  return (
    <section id="work" className="py-24 sm:py-32 bg-atelier-bg border-b border-atelier-border relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-atelier-border">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-atelier-accent uppercase mb-3 block">
              PORTFOLIO SHOWCASE
            </span>
            <div className="flex items-center space-x-3">
              <h2 className="text-section-heading font-black text-atelier-text">
                Explore my selected work.
              </h2>
              {/* Decorative curved arrow doodle inspired by reference */}
              <svg className="w-8 h-8 text-atelier-accent hidden sm:inline-block transform -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 9l6 6-6 6" />
                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
              </svg>
            </div>
            <p className="text-sm sm:text-base text-atelier-muted mt-2 max-w-lg">
              A selection of ecommerce, business websites, and custom web implementations.
            </p>
          </div>

          {/* Filter Navigation Tabs */}
          <div className="mt-8 sm:mt-0 flex flex-wrap items-center gap-1.5 p-1.5 rounded-full border border-atelier-border bg-atelier-surface self-start sm:self-auto">
            {filterTabs.map((tab) => {
              const count = tab === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.platform === tab).length;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  data-cursor="FILTER"
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center space-x-1.5 ${
                    selectedFilter === tab
                      ? 'bg-atelier-accent text-white shadow-md shadow-[#4B78FF]/30'
                      : 'text-atelier-secondary hover:text-atelier-text hover:bg-atelier-border/30'
                  }`}
                >
                  <span>{tab}</span>
                  <span className={`text-[10px] opacity-75 ${selectedFilter === tab ? 'text-white' : 'text-atelier-muted'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Alternating Project Cards */}
        <div>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenDetails={(p) => setActiveProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
