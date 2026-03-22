import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen } from 'lucide-react';
import './CertificationsSection.css';

/**
 * CertificationsSection Komponente
 * Zeigt zusätzliche Zertifizierungen und Ausbildung
 */
function CertificationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      title: 'Fachinformatiker Anwendungsentwicklung',
      focus: 'Java, Kotlin, Web Development',
      icon: BookOpen,
    },
    {
      title: 'CompTIA Stack Complete',
      focus: 'A+ | Network+ | Linux+ | Security+ | Pentest+',
      icon: Award,
    },
  ];

  return (
    <section id="certifications" className="certifications-section" ref={ref}>
      <div className="certifications-container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Zertifizierungen</span>
          <h2 className="section-title">Ausbildung & Zertifikate</h2>
        </motion.div>

        {/* Education Grid */}
        <div className="education-grid">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="education-icon">
                <item.icon size={32} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.focus}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;