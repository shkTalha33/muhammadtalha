"use client";

import { useState } from "react";
import Image from "next/image";

export default function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);

  const portfolioItems = [
    // ... items stay the same ...
    {
      image: "/images/portfolio/2.png",
      badge: "SaaS",
      title: "Shaadi Sheet",
      description:
        "A comprehensive real estate platform for buying, selling, and exploring homes with ease, providing tools for both homeowners and seekers.",
      stats: null,
      link: "https://shadi-sheet-web.vercel.app/",
      delay: "0",
    },
    {
      image: "/images/portfolio/3.png",
      badge: "Portfolio",
      title: "Degens Vs Godzila",
      description:
        "A dynamic meme-based crypto platform on Solana featuring real-time battle tracking and community-driven rewards.",
      stats: null,
      link: "https://gorilla-web-beige.vercel.app/",
      delay: "100",
    },
    {
      image: "/images/portfolio/1.png",
      badge: "Ecommerce",
      title: "VLink",
      description:
        "Modern networking solution offering smart contactless business cards powered by NFC and QR codes for instant information sharing.",
      stats: null,
      link: "https://vlink-ruddy.vercel.app/",
      delay: "200",
    },
    {
      image: "/images/portfolio/5.png",
      badge: "Marketplace",
      title: "Real Estate",
      description:
        "Premium property marketplace designed for seamless real estate transactions, featuring advanced filtering and property management.",
      stats: null,
      link: "https://real-esate-ebon.vercel.app/",
      delay: "300",
    },
    {
      image: "/images/portfolio/6.png",
      badge: "Portfolio",
      title: "Protect LLC",
      description:
        "Advanced security solutions provider offering CCTV surveillance, intrusion sensors, and 24/7 protection for critical sites.",
      stats: null,
      link: "https://www.protectllc.us/",
      delay: "400",
    },
    {
      image: "/images/portfolio/7.png",
      badge: "Ecommerce",
      title: "Castle Auction",
      description:
        "Libya's premier auction house for rare and unique items, featuring digital bidding for vehicles and real estate.",
      stats: null,
      link: "https://castle-auction.com/",
      delay: "500",
    },
    {
      image: "/images/portfolio/8.png",
      badge: "Portfolio",
      title: "Ford Force",
      description:
        "Healthcare-focused digital agency delivering facility optimization, regulatory compliance tools, and high-performance development.",
      stats: null,
      link: "https://fordforce.vercel.app/",
      delay: "600",
    },
  ];

  const visibleItems = showAll ? portfolioItems : portfolioItems.slice(0, 4);

  return (
    <section className="portfolio-section section-glow" id="works">
      <div className="container">
        <div className="section-header">
          <div className="badge-wrapper">
            <span className="section-badge">PORTFOLIO</span>
          </div>
          <h2 className="section-title">
            Case <span className="text-gradient">Studies</span>
          </h2>
        </div>

        <div className="portfolio-grid">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-item"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="portfolio-content">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-image"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                  />
                  <div className="image-overlay"></div>
                </a>
                <div className="portfolio-info">
                  <div className="client-badge">{item.badge}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.stats && (
                    <div className="portfolio-stats">
                      {item?.stats?.map((stat, i) => (
                        <span key={i} className="stat">
                          {stat}
                        </span>
                      ))}
                    </div>
                  )}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-hover"
                  >
                    <span className="view-case">
                      View Live Project <i className="fas fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <button
            className="view-all-btn"
            onClick={() => setShowAll(!showAll)}
            style={{ background: "none", border: "none" }}
          >
            {showAll ? "Show Less" : "View All Portfolio"}
            <i className={`fas fa-arrow-${showAll ? "up" : "right"}`}></i>
          </button>
        </div>
      </div>
    </section>
  );
}
