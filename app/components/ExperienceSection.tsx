"use client";

import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="experience-section section-glow" id="resume">
      <div className="container">
        <div className="experience-wrapper">
          <div className="experience-header">
            <h2 className="exp-title">
              Education & <span className="text-gradient">Work Experience</span>
            </h2>
          </div>

          <div className="timeline-wrapper">
            <div className="timeline-badge">EXPERIENCE</div>

            {/* Work Experience */}
            <div className="timeline-group">
              <div className="timeline-item" data-aos="fade-up">
                <div className="company-logo green">
                  <Image
                    src="/images/devhouse_logo.jpeg"
                    alt="Dev House"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="timeline-content">
                  <div className="content-header">
                    <h3>JUNIOR MERN STACK DEVELOPER (INTERNSHIP)</h3>
                    <span className="company">DEV HOUSE</span>
                    <span className="duration">Dec 2023 - Apr 2024</span>
                  </div>
                  <p>
                    Developed and maintained full-stack applications using
                    MongoDB, Express.js, React, and Node.js. Built REST APIs,
                    implemented authentication, optimized database queries, and
                    collaborated on real-world client projects.
                  </p>
                </div>
              </div>

              <div
                className="timeline-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="company-logo orange">
                  <Image
                    src="/images/utecho_logo.jpeg"
                    alt="Utecho"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="timeline-content">
                  <div className="content-header">
                    <h3>MERN STACK DEVELOPER</h3>
                    <span className="company">UTECHO</span>
                    <span className="duration">Nov 2024 - Present</span>
                  </div>
                  <p>
                    Designing and developing scalable MERN-based systems,
                    architecting backend services, integrating APIs, and
                    deploying production-grade web applications with performance
                    and security optimization.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="timeline-group">
              <div className="timeline-badge">EDUCATION</div>

              <div className="timeline-item" data-aos="fade-up">
                <div className="company-logo blue">
                  <Image
                    src="/images/gcuf.png"
                    alt="GCUF"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="timeline-content">
                  <div className="content-header">
                    <h3>GCUF</h3>
                    <span className="company">
                      BACHELOR'S DEGREE IN COMPUTER SCIENCE
                    </span>
                    <span className="duration">2021 - 2025</span>
                  </div>
                  <p>
                    Specialized in software engineering, data structures,
                    algorithms, and system design.
                  </p>
                </div>
              </div>

              <div
                className="timeline-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="company-logo purple">
                  <Image
                    src="/images/superior_logo.png"
                    alt="Superior College"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="timeline-content">
                  <div className="content-header">
                    <h3>SUPERIOR COLLEGE</h3>
                    <span className="company">FSC PRE-ENGINEERING</span>
                    <span className="duration">2018 - 2020</span>
                  </div>
                  <p>
                    I have done my FSC Pre-Engineering from Superior College
                    with A+ Grade.
                  </p>
                </div>
              </div>
            </div>

            {/* Hackathons & Competitions */}
            <div className="timeline-group">
              <div className="timeline-badge">HACKATHONS</div>

              <div className="timeline-item" data-aos="fade-up">
                <div className="company-logo award">
                  <Image
                    src="/images/lablab_ai_logo.jpeg"
                    alt="Deriv AI Talent Sprint"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="timeline-content">
                  <div className="content-header">
                    <h3>DERIV AI TALENT SPRINT</h3>
                    <span className="company">LABLAB AI</span>
                    <span className="duration">6–7 Feb 2026</span>
                  </div>
                  <p>
                    Developed <strong>Ayaan</strong>, a professional AI Phone
                    Assistant for Urban Flames. Ayaan automates phone-based
                    tasks including real-time menu access, precision
                    order-taking, and automated logging, ensuring zero-latency
                    service. Designed for operational efficiency, it reduces
                    call duration and streamlines restaurant operations while
                    maintaining verified, accurate responses.
                  </p>
                </div>
              </div>

              <div
                className="timeline-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="company-logo award">
                  <Image
                    src="/images/lablab_ai_logo.jpeg"
                    alt="Love with DeepSeek"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="timeline-content">
                  <div className="content-header">
                    <h3>LOVE WITH DEEPSEEK</h3>
                    <span className="company">LABLAB AI</span>
                    <span className="duration">14–16 Feb 2025</span>
                  </div>
                  <p>
                    Created an AI-driven assistant using React, Python, and
                    DeepSeek Groq API, featuring 7 specialized agents for
                    business, healthcare, and news insights. The system empowers
                    users with expert-driven guidance, enabling informed
                    decision-making and enhancing productivity across
                    professional and personal tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
