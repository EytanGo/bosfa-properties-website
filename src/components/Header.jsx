import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { images } from '../data/images';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'PROPERTIES', href: '/properties' },
    { label: 'INVESTMENT STRATEGY', href: '/investment-strategy' },
    { label: 'MEDIA & PRESS', href: '/media' },
    { label: 'CONTACT', href: '/contact' },
    { label: 'INVESTOR PORTAL', href: '/investor-portal' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={images.logo}
              alt="BOSFA Properties Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-xs font-montserrat uppercase tracking-widest transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-gold font-bold underline'
                    : 'text-white hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-navy-light">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 text-xs font-montserrat uppercase tracking-widest transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-gold font-bold'
                    : 'text-white hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
