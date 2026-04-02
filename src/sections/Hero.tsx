import { SITE } from '../constants';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">Software Engineering &amp; AI Consulting</div>
        <h1>
          We build the systems that make{' '}
          <span>AI&nbsp;actually&nbsp;work</span>
        </h1>
        <p className="hero-sub">
          {SITE.name} helps engineering teams implement practical AI workflows,
          automate what should be automated, and ship reliable systems &mdash;
          without the chaos.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Start a Conversation <span className="btn-arrow">&rarr;</span>
          </a>
          <a href="#services" className="btn btn-outline">
            What We Do <span className="btn-arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
