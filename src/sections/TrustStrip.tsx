const items = [
  {
    icon: '⚙️',
    label: 'AI Workflows',
    desc: 'Pipelines that integrate into how your team already works',
  },
  {
    icon: '🔗',
    label: 'Systems Integration',
    desc: 'APIs, CMS platforms, data layers — connected and reliable',
  },
  {
    icon: '📋',
    label: 'Engineering Playbooks',
    desc: 'Coding standards and practices your team can actually follow',
  },
  {
    icon: '🚀',
    label: 'Automation',
    desc: 'Less repetition, fewer errors, faster delivery',
  },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container">
        <div className="trust-grid">
          {items.map((item) => (
            <div key={item.label} className="trust-item fade-in">
              <div className="trust-icon">{item.icon}</div>
              <span className="trust-label">{item.label}</span>
              <span className="trust-desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
