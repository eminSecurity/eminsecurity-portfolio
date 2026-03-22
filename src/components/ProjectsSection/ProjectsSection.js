import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Shield, Code, Wifi, Database } from 'lucide-react';
import './ProjectsSection.css';

/**
 * ProjectsSection Komponente
 * Zeigt alle 4 fertigen Projekte mit Tech Stack
 */
function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'SIEM Platform',
      description: 'Security Information and Event Management System mit Node.js, React und Python Agents.',
      icon: Shield,
      color: '#10b981',
      tech: ['Node.js', 'React', 'MongoDB', 'Python'],
      github: 'https://github.com/eminSecurity/siem-platform',
      live: null,
    },
    {
      id: 2,
      title: 'Kanban Board Pro',
      description: 'Professionelles Kanban-Board mit Drag-and-Drop, Team-Management und Reports.',
      icon: Database,
      color: '#8b5cf6',
      tech: ['React', 'Express', 'dnd-kit', 'Framer Motion'],
      github: 'https://github.com/eminSecurity/kanban-board-pro',
      live: 'http://localhost:3000',
    },
    {
      id: 3,
      title: 'IoT Device Manager',
      description: 'Verwaltung von ESP32 und IoT Devices mit OTA Updates und MQTT Integration.',
      icon: Wifi,
      color: '#3b82f6',
      tech: ['React', 'Node.js', 'MQTT', 'ESP32'],
      github: 'https://github.com/eminSecurity/iot-device-manager',
      live: null,
    },
    {
      id: 4,
      title: 'Emin Portfolio',
      description: 'Professionelles Portfolio mit React, Framer Motion und moderner Dark-Mode UI.',
      icon: Code,
      color: '#f59e0b',
      tech: ['React', 'Framer Motion', 'CSS3', 'Responsive'],
      github: 'https://github.com/eminSecurity/eminsecurity-portfolio',
      live: 'https://eminsecurtiy.github.io/eminsecurity-portfolio',
    },
  ];

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="projects-container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Projekte</span>
          <h2 className="section-title">Unsere Arbeit</h2>
          <p className="section-subtitle">
            Eine Auswahl unserer fertigen Projekte.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-header" style={{ borderColor: project.color }}>
                <div className="project-icon-wrapper" style={{ background: project.color + '20' }}>
                  <project.icon size={28} color={project.color} />
                </div>
                <h3>{project.title}</h3>
              </div>

              <div className="project-body">
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag" style={{ background: project.color + '20', color: project.color }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;