import React from 'react';
import { Github, Mail, Shield } from 'lucide-react';
import './Footer.css';

/**
 * Footer Komponente
 * Footer mit Links und Copyright
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Über uns', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projekte', href: '#projects' },
    { label: 'Kontakt', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/eminSecurity', label: 'GitHub' },
    { icon: Mail, href: 'mailto:info@emin-security.de', label: 'Email' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer */}
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Shield size={24} />
              <span>EminSecurity</span>
            </div>
            <p>
              Cybersecurity & Software Development Team aus Berlin.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} EminSecurity. All rights reserved.</p>
          <p>Made with ❤️ in Berlin</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;