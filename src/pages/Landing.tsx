import { Link } from 'react-router-dom';
import { SITE } from '../constants';
import './pages.css';

export default function Landing() {
  return (
    <main className="landing">
      <div className="landing-inner">
        <div className="landing-brand">
          <div className="logo-icon" />
          {SITE.name}
        </div>
        <h1 className="landing-title">How can we help you?</h1>
        <p className="landing-sub">Choose the experience that fits what you need.</p>

        <div className="landing-cards">
          <Link to="/web" className="landing-card">
            <span className="landing-emoji">🛒</span>
            <h2>E-commerce &amp; Web Development</h2>
            <p>Storefronts, web builds, integrations, and AI-first engineering for teams that ship.</p>
            <span className="landing-cta">Explore services &rarr;</span>
          </Link>

          <Link to="/pharma" className="landing-card">
            <span className="landing-emoji">🧬</span>
            <h2>AI Development for Pharma</h2>
            <p>AI workflows and pharmacovigilance automation for life sciences teams.</p>
            <span className="landing-cta">See the AI experience &rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
