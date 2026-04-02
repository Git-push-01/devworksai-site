const caps = [
  {
    icon: '⚙️',
    title: 'AI Workflows',
    desc: 'Pipelines that integrate into how your team already works',
  },
  {
    icon: '🔗',
    title: 'Systems Integration',
    desc: 'APIs, CMS platforms, data layers — connected and reliable',
  },
  {
    icon: '📋',
    title: 'Engineering Playbooks',
    desc: 'Coding standards and practices your team can actually follow',
  },
  {
    icon: '🚀',
    title: 'Automation',
    desc: 'Less repetition, fewer errors, faster delivery',
  },
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'Modern frontend and full-stack builds using React and contemporary tooling',
  },
  {
    icon: '📊',
    title: 'Analytics & Events',
    desc: 'Tag management, custom event layers, and data pipelines that teams trust',
  },
  {
    icon: '🏗️',
    title: 'Legacy Modernization',
    desc: 'Incremental migration without big-bang rewrites or broken deploys',
  },
  {
    icon: '🎯',
    title: 'Team Enablement',
    desc: 'Onboarding, pairing, and knowledge transfer that sticks',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities">
      <div className="container">
        <div className="section-header-centered">
          <p className="section-eyebrow fade-in">Capabilities</p>
          <h2 className="section-heading fade-in">
            Everything we bring to the table
          </h2>
          <p className="section-desc centered fade-in">
            A broad toolkit grounded in practical implementation — not
            certifications on a wall.
          </p>
        </div>

        <div className="capabilities-grid">
          {caps.map((c) => (
            <div key={c.title} className="cap-card fade-in">
              <div className="cap-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
