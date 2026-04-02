import { Link } from 'react-router-dom';
import { SITE } from '../constants';

const valueProps = [
  {
    title: 'AI Workflows',
    description:
      'Design and implement AI-assisted development pipelines that integrate into your team\u2019s existing tools and processes.',
  },
  {
    title: 'Automation Systems',
    description:
      'Eliminate repetitive engineering work with automated pipelines connecting APIs, data layers, and services.',
  },
  {
    title: 'Systems Integration',
    description:
      'Connect CMS platforms, APIs, event layers, and frontend applications into cohesive, maintainable architectures.',
  },
  {
    title: 'Engineering Playbooks',
    description:
      'Structured coding standards, AI development guidelines, and documentation that bring consistency at scale.',
  },
  {
    title: 'Web App Development',
    description:
      'Modern React-based applications built from prototype to production with clean architecture and strong typing.',
  },
  {
    title: 'Technical Consulting',
    description:
      'Hands-on architecture guidance and fractional engineering support for teams scaling their delivery capacity.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">
              AI-First Engineering
              <br />
              <span className="text-gradient">That Ships</span>
            </h1>
            <p className="hero__subtitle">
              DevWorks AI builds practical AI workflows, automation systems, and
              integrations for engineering teams. No hype&nbsp;&mdash; just
              better systems, faster delivery, and code that works.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary btn--lg">
                Get in Touch
              </Link>
              <Link to="/services" className="btn btn--secondary btn--lg">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>What We Do</h2>
            <p>
              End-to-end engineering consulting &mdash; from AI workflow design
              to production systems.
            </p>
          </div>
          <div className="grid grid--3">
            {valueProps.map((prop) => (
              <div key={prop.title} className="card">
                <h3>{prop.title}</h3>
                <p>{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section section--alt">
        <div className="container">
          <div className="split">
            <div className="split__content">
              <h2>Built for Teams That Build</h2>
              <p>
                We work with engineering teams, technical founders, and product
                organizations to implement AI-first development practices,
                connect complex systems, and deliver production-ready software.
              </p>
              <p>
                Whether you need a full automation pipeline, an AI workflow
                integrated into your existing stack, or hands-on engineering to
                ship faster&nbsp;&mdash; we bring structure and velocity without
                the chaos.
              </p>
              <Link to="/services" className="btn btn--secondary">
                Explore Services &rarr;
              </Link>
            </div>
            <div className="split__aside">
              <div className="highlight-list">
                <div className="highlight-item">AI workflow implementation</div>
                <div className="highlight-item">MCP server configurations</div>
                <div className="highlight-item">Engineering playbooks</div>
                <div className="highlight-item">CMS &amp; API integration</div>
                <div className="highlight-item">Coding standard MDs</div>
                <div className="highlight-item">Prototype-to-production</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>Practical Systems, Not Just Interfaces</h2>
            <p>
              DevWorks AI was founded to bridge the gap between AI capability and
              practical engineering delivery. We bring structure to AI-assisted
              development&nbsp;&mdash; engineering playbooks, coding standards,
              and practical workflows that help teams move fast without chaos.
            </p>
            <Link to="/about" className="btn btn--secondary">
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--cta">
        <div className="container">
          <div className="section__header">
            <h2>Let&rsquo;s Build Something That Works</h2>
            <p>
              Consulting, contract engineering, fractional support, or full
              system builds. Tell us what you&rsquo;re working on.
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
