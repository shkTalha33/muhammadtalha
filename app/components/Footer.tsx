"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const scrollTopBtn = document.querySelector(".scroll-top-btn");

    const handleScroll = () => {
      if (scrollTopBtn) {
        if (window.pageYOffset > 300) {
          (scrollTopBtn as HTMLElement).style.opacity = "1";
          (scrollTopBtn as HTMLElement).style.visibility = "visible";
        } else {
          (scrollTopBtn as HTMLElement).style.opacity = "0";
          (scrollTopBtn as HTMLElement).style.visibility = "hidden";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section section-glow">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget brand-widget" data-aos="fade-up">
                <img src="/images/logo.png" alt="Logo" height={35} />
                <p className="brand-description">
                  Crafting digital experiences that leave lasting impressions.
                  Let's create something extraordinary together.
                </p>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/shktalha33"
                    className="footer-social-link"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://x.com/talha_shk_x"
                    className="footer-social-link"
                    aria-label="X"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-x"></i>
                  </a>
                  <a
                    href="https://github.com/shkTalha33"
                    className="footer-social-link"
                    aria-label="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-talha-772085392/"
                    className="footer-social-link"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div
                className="footer-widget links-widget"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h4 className="widget-title">Navigation</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#works">Works</a>
                  </li>
                  <li>
                    <a href="#resume">Resume</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="footer-widget services-widget"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h4 className="widget-title">Services</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <a href="#">AI Agents</a>
                  </li>
                  <li>
                    <a href="#">Automations & Workflows</a>
                  </li>
                  <li>
                    <a href="#">Chatbots</a>
                  </li>
                  <li>
                    <a href="#">API Integrations</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="footer-widget contact-widget"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h4 className="widget-title">Contact Info</h4>
                <ul className="contact-info">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Faisalabad, Pakistan</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:shykhtalha33@gmail.com">
                      shykhtalha33@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-phone-alt"></i>
                    <a href="tel:+923187019892">+92 318 7019892</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>{new Date().getFullYear()} M.Talha. All rights reserved.</p>
            </div>
            <div className="scroll-to-top">
              <button
                className="scroll-top-btn"
                aria-label="Scroll to top"
                onClick={scrollToTop}
              >
                <i className="fas fa-arrow-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
