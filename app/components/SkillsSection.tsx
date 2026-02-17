"use client";

import Image from "next/image";

export default function SkillsSection() {
  const skills = [
    {
      name: "Next.js",
      icon: "/images/next.jpeg",
      percentage: 80,
      delay: "0",
      description:
        "Server-side and static React apps with optimized performance.",
    },
    {
      name: "React",
      icon: "/images/react.png",
      percentage: 85,
      delay: "100",
      description: "Interactive, component-based UIs with reusable patterns.",
    },
    {
      name: "n8n",
      icon: "/images/n8n.png",
      percentage: 92,
      delay: "200",
      description: "Workflow automation and API integrations for efficiency.",
    },
    {
      name: "Eleven Labs",
      icon: "/images/elevenlabs.jpg",
      percentage: 90,
      delay: "300",
      description: "High-quality AI text-to-speech for apps and chatbots.",
    },
  ];
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-wrapper">
          <div className="section-header">
            <div className="section-badge">SKILLS</div>
            <h2 className="skills-title">
              My <span className="text-gradient">Favourite</span> Stacks
            </h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                data-aos="zoom-in"
                data-aos-delay={skill.delay}
              >
                <div
                  className={`skill-icon ${skill.name.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={60}
                    height={60}
                  />
                </div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.percentage}%` }}
                    >
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                  <span className="progress-value">{skill.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
