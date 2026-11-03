import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceHighlight } from './components/ExperienceHighlight';
import { Projects } from './components/Projects';
import { Expertise } from './components/Expertise';
import { Toolkit } from './components/Toolkit';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-atelier-bg text-atelier-text selection:bg-[#C8A96B]/30 selection:text-white transition-colors duration-500 overflow-x-hidden">
        {/* Custom interactive cursor (desktop only) */}
        <CustomCursor />

        {/* Floating Capsule Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* Asymmetrical Cinematic Hero */}
          <Hero />

          {/* 01 / About Section */}
          <About />

          {/* Oversized Experience Highlight (03+ Years) */}
          <ExperienceHighlight />

          {/* 02 / Selected Work with Filters & Modals */}
          <Projects />

          {/* 03 / Expertise Rows */}
          <Expertise />

          {/* 04 / Toolkit & Technical Stack */}
          <Toolkit />

          {/* 05 / Experience Breakdown */}
          <Experience />

          {/* How I Can Help (Services) */}
          <Services />

          {/* 06 / Process Timeline */}
          <Process />

          {/* 07 / Full-Width Premium CTA & Contact Form */}
          <ContactSection />
        </main>

        {/* Large Editorial Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
