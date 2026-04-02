export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-eyebrow fade-in">About</p>
        <h2 className="section-heading fade-in">
          Built by an engineer,
          <br />
          for engineering teams
        </h2>

        <div className="about-layout">
          <div className="about-text fade-in">
            <p>
              DevWorks AI was founded on a simple observation: most teams
              struggling with AI adoption don&rsquo;t have a technology problem
              &mdash; they have a systems problem. The tools exist. What&rsquo;s
              missing is the structure to use them well.
            </p>
            <p>
              I&rsquo;m a software engineer with experience spanning frontend
              development, systems integration, analytics implementation, and
              modern web architecture. I&rsquo;ve worked across legacy codebases
              and greenfield projects, in teams that ship fast and teams that
              needed help getting unstuck.
            </p>
            <p>
              What I&rsquo;ve learned is that the best AI implementations
              aren&rsquo;t the most sophisticated &mdash; they&rsquo;re the most
              practical. An MCP server configured for your actual workflow beats
              a cutting-edge model that nobody on the team knows how to use. A
              well-written coding standards document creates more value than
              another tool subscription.
            </p>
            <p>
              DevWorks AI exists to bring that kind of thinking &mdash;
              structured, practical, delivery-focused &mdash; to teams that want
              to build with AI without losing their engineering discipline.
            </p>
          </div>

          <div className="about-values-grid fade-in">
            <div className="av-card">
              <div className="av-emoji">🎯</div>
              <h4>Practical over theoretical</h4>
              <p>We build working systems, not pitch decks about working systems.</p>
            </div>
            <div className="av-card">
              <div className="av-emoji">🔍</div>
              <h4>Clarity over complexity</h4>
              <p>Solutions should be understandable by the team that inherits them.</p>
            </div>
            <div className="av-card">
              <div className="av-emoji">📐</div>
              <h4>Structure that scales</h4>
              <p>Moving fast matters, but not at the cost of the codebase six months from now.</p>
            </div>
            <div className="av-card">
              <div className="av-emoji">🤝</div>
              <h4>Delivery over promises</h4>
              <p>The work speaks. We&rsquo;d rather show results than talk about capabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
