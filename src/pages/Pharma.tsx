import { Link } from 'react-router-dom';
import { SITE } from '../constants';
import './pages.css';

const workflows = [
  {
    icon: '📥',
    title: 'Case intake & triage',
    text: 'Automatically ingest adverse event reports from email, forms, and literature, then extract and classify key fields.',
  },
  {
    icon: '🧾',
    title: 'Narrative & coding assistance',
    text: 'Draft case narratives and suggest MedDRA coding for human review.',
  },
  {
    icon: '🔎',
    title: 'Signal detection support',
    text: 'Surface patterns across cases to help safety teams prioritize review.',
  },
  {
    icon: '✅',
    title: 'Human-in-the-loop QA',
    text: 'Every AI output is reviewable, auditable, and traceable for compliance.',
  },
];

export default function Pharma() {
  return (
    <main className="pharma">
      <div className="pharma-inner">
        <Link to="/" className="pharma-back">&larr; Back</Link>
        <div className="hero-badge">AI for Pharma &middot; Pharmacovigilance</div>
        <h1 className="pharma-title">AI workflows built for pharmacovigilance</h1>
        <p className="pharma-sub">
          {/* PLACEHOLDER COPY - replace with final messaging */}
          {SITE.name} designs practical AI workflows that help safety and PV teams
          move faster while keeping humans in control.
        </p>

        <div className="pharma-grid">
          {workflows.map((w) => (
            <div key={w.title} className="pharma-card">
              <span className="landing-emoji">{w.icon}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>

        <a href={`mailto:${SITE.email}`} className="btn btn-primary">
          Talk to us <span className="btn-arrow">&rarr;</span>
        </a>
      </div>
    </main>
  );
}
