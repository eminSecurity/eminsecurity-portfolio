import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Terminal, Shield, Globe, Cpu, Database } from 'lucide-react';
import './SkillsSection.css';

/**
 * SkillsSection Komponente
 * Zeigt Tech Stack, Skills und CompTIA Zertifikate
 */
function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    { name: 'CompTIA A+', year: '2024', icon: Cpu },
    { name: 'CompTIA Network+', year: '2024', icon: Globe },
    { name: 'CompTIA Linux+', year: '2024', icon: Terminal },
    { name: 'CompTIA Security+', year: '2024', icon: Shield },
    { name: 'CompTIA Pentest+', year: '2024', icon: Award },
  ];

  const skills = [
    { category: 'Languages', items: ['Kotlin ⭐⭐⭐⭐⭐', 'Java ⭐⭐⭐⭐⭐', 'JavaScript/React ⭐⭐⭐⭐⭐', 'Swift ⭐⭐⭐⭐☆', 'Python ⭐⭐⭐⭐☆', 'C/C++ ⭐⭐⭐☆☆'] },
    { category: 'Frontend', items: ['React', 'TypeScript', 'HTML5/CSS3', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Spring Boot', 'REST APIs'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
    { category: 'IoT', items: ['ESP32', 'Arduino', 'MQTT', 'Sensors'] },
    { category: 'Security', items: ['SIEM', 'SOC Operations', 'Penetration Testing', 'Threat Detection'] },
  ];

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="skills-container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">Unser Tech Stack</h2>
          <p className="section-subtitle">
            Full-Stack Entwicklung trifft auf Cybersecurity-Expertise.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="skill-card-header">
                <Database className="skill-icon" size={24} />
                <h3>{skillGroup.category}</h3>
              </div>
              
              <ul className="skill-list">
                {skillGroup.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="certifications-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="cert-title">Zertifizierungen</h3>
          
          <div className="cert-grid">
            {certifications.map((cert) => (
              <div key={cert.name} className="cert-card">
                <cert.icon className="cert-icon" size={28} />
                <div className="cert-info">
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;