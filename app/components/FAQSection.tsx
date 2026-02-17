"use client";

import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What kind of projects do you take on?",
      answer:
        "I work on full-stack web apps, AI agents, automation workflows, and integrations with modern technologies like MERN, React, and LLMs.",
    },
    {
      question: "How do you manage project timelines?",
      answer:
        "I plan milestones, track progress, and communicate regularly to ensure projects are delivered on schedule.",
    },
    {
      question: "Do you provide post-deployment support?",
      answer:
        "Yes. I offer bug fixes, maintenance, and guidance to ensure your system runs smoothly after launch.",
    },
    {
      question: "Can I customize features for my specific needs?",
      answer:
        "Absolutely. I build flexible and modular systems that can be adapted to your unique requirements.",
    },
    {
      question: "Which technologies do you specialize in?",
      answer:
        "I specialize in MERN stack, React, Next.js, Python, MongoDB, n8n automation, and AI agent development.",
    },
    {
      question: "How do you ensure code quality?",
      answer:
        "I follow best practices, write clean, maintainable code, and use testing to guarantee reliable, scalable systems.",
    },
    {
      question: "Can you integrate AI agents into existing apps?",
      answer:
        "Yes. I can extend your current web applications with AI agents, LLMs, or automated workflows without breaking existing functionality.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-glow">
      <div className="container position-relative">
        <div className="section-header text-center">
          <div className="section-badge" data-aos="fade-up">
            FAQ
          </div>
          <h2 className="section-title" data-aos="fade-up">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Find answers to common questions about our services and process
          </p>
        </div>

        <div className="row align-items-center justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="faq-wrapper" data-aos="fade-left">
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`faq-item ${activeIndex === index ? "active" : ""}`}
                  >
                    <div
                      className="faq-header"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3>{faq.question}</h3>
                      <div className="faq-icon">
                        <i className="fas fa-plus"></i>
                        <i className="fas fa-minus"></i>
                      </div>
                    </div>
                    <div
                      className="faq-content"
                      style={{
                        maxHeight: activeIndex === index ? "200px" : "0",
                      }}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
