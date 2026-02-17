"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    let retryCount = 0;
    const maxRetries = 20;

    const initSwiper = () => {
      if (!mounted) return;

      if (typeof window !== "undefined" && (window as any).Swiper) {
        try {
          const swiper = new (window as any).Swiper(".mySwiper", {
            grabCursor: true,
            effect: "creative",
            loop: true,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              type: "bullets",
            },
            creativeEffect: {
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            },
            on: {
              slideChange: function (this: any) {
                setCurrentSlide(this.realIndex);
              },
            },
          });

          setSwiperInstance(swiper);
          console.log("✅ Swiper initialized successfully", swiper);
          console.log(
            "Pagination element:",
            document.querySelector(".swiper-pagination"),
          );
        } catch (error) {
          console.error("❌ Swiper initialization error:", error);
        }
      } else {
        retryCount++;
        if (retryCount < maxRetries) {
          console.log(`⏳ Waiting for Swiper... (${retryCount}/${maxRetries})`);
          setTimeout(initSwiper, 200);
        } else {
          console.error("❌ Swiper failed to load after maximum retries");
        }
      }
    };

    const timer = setTimeout(initSwiper, 100);

    return () => {
      mounted = false;
      clearTimeout(timer);
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, []);

  const testimonials = [
    {
      text: "Talha developed a MERN stack solution for our platform that was both scalable and efficient. His code quality is top-notch.",
      author: "Sarah Khan",
      position: "CTO, TechNova",
      image: "/images/testimonials/t1.jpg",
    },
    {
      text: "The AI agents Talha implemented automated our workflows seamlessly. His work significantly reduced manual effort and errors.",
      author: "Ahmed Ali",
      position: "Head of Operations, LabTech",
      image: "/images/testimonials/t2.png",
    },
    {
      text: "Talha's integration of LLMs and APIs into our application was flawless. The system performs reliably under heavy load.",
      author: "Maya Riaz",
      position: "Product Manager, InnovateAI",
      image: "/images/testimonials/t3.jpg",
    },
    {
      text: "Talha consistently delivers high-quality web applications with clean architecture and maintainable code. Highly recommended for complex projects.",
      author: "Bilal Aslam",
      position: "CEO, SmartSolutions",
      image: "/images/testimonials/t4.jpg",
    },
  ];

  return (
    <section className="testimonial-section section-glow">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12">
            <div className="testimonial-content">
              <div className="section-badge">TESTIMONIALS</div>
              <h2 className="section-title" data-aos="fade-up">
                What Clients Are <span className="text-gradient">Saying</span>
              </h2>
              <p
                className="section-description"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Discover what my clients have to say about their experiences
                working with me. Their success stories drive my commitment to
                excellence.
              </p>
              <div
                className="testimonial-stats"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5.0</span>
                  <span className="stat-label">Average Rating</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 mt-3">
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="swiper-slide">
                    <div className="testimonial-card">
                      <div className="card-inner">
                        <div className="quote-icon">
                          <i className="fas fa-quote-right"></i>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <p className="testimonial-text">{testimonial.text}</p>
                        <div className="testimonial-author">
                          <div className="author-image">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              width={60}
                              height={60}
                            />
                          </div>
                          <div className="author-info">
                            <h4>{testimonial.author}</h4>
                            <p>{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination Dots */}
              <div className="swiper-pagination">
                {/* Pagination bullets will appear here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
