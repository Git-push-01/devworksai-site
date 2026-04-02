import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE } from '../constants';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/capabilities', label: 'Capabilities' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="#6366f1" />
            <circle cx="10" cy="11" r="2.5" fill="#fff" />
            <circle cx="22" cy="11" r="2.5" fill="#fff" />
            <circle cx="16" cy="22" r="2.5" fill="#fff" />
            <line x1="10" y1="11" x2="22" y2="11" stroke="#fff" strokeWidth="1.5" opacity="0.5" />
            <line x1="10" y1="11" x2="16" y2="22" stroke="#fff" strokeWidth="1.5" opacity="0.5" />
            <line x1="22" y1="11" x2="16" y2="22" stroke="#fff" strokeWidth="1.5" opacity="0.5" />
          </svg>
          <span>{SITE.name}</span>
        </Link>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`header__link${location.pathname === link.path ? ' header__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn--primary header__cta">
            Get in Touch
          </Link>
        </nav>

        <button
          className={`header__toggle${menuOpen ? ' header__toggle--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
