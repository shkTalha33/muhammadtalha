'use client';

import { useEffect } from 'react';

export default function Navigation() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    const handleNavClick = () => {
      if (window.innerWidth < 992 && navbarCollapse && navbarToggler) {
        navbarCollapse.classList.remove('show');
        navbarToggler.classList.add('collapsed');
        navbarToggler.setAttribute('aria-expanded', 'false');
      }
    };

    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        {/* <a className="navbar-brand" href="#home">MT</a> */}
        <img src="/images/logo.png" height={30} alt="Logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#works">Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <div className="contact-social">
            <div className="social-links">
              <a href="https://github.com/shkTalha33" className="social-link"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/muhammad-talha-772085392/" className="social-link"><i className="fab fa-linkedin"></i></a>
              <a href="https://x.com/talha_shk_x" className="social-link"><i className="fab fa-x"></i></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
