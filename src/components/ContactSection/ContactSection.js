import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, MapPin, Send } from 'lucide-react';
import './ContactSection.css';

/**
 * ContactSection Komponente
 * Kontaktinformationen und Social Links
 */
function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@emin-security.de',
      href: 'mailto:info@emin-security.de',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/eminSecurity',
      href: 'https://github.com/eminSecurity',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Berlin, Deutschland',
      href: null,
    },
  ];

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="contact-container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Kontakt</span>
          <h2 className="section-title">Lass uns reden</h2>
          <p className="section-subtitle">
            Hast du ein Projekt oder eine Idee? Wir freuen uns auf deine Nachricht.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-icon-wrapper">
                    <item.icon size={24} />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </a>
              ) : (
                <div className="contact-link">
                  <div className="contact-icon-wrapper">
                    <item.icon size={24} />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="mailto:info@emin-security.de" className="cta-button">
            <Send size={20} />
            <span>Nachricht senden</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;