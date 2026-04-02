import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>About DevWorks AI</h1>
          <p>
            A boutique software engineering consultancy built on one principle:
            systems should work for the people using them.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Who We Are</h2>
          <p>
            DevWorks AI was founded to bridge the gap between AI capability and
            practical engineering delivery. We&rsquo;re not an AI research lab or
            a dev shop&nbsp;&mdash; we&rsquo;re a consultancy that helps
            engineering teams build better systems using modern tools, including
            AI.
          </p>
          <p>
            Our work spans frontend engineering, systems integration, analytics
            and event-driven implementations, CMS integrations, and modern web
            application development. We operate across legacy and modern stacks,
            connecting APIs, CMS platforms, data and event layers, and frontend
            applications into cohesive systems that teams can actually maintain.
          </p>

          <h2>How We Work</h2>
          <p>
            We bring structure to AI-assisted development. That means
            engineering playbooks, not pitch decks. Coding standards, not thought
            leadership. Practical workflows, not theoretical frameworks.
          </p>
          <p>
            Every engagement starts with understanding your existing systems,
            team capabilities, and delivery goals. We work within your
            constraints to build solutions that your team can own and maintain
            long after the engagement ends.
          </p>

          <h2>What Sets Us Apart</h2>
          <div className="grid grid--2">
            <div className="card">
              <h3>Practical Systems</h3>
              <p>
                We build production systems&nbsp;&mdash; not demos, not slide
                decks. Every deliverable is designed to work in the real world.
              </p>
            </div>
            <div className="card">
              <h3>Structured AI Adoption</h3>
              <p>
                We bring structure to AI-assisted development so your team can
                move fast without chaos or inconsistency.
              </p>
            </div>
            <div className="card">
              <h3>Delivery + Depth</h3>
              <p>
                We understand both delivery timelines and deep technical
                implementation. Speed and quality aren&rsquo;t mutually
                exclusive.
              </p>
            </div>
            <div className="card">
              <h3>Hybrid Stack Fluency</h3>
              <p>
                We operate across legacy and modern architectures&nbsp;&mdash;
                monoliths, microservices, and everything in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container">
          <div className="section__header">
            <h2>Let&rsquo;s Talk</h2>
            <p>
              If you&rsquo;re looking for a technical partner who understands
              both the engineering and the delivery side, we should talk.
            </p>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
