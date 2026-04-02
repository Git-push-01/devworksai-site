const services = [
  {
    icon: '🧠',
    phase: 'Implement',
    title: 'AI Workflow Implementation',
    description:
      "We design and implement AI-assisted development pipelines, MCP server configurations, and intelligent automation — scoped to your codebase and your team's workflow, not generic templates.",
    color: 'purple',
  },
  {
    icon: '🏗️',
    phase: 'Enable',
    title: 'AI-First Engineering Enablement',
    description:
      'Helping teams adopt AI tooling with structure: coding standard MDs, prompt engineering playbooks, review workflows, and the guardrails that keep AI-assisted work reliable.',
    color: 'green',
  },
  {
    icon: '⚡',
    phase: 'Automate',
    title: 'Automation Systems',
    description:
      'From build pipelines to data processing to repetitive manual workflows — we identify what should be automated and build systems that run without babysitting.',
    color: 'orange',
  },
  {
    icon: '💻',
    phase: 'Build',
    title: 'Web Application Development',
    description:
      'Modern frontend and full-stack builds using React and contemporary tooling. We work across legacy and modern stacks, including hybrid systems that need careful migration.',
    color: 'blue',
  },
  {
    icon: '🔌',
    phase: 'Connect',
    title: 'CMS & API Integration',
    description:
      'Connecting content platforms, third-party APIs, event/data layers, and frontend applications into systems that work together cleanly and predictably.',
    color: 'purple',
  },
  {
    icon: '📖',
    phase: 'Document',
    title: 'Engineering Playbooks & Standards',
    description:
      'Documentation that engineers actually use: coding standards, architectural decision records, onboarding guides, and AI-assisted development practices codified for your team.',
    color: 'green',
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header-centered">
          <p className="section-eyebrow fade-in">Services</p>
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
