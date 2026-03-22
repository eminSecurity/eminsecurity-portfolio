import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Code, Wifi, MapPin } from 'lucide-react';
import './AboutSection.css';

/**
 * AboutSection Komponente
 * Team-Vorstellung mit Profilen von Abdi und Emin
 */
function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Abdi',
      role: 'Cybersecurity Experte',
      focus: 'Penetration Testing & SOC',
      icon: Shield,
      color: '#10b981',
      description: 'Fokus auf Security Audits, Penetration Testing und 24/7 SOC Operations.',
    },
    {
      name: 'Emin',
      role: 'Software Developer',
      focus: 'Full-Stack & IoT',
      icon: Code,
      color: '#8b5cf6',
      description: 'Spezialisiert auf React, Node.js und ESP32 IoT Entwicklung.',
    },
  ];

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Über uns</span>
          <h2 className="section-title">Wer wir sind</h2>
          <p className="section-subtitle">
            Ein Team aus Berlin mit Leidenschaft für Security, Code und Innovation.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="mission-card"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Wifi className="mission-icon" size={48} />
          <h3>Unsere Mission</h3>
          <p>
            Wir verbinden Cybersecurity-Expertise mit moderner Softwareentwicklung.
            Unser Ziel: Sichere, innovative Lösungen für komplexe Herausforderungen.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="team-card-header" style={{ borderColor: member.color }}>
                <div className="team-avatar" style={{ background: member.color + '20' }}>
                  <member.icon size={32} color={member.color} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="team-role" style={{ color: member.color }}>{member.role}</span>
                </div>
              </div>

              <div className="team-card-body">
                <p>{member.description}</p>
                <div className="team-focus">
                  <span className="focus-label">Fokus:</span>
                  <span className="focus-value">{member.focus}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location */}
        <motion.div
          className="location-badge"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <MapPin size={20} />
          <span>Berlin, Deutschland</span>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;