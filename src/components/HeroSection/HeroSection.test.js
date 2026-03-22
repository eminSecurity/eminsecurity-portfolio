import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

/**
 * HeroSection Component Tests
 */

describe('HeroSection Component', () => {
  test('renders hero title', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Wir sind/i)).toBeInTheDocument();
    expect(screen.getByText(/EminSecurity/i)).toBeInTheDocument();
  });

  test('renders CTA buttons', () => {
    render(<HeroSection />);
    expect(screen.getByText('Projekte ansehen')).toBeInTheDocument();
    expect(screen.getByText('Kontakt aufnehmen')).toBeInTheDocument();
  });

  test('renders stats', () => {
    render(<HeroSection />);
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('CompTIA Zertifikate')).toBeInTheDocument();
  });
});