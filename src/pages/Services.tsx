import { SITE } from '../constants';

const services = [
  {
    title: 'AI Workflow Implementation',
    description:
      'Build AI-assisted development pipelines, MCP server configurations, and tool integrations that make your engineering team measurably more productive. We design workflows around your stack, not around demos.',
  },
  {
    title: 'AI-First Engineering Enablement',
    description:
      'Help your team adopt AI-assisted development without chaos. We build engineering playbooks, coding standard MDs, and structured development guidelines that scale with your organization.',
  },
  {
    title: 'Automation Systems',
    description:
      'Design and deliver automated pipelines that connect APIs, databases, event streams, and third-party services. Reduce manual work, eliminate drift between systems, and move faster.',
  },
  {
    title: 'Web Application Development',
    description:
      'Modern frontend and full-stack application development using React, TypeScript, and component-driven architecture. From greenfield builds to complex migrations across hybrid stacks.',
  },
  {
    title: 'CMS & API Integration',
    description:
      'Connect content management systems, headless CMS platforms, third-party APIs, and data layers into applications your team can ship and maintain. We work across legacy and modern systems.',
  },
  {
    title: 'Engineering Playbooks & Coding Standards',
    description:
      'Build structured documentation that brings consistency to development. Coding standard MDs, AI prompt libraries, review checklists, and development workflows that reduce onboarding time and improve code quality.',
  },
  {
    title: 'Technical Consulting',
    description:
      'Architecture reviews, technical strategy, and hands-on guidance for teams making critical decisions about their stack, processes, or AI adoption roadmap.',
  },
  {
    title: 'Prototype-to-Production Delivery',
    description:
      'Take proof-of-concepts, MVPs, and prototypes through the full engineering lifecycle to production-ready systems. Clean up technical debt, add test coverage, and prepare for scale.',
  },
];

export default function Services() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Services</h1>
          <p>
            End-to-end engineering consulting &mdash; from AI workflow design to
            production deployment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {services.map((service) => (
              <div key={service.title} className="card card--lg">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container">
          <div className="section__header">
            <h2>Have a Project in Mind?</h2>
            <p>
              Whether it&rsquo;s a focused sprint or an ongoing engagement,
              we&rsquo;ll scope the work to fit your team and timeline.
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
