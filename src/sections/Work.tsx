const work = [
  {
    visual: 'v1',
    emoji: '🧠',
    visualLabel: 'AI Engineering',
    tag: 'AI Workflows · MCP · Playbooks',
    title: 'AI-assisted engineering workflows and development playbooks',
    description:
      'Designed and deployed AI development pipelines including MCP server configurations, prompt-based code generation workflows, and structured review processes — reducing cycle time while maintaining code quality standards.',
  },
  {
    visual: 'v2',
    emoji: '🔗',
    visualLabel: 'Integration',
    tag: 'CMS · API · React',
    title: 'CMS + API-driven application architecture',
    description:
      'Built content-driven web applications integrating headless CMS platforms with modern React frontends, including content modeling, API design, and dynamic rendering pipelines.',
  },
  {
    visual: 'v3',
    emoji: '📊',
    visualLabel: 'Data Layer',
    tag: 'Analytics · Events',
    title: 'Event and data-layer implementation patterns',
    description:
      'Implemented analytics and event-driven architectures across complex web applications — tag management, custom event layers, and data pipelines that marketing and product teams actually trust.',
  },
  {
    visual: 'v4',
    emoji: '⚡',
    visualLabel: 'Automation',
    tag: 'Systems · Automation · Migration',
    title: 'Automation and hybrid stack modernization',
    description:
      'Connected disparate systems — internal tools, third-party APIs, legacy backends — into automated workflows. Led incremental modernization without big-bang rewrites or broken deploys.',
  },
];

export default function Work() {
  return (
    <section id="work">
      <div className="container">
        <div className="section-header-centered">
          <p className="section-eyebrow fade-in">Case Studies</p>
          <h2 className="section-heading fade-in">
            Real capabilities, real outcomes
          </h2>
          <p className="section-desc centered fade-in">
            Details kept general to respect client confidentiality. Every example
            reflects actual implementation work.
          </p>
        </div>

        <div className="work-grid">
          {work.map((w) => (
            <div key={w.title} className="work-card fade-in">
              <div className={`work-card-visual ${w.visual}`}>
                <div className="work-card-visual-inner">
                  <div className="wc-emoji">{w.emoji}</div>
                  <div className="wc-label">{w.visualLabel}</div>
                </div>
              </div>
              <div className="work-card-body">
                <span className="work-tag">{w.tag}</span>
                <h3>{w.title}</h3>
                <p>{w.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
