export default function FocusAreas() {
  return (
    <section id="focus">
      <div className="container">
        <p className="section-eyebrow fade-in">Focus Areas</p>
        <h2 className="section-heading fade-in">
          Deep expertise where it matters
        </h2>

        {/* Row 1 */}
        <div className="focus-row fade-in">
          <div className="focus-visual purple-bg">
            <span className="fv-emoji">🧠</span>
            <span className="fv-label">AI Engineering</span>
          </div>
          <div className="focus-text">
            <h3>AI workflow design &amp; implementation</h3>
            <p>
              We help engineering teams move from experimenting with AI to
              shipping with it. That means structured pipelines,
              MCP&nbsp;server configurations, prompt engineering playbooks,
              and review workflows — all integrated into how your team
              actually works, not a separate silo.
            </p>
            <a href="#contact" className="focus-link">
              Talk to us <span className="btn-arrow">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Row 2 — reversed */}
        <div className="focus-row reversed fade-in">
          <div className="focus-visual green-bg">
            <span className="fv-emoji">🔗</span>
            <span className="fv-label">Systems Integration</span>
          </div>
          <div className="focus-text">
            <h3>Systems integration &amp; automation</h3>
            <p>
              APIs, CMS platforms, analytics layers, legacy backends — we
              connect the pieces into systems that work together cleanly.
              When something should be automated, we build it. When
              something should be modernized, we plan the migration without
              the big-bang rewrite.
            </p>
            <a href="#contact" className="focus-link">
              Talk to us <span className="btn-arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
