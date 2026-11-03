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
    <section id="work" className="relative py-28 sm:py-36 bg-[#050505] dark:bg-[#050505] light:bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10 dark:border-white/10 light:border-black/10">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="font-mono text-xs tracking-ultra text-[#C8A96B] dark:text-[#C8A96B] light:text-[#8A6A32] font-semibold">
                02 / SELECTED WORK
              </span>
              <span className="h-[1px] w-12 bg-[#C8A96B]/40" />
            </div>
            <h2 className="text-editorial-title font-black text-atelier-text tracking-tight uppercase">
              THE WORK.
            </h2>
            <p className="text-sm sm:text-base text-atelier-muted mt-2 max-w-xl">
              A selection of ecommerce, business and web development projects I've worked on.
            </p>
          </div>

          {/* Filter Navigation Tabs */}
          <div className="mt-8 sm:mt-0 flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-md self-start sm:self-auto">
            {filterTabs.map((tab) => {
              const count = tab === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.platform === tab).length;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  data-cursor="FILTER"
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center space-x-1.5 ${
                    selectedFilter === tab
                      ? 'bg-[#C8A96B] text-black shadow-md'
                      : 'text-atelier-secondary hover:text-atelier-text hover:bg-white/5'
                  }`}
                >
                  <span>{tab}</span>
                  <span className={`text-[10px] opacity-70 ${selectedFilter === tab ? 'text-black' : 'text-atelier-muted'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Alternating Project Cards List */}
        <div className="space-y-12 sm:space-y-16">
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
