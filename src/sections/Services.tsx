const services = [
  {
    icon: '🧠',
    phase: 'Implement',
    title: 'AI Workflow Design',
    description:
      "AI-assisted development pipelines, MCP server configurations, and intelligent automation — scoped to your codebase and your team's actual workflow.",
    color: 'purple',
  },
  {
    icon: '🏗️',
    phase: 'Enable',
    title: 'Engineering Enablement',
    description:
      'Helping teams adopt AI tooling with structure: coding standard MDs, prompt engineering playbooks, review workflows, and guardrails that keep AI-assisted work reliable.',
    color: 'green',
  },
  {
    icon: '⚡',
    phase: 'Automate',
    title: 'Automation & Integration',
    description:
      'From build pipelines to data processing — we identify what should be automated and build systems that connect APIs, CMS platforms, and data layers reliably.',
    color: 'orange',
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header-centered">
          <p className="section-eyebrow fade-in">Our Services</p>
          <h2 className="section-heading fade-in">What we help you build</h2>
          <p className="section-desc centered fade-in">
            Every engagement starts with understanding your actual problem
            &mdash; not selling you a solution looking for one.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card fade-in">
              <div className={`service-illust ${s.color}`}>{s.icon}</div>
              <p className="service-phase">{s.phase}</p>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
