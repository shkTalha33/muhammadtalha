"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="cta-section section-glow">
      <div className="container position-relative">
        <div className="cta-wrapper">
          <div className="cta-content text-center" data-aos="fade-up">
            <div className="cta-badge">
              <span>Let's Collaborate</span>
            </div>
            <h2 className="cta-title">
              Have a Project in <span className="text-gradient">Mind?</span>
            </h2>
            <p className="cta-subtitle">
              Let's work together to bring your vision to life
            </p>

            <div className="cta-actions">
              <a href="#contact" className="btn-primary btn-glow">
                <span className="btn-content">
                  <span className="btn-text">Start a Project</span>
                  <span className="btn-icon">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </span>
                <span className="btn-particles"></span>
              </a>
            </div>

            <div className="cta-features">
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <span>Quick Response</span>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-star"></i>
                </div>
                <span>Quality Work</span>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <span>Secure Process</span>
              </div>
            </div>
          </div>

          <div className="cta-decorations">
            <div className="deco-circle circle-1"></div>
            <div className="deco-circle circle-2"></div>
            <div className="deco-line line-1"></div>
            <div className="deco-line line-2"></div>
            <div className="gradient-sphere sphere-1"></div>
            <div className="gradient-sphere sphere-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
