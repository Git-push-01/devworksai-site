export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">AI-First Software Engineering</div>
        <h1>
          Your engineering partner for{' '}
          <span>AI&nbsp;that&nbsp;actually&nbsp;ships</span>
        </h1>
        <p className="hero-sub">
          DevWorks AI helps teams implement practical AI workflows, automation
          systems, and engineering infrastructure &mdash; grounded in real
          implementation, not hype.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Let&rsquo;s talk <span className="btn-arrow">&rarr;</span>
          </a>
          <a href="#services" className="btn btn-outline">
            Our services <span className="btn-arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
