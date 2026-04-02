import { SITE } from '../constants';

export default function ContactBanner() {
  return (
    <section className="cta-banner" id="contact">
      <div className="container">
        <h2 className="fade-in">
          Let&rsquo;s build something
          <br />
          that actually works
        </h2>
        <p className="fade-in">
          Whether you need a full engagement or just a second opinion on your AI
          workflow &mdash; the first conversation is always free.
        </p>
        <div className="cta-actions fade-in">
          <a href={`mailto:${SITE.email}`} className="btn btn-primary">
            Email Us <span className="btn-arrow">&rarr;</span>
          </a>
          <a href={`mailto:${SITE.email}`} className="btn btn-outline">
            Schedule a Call <span className="btn-arrow">&rarr;</span>
          </a>
        </div>
        <div className="engagement-row fade-in">
          <div className="eng-item">
            <span>📋</span>
            <span>Consulting</span>
          </div>
          <div className="eng-item">
            <span>🤝</span>
            <span>Contract</span>
          </div>
          <div className="eng-item">
            <span>⏱️</span>
            <span>Fractional</span>
          </div>
          <div className="eng-item">
            <span>🛠️</span>
            <span>AI Builds</span>
          </div>
        </div>
      </div>
    </section>
  );
}
