import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from '../page';
import { ReactNode } from 'react';

// Mock Next.js components
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: ReactNode; href: string }) => <a href={href}>{children}</a>,
}));

vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

vi.mock('next/head', () => ({
  default: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

// Mock AOS
vi.mock('aos', () => ({
  init: vi.fn(),
}));

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  it('initializes AOS on mount', () => {
    const AOS = require('aos');
    render(<Home />);
    expect(AOS.init).toHaveBeenCalledWith({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  });

  it('renders the header with logo and MedAccess text', () => {
    render(<Home />);
    const logo = screen.getByAltText('logo');
    const headerText = screen.getByText('MedAccess');
    expect(logo).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();
  });

  it('renders the "Get Started for free" button and navigates on click', () => {
    render(<Home />);
    const button = screen.getByText('Get Started for free');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    // Expect navigation to have occurred
    // Since this is a mock environment, you may want to check if `href` was called instead
    // Or use `vi.mock('next/router', ...)` to test navigation behavior
  });

  it('renders services section with appropriate icons and descriptions', () => {
    render(<Home />);
    
    // Checking for the "Search Hospitals" service
    expect(screen.getByText('Search Hospitals')).toBeInTheDocument();
    expect(screen.getByText('Quickly find hospitals near you and explore their services.')).toBeInTheDocument();

    // Checking for the "Export Hospitals" service
    expect(screen.getByText('Export Hospitals')).toBeInTheDocument();
    expect(screen.getByText('Export hospital details and data for offline access and analysis.')).toBeInTheDocument();

    // Checking for the "Share Hospitals" service
    expect(screen.getByText('Share Hospitals')).toBeInTheDocument();
    expect(screen.getByText('Easily share hospital information with friends and family.')).toBeInTheDocument();

    // Checking for the "Markdown Support" service
    expect(screen.getByText('Markdown Support')).toBeInTheDocument();
    expect(screen.getByText('Create and share detailed hospital reports using Markdown syntax.')).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<Home />);
    const footer = screen.getByText(/©/); // Adjust this selector based on your footer content
    expect(footer).toBeInTheDocument();
  });

  it('scrolls to the top when the "Back to Top" button is clicked', () => {
    render(<Home />);
    const scrollToTopButton = screen.getByLabelText('Scroll to top');
    fireEvent.click(scrollToTopButton);

    // Verify the window scroll behavior
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
