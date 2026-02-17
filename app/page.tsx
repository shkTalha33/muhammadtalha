"use client";

import { useEffect } from "react";
import NumbersSection from "./components/NumbersSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import ScrollingStrip from "./components/ScrollingStrip";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const href = target.getAttribute("href");
        if (href) {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <main>
      <Navigation />
      <HeroSection />
      <ScrollingStrip />
      <IntroSection />
      <ExperienceSection />
      <ServicesSection />
      <PortfolioSection />
      <SkillsSection />
      <NumbersSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
