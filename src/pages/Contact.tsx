import { SITE } from '../constants';

const engagementTypes = [
  {
    title: 'Consulting Engagements',
    description:
      'Focused technical guidance on architecture, AI adoption, or systems design.',
  },
  {
    title: 'Contract Development',
    description:
      'Hands-on engineering delivery for defined scopes of work.',
  },
  {
    title: 'Fractional Technical Support',
    description:
      'Ongoing part-time engineering partnership embedded in your team.',
  },
  {
    title: 'AI Workflow & System Builds',
    description:
      'End-to-end design and implementation of AI-assisted development systems.',
  },
];

export default function Contact() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Let&rsquo;s Work Together</h1>
          <p>
            Whether you need hands-on engineering, AI workflow design, or
            strategic technical guidance&nbsp;&mdash; we&rsquo;re ready to talk.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-main">
              <h2>Get in Touch</h2>
              <p>
                The best way to start a conversation is over email. Tell us
                about your project, your timeline, and what kind of support
                you&rsquo;re looking for. We&rsquo;ll get back to you within one
                business day.
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="btn btn--primary btn--lg contact-email-btn"
              >
                {SITE.email}
              </a>

              <div className="contact-social">
                <h3>Connect</h3>
                <div className="contact-social__links">
                  <a
                    href={SITE.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={SITE.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-aside">
              <h2>How We Engage</h2>
              <div className="engagement-list">
                {engagementTypes.map((type) => (
                  <div key={type.title} className="engagement-item">
                    <h3>{type.title}</h3>
                    <p>{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
