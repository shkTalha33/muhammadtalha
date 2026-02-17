'use client';

export default function IntroSection() {
  return (
    <section className="intro-section" id="about">
      <div className="container">
        <div className="intro-content">
          <div className="section-badge">
            <span>ABOUT</span>
          </div>
          <h2 className="intro-text">
            I'm a web and agentic AI developer based in Faisalabad
            <span className="flag-icon"> 🇵🇰</span>,
            building scalable systems with
            <span className="highlight-text"> modern web stacks and AI agents</span>
            {/* <span className="agency-text"> @Talha Agency</span>. */}
          </h2>


          <div className="cta-container">
            <a href="#work" className="cta-button">
              View my recent tasks
              <span className="arrow-icon">→</span>
            </a>
          </div>

          <div className="floating-elements">
            <div className="float-item dot-grid"></div>
            <div className="float-item circle-blur"></div>
            <div className="float-item square-outline"></div>
            <div className="float-item star-shape"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
