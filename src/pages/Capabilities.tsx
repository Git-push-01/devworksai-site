import { SITE } from '../constants';

const capabilities = [
  {
    title: 'AI-Assisted Engineering Workflows & Playbooks',
    description:
      'Designed and implemented AI-assisted development workflows for engineering teams, including MCP server configurations, prompt engineering guidelines, and structured coding standards. Enabled teams to adopt AI tools productively while maintaining code quality and consistency across projects.',
    tags: ['AI Workflows', 'MCP Servers', 'Engineering Playbooks', 'Coding Standards'],
  },
  {
    title: 'CMS + API-Driven Application Builds',
    description:
      'Built content-driven web applications integrating headless CMS platforms with custom frontend architectures. Connected editorial workflows to modern React-based frontends, handling content modeling, API integration, and dynamic rendering at scale.',
    tags: ['CMS Integration', 'React', 'API Design', 'Content Modeling'],
  },
  {
    title: 'Event & Data-Layer Implementation Patterns',
    description:
      'Implemented analytics and event-driven architectures across web applications, connecting user interaction data to analytics platforms, marketing tools, and business intelligence systems. Designed event taxonomies and data contracts for consistent cross-platform measurement.',
    tags: ['Analytics', 'Event Architecture', 'Data Layer', 'Cross-Platform'],
  },
  {
    title: 'Automation & Systems Integration',
    description:
      'Built automated pipelines connecting internal tools, third-party APIs, and data systems. Reduced manual engineering overhead through service orchestration, webhook integrations, and automated deployment workflows that teams could operate independently.',
    tags: ['Automation', 'API Integration', 'Orchestration', 'DevOps'],
  },
  {
    title: 'Modernization Across Hybrid Stacks',
    description:
      'Led technical modernization efforts across hybrid architectures \u2014 migrating from legacy systems to modern React-based frontends while maintaining backward compatibility. Navigated complex dependency chains, phased rollouts, and cross-team coordination to deliver incremental value.',
    tags: ['Legacy Migration', 'React', 'Hybrid Architecture', 'Incremental Delivery'],
  },
];

export default function Capabilities() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Capabilities</h1>
          <p>
            Real-world engineering experience across AI workflows, systems
            integration, and modern application development.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="capabilities-grid">
            {capabilities.map((cap) => (
              <div key={cap.title} className="card card--capability">
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
                <div className="tags">
                  {cap.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container">
          <div className="section__header">
            <h2>Interested in What We Can Build for You?</h2>
            <p>
              Every engagement is scoped to your team, your systems, and your
              delivery goals.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="btn btn--primary btn--lg"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
