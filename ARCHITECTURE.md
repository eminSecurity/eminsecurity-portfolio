# EminSecurity Portfolio - Architecture

## Design-System

### Farbpalette
| Rolle | HEX | Verwendung |
|-------|-----|------------|
| Primary | `#0f172a` | Hintergrund, Hauptflächen |
| Secondary | `#1e293b` | Cards, Panels, Sections |
| Accent | `#10b981` | Security-Highlights, Success |
| Highlight | `#8b5cf6` | Tech-Highlights, Links, Buttons |
| Text Primary | `#f8fafc` | Überschriften, Haupttext |
| Text Secondary | `#94a3b8` | Beschreibungen, Meta-Infos |

### Typografie
- **Headlines:** Inter (Bold 700, Semibold 600)
- **Body:** Inter (Regular 400, Medium 500)
- **Monospace:** JetBrains Mono (für Code/Technische Details)

### Design-Stil
- **Theme:** Modern Dark Tech
- **Stil:** Clean, Minimalist, Cybersecurity-Professional
- **Effects:** Subtile Animations, Hover-Transitions, Gradient-Highlights

## Komponenten-Baum

```
App
├── Navigation (Fixed Header)
│   ├── Logo
│   ├── NavLinks (Smooth Scroll)
│   └── MobileMenu
├── HeroSection
│   ├── AnimatedBackground
│   ├── Headline (Typing Animation)
│   ├── Subtitle
│   └── CTAButtons
├── AboutSection
│   ├── TeamIntro
│   ├── ProfileCards (Abdi & Emin)
│   └── MissionStatement
├── SkillsSection
│   ├── SkillCategory (Languages, Security, Tools)
│   ├── SkillBar (Progress Animation)
│   └── TechStackGrid
├── ProjectsSection
│   ├── ProjectCard (mit Hover-Effect)
│   ├── TechBadge
│   └── ProjectLink
├── CertificationsSection
│   ├── CompTIA Badge Grid
│   └── CertificationTimeline
├── ContactSection
│   ├── ContactInfo
│   └── SocialLinks
└── Footer
    ├── QuickLinks
    └── Copyright
```

## Datenfluss

### State Management
- **Lokal:** React useState für UI-Zustände (Menu, Animations)
- **Statisch:** Projektdaten in JSON-Datei importiert
- **Kein Backend:** Portfolio ist reines Frontend

### Komponenten-Interaktionen
1. Navigation → Smooth Scroll zu Section-IDs
2. ProjectCards → Hover zeigt Overlay mit Details
3. Skills → Intersection Observer triggert Animationen
4. Contact → Links öffnen Mail/Profile extern

### Animations-Strategie
- **Framer Motion** für React-Animations
- **CSS Keyframes** für Background-Effects
- **Intersection Observer** für Scroll-Triggered Animations
- **Reduced Motion** Support für Accessibility

## Git-Strategie

- **main:** Production-Ready (GitHub Pages)
- **staging:** Test-Deployment
- **develop:** Aktive Entwicklung (aktueller Branch)

## Projekt-Struktur

```
eminsecurity-portfolio/
├── public/
│   ├── index.html
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   ├── HeroSection/
│   │   ├── AboutSection/
│   │   ├── SkillsSection/
│   │   ├── ProjectsSection/
│   │   ├── CertificationsSection/
│   │   ├── ContactSection/
│   │   └── Footer/
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── data/
│   │   ├── projects.json
│   │   └── skills.json
│   ├── App.js
│   └── index.js
├── ARCHITECTURE.md
└── package.json
```

## Update-Regel

Änderungen am Design oder an Komponenten werden zuerst in dieser Datei dokumentiert, dann implementiert.
