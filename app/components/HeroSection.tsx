"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section section-glow" id="home">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-3 d-none d-lg-block p-lg-0 p-md-0">
            <div className="client-reviews">
              <div className="review-content">
                <h3>Happy Clients | Behance</h3>
                <div className="review-stats">
                  <div className="client-avatars">
                    <Image
                      src="/images/testimonials/t1.jpg"
                      alt="Client"
                      width={35}
                      height={35}
                    />
                    <Image
                      src="/images/testimonials/t2.png"
                      alt="Client"
                      width={35}
                      height={35}
                    />
                    <Image
                      src="/images/testimonials/t3.jpg"
                      alt="Client"
                      width={35}
                      height={35}
                    />
                    <Image
                      src="/images/testimonials/t4.jpg"
                      alt="Client"
                      width={35}
                      height={35}
                    />
                  </div>
                  <div className="review-info">
                    <div className="rating-hero">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p>20+ 5 star reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-lg-0 p-md-0">
            <div className="hero-center">
              <div className="profile-content">
                <h1 className="hero-title">
                  <span className="title-main">
                    <span className="text-outline">M.</span>
                    <span className="text-gradient">Talha</span>
                  </span>
                </h1>
                <div className="profile-image-container">
                  <div className="profile-image">
                    <Image
                      src="/images/man.png"
                      alt="M. Talha"
                      width={300}
                      height={300}
                    />
                    <div className="role-tags d-none d-lg-flex">
                      <span className="role-badge">Software Engineer</span>
                      <span className="role-badge">Web Developer</span>
                      <span className="role-badge">Agentic AI Developer</span>
                    </div>
                  </div>
                </div>
                <div className="role-tags-mobile d-lg-none">
                  <span className="role-badge">Software Engineer</span>
                  <span className="role-badge">Web Developer</span>
                  <span className="role-badge">Agentic AI Developer</span>
                </div>
                <div className="freelance-badge">
                  <span>AVAILABLE FOR FREELANCE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 d-none d-lg-block">
            <div className="stats-container">
              <div className="stat-item">
                <h2>2+</h2>
                <p>Years of Experience</p>
              </div>
              <div className="stat-item">
                <h2>20+</h2>
                <p>Project Completed</p>
              </div>
              <div className="stat-item">
                <h2>20+</h2>
                <p>Successful Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
