import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Wifi } from 'lucide-react';
import './HeroSection.css';

/**
 * HeroSection Komponente
 * Haupt-Intro mit animierten Elementen
 * Zeigt Team-Name, Tagline und CTA-Buttons
 */
function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-container">
        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Shield size={16} />
          <span>Cybersecurity & Software Development</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Wir sind{' '}
          <span className="gradient-text">EminSecurity</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Ein Team aus Berlin mit Leidenschaft für Security, Code und IoT.
          <br />
          Wir bauen sichere Software und smarte Hardware-Lösungen.
        </motion.p>

        {/* Tech Icons */}
        <motion.div
          className="hero-tech-icons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="tech-icon">
            <Shield size={32} />
            <span>Security</span>
          </div>
          <div className="tech-icon">
            <Code size={32} />
            <span>Development</span>
          </div>
          <div className="tech-icon">
            <Wifi size={32} />
            <span>IoT</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#projects" className="cta-primary">
            Projekte ansehen
          </a>
          <a href="#contact" className="cta-secondary">
            Kontakt aufnehmen
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">CompTIA Zertifikate</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Fertige Projekte</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">7+</span>
            <span className="stat-label">Tech Stack</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;