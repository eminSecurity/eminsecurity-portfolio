import React from 'react';
import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import CertificationsSection from './components/CertificationsSection/CertificationsSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

/**
 * Haupt-App Komponente
 * Fügt alle Section-Komponenten zusammen
 */
function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;