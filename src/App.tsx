import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-atelier-bg text-atelier-text selection:bg-[#4B78FF]/30 selection:text-white transition-colors duration-500 overflow-x-hidden">
        {/* Interactive Animated Electric Blue Particle & Aurora Background */}
        <AnimatedBackground />

        {/* Custom interactive cursor for desktop */}
        <CustomCursor />

        {/* Slim Horizontal Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          {/* Hero Section with Real Photo & 3-Column Experience Stats */}
          <Hero />

          {/* Section 5: Introduction */}
          <About />

          {/* Section 7: Services (3 Premium Cards inspired by reference) */}
          <Services />

          {/* Section 8: Selected Projects (6 Real Alternating Projects) */}
          <Projects />

          {/* Development Delivery Process */}
          <Process />

          {/* Section 10: Dramatic Contact CTA & Inquiry Form */}
          <ContactSection />
        </main>

        {/* Section 11: Editorial Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
