"use client";

import { useState, FormEvent } from "react";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section section-glow">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-badge">Get in Touch</span>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </div>

        <div
          className="contact-wrapper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="contact-form-container">
            <form
              id="contactForm"
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group floating">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  required
                  placeholder=" "
                />
                <label htmlFor="name">Your Name</label>
                <div className="form-status"></div>
              </div>

              <div className="form-group floating">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                  placeholder=" "
                />
                <label htmlFor="email">Your Email</label>
                <div className="form-status"></div>
              </div>

              <div className="form-group floating">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  required
                  placeholder=" "
                />
                <label htmlFor="subject">Subject</label>
                <div className="form-status"></div>
              </div>

              <div className="form-group floating">
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows={5}
                  required
                  placeholder=" "
                ></textarea>
                <label htmlFor="message">Your Message</label>
                <div className="form-status"></div>
              </div>

              <div className="form-submit">
                <button
                  type="submit"
                  className="btn-submit btn-glow"
                  disabled={isSubmitting}
                >
                  <span className="btn-content">
                    {!isSubmitting && (
                      <span className="btn-text">Send Message </span>
                    )}
                    <span className="btn-icon">
                      <i
                        className={
                          isSubmitting
                            ? "fas fa-spinner fa-spin"
                            : "fas fa-paper-plane"
                        }
                      ></i>
                    </span>
                  </span>
                  <span className="btn-particles"></span>
                </button>
              </div>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card" data-aos="fade-up" data-aos-delay="200">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>shykhtalha33@gmail.com</p>
            </div>

            <div className="info-card" data-aos="fade-up" data-aos-delay="300">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Location</h3>
              <p>Faisalabad, Pakistan</p>
            </div>

            <div className="info-card" data-aos="fade-up" data-aos-delay="400">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Phone</h3>
              <p>+92 318 7019892</p>
            </div>

            <div className="contact-social">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/shktalha33"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://github.com/shkTalha33"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-talha-772085392/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://x.com/talha_shk_x"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-decorations">
        <div className="deco-circle circle-1"></div>
        <div className="deco-circle circle-2"></div>
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
      </div>
    </section>
  );
}
