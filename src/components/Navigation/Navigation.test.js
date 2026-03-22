import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

/**
 * Navigation Component Tests
 * Testing rendering and basic functionality
 */

describe('Navigation Component', () => {
  test('renders navigation with logo', () => {
    render(<Navigation />);
    expect(screen.getByText('EminSecurity')).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    render(<Navigation />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Über uns')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projekte')).toBeInTheDocument();
    expect(screen.getByText('Kontakt')).toBeInTheDocument();
  });

  test('mobile menu button exists', () => {
    render(<Navigation />);
    const menuButton = document.querySelector('.mobile-menu-btn');
    expect(menuButton).toBeInTheDocument();
  });
});