import { Link } from 'react-router-dom';
import { SITE } from '../constants';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta-banner">
          <h2>Ready to build something that works?</h2>
          <p>
            Let&rsquo;s talk about your next project &mdash; no pitch decks,
            just practical engineering.
          </p>
          <a href={`mailto:${SITE.email}`} className="btn btn--primary btn--lg">
            Get in Touch
          </a>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="header__logo">
              <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
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
            <p className="footer__tagline">
              AI-first software engineering and systems integration for teams
              that ship.
            </p>
          </div>

          <div className="footer__links">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/capabilities">Capabilities</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer__links">
            <h4>Connect</h4>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={SITE.social.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name} LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
