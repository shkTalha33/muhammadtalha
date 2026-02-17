"use client";

import { useEffect, useState } from "react";

export default function NumbersSection() {
  const [counters, setCounters] = useState([200, 14, 150, 100]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 },
    );

    const section = document.querySelector(".numbers-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = [20, 2, 20, 100];
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCounters(targets.map((target) => Math.floor(target * progress)));

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, stepDuration);
  };

  return (
    <section className="numbers-section section-glow">
      <div className="container">
        <div className="numbers-wrapper">
          <div className="section-badge-r">NUMBERS</div>
          <h2 className="numbers-title">
            Measuring Success
            <br />
            byNumbers
          </h2>

          <div className="numbers-grid">
            <div className="number-card" data-aos="fade-up">
              <div className="number-content">
                <div className="number-value" data-value="200">
                  <span className="counter">{counters[0]}</span>
                  <span className="plus">+</span>
                </div>
                <div className="number-label">Valued Happy Clients</div>
              </div>
              <div className="number-bg"></div>
            </div>

            <div
              className="number-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="number-content">
                <div className="number-value" data-value="14">
                  <span className="counter">{counters[1]}</span>
                  <span className="plus">+</span>
                </div>
                <div className="number-label">Years of Experience</div>
              </div>
              <div className="number-bg"></div>
            </div>

            <div
              className="number-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="number-content">
                <div className="number-value" data-value="150">
                  <span className="counter">{counters[2]}</span>
                </div>
                <div className="number-label">5 star reviews</div>
              </div>
              <div className="number-bg"></div>
            </div>

            <div
              className="number-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="number-content">
                <div className="number-value" data-value="100">
                  <span className="counter">{counters[3]}</span>
                  <span className="percent">%</span>
                </div>
                <div className="number-label">Success Rate</div>
              </div>
              <div className="number-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
