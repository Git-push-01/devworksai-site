import { SITE } from '../constants';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <div className="logo-icon" />
              {SITE.name}
            </a>
            <p>
              AI-first software engineering and consulting. Practical systems for
              teams that ship.
            </p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#services">AI Workflows</a>
            <a href="#services">Engineering Enablement</a>
            <a href="#services">Automation</a>
            <a href="#services">Web Development</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a
              href={SITE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href={SITE.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} {SITE.name} LLC. All rights
            reserved.
          </span>
          <div className="footer-social">
            <a
              href={SITE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={SITE.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
