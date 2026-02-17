'use client';

export default function ServicesSection() {
const services = [
  {
    icon: 'fas fa-code',
    title: 'Full-Stack Web Development',
    description: 'Building scalable MERN and modern web applications with clean architecture, optimized performance, and production-ready deployment.',
    delay: '0'
  },
  {
    icon: 'fas fa-robot',
    title: 'Agentic AI Systems',
    description: 'Designing autonomous AI agents with reasoning, tool-calling, memory, and workflow orchestration for real-world automation.',
    delay: '100'
  },
  {
    icon: 'fas fa-network-wired',
    title: 'API & System Architecture',
    description: 'Designing secure REST/GraphQL APIs, microservices, and modular backend systems with structured data flow.',
    delay: '200'
  },
  {
    icon: 'fas fa-brain',
    title: 'LLM Integrations',
    description: 'Integrating large language models into applications with prompt engineering, retrieval pipelines, and contextual grounding.',
    delay: '300'
  },
  {
    icon: 'fas fa-database',
    title: 'Database Engineering',
    description: 'Designing optimized schemas, indexing strategies, and scalable data systems using MongoDB and relational databases.',
    delay: '400'
  },
  {
    icon: 'fas fa-cloud',
    title: 'Deployment & DevOps',
    description: 'CI/CD pipelines, containerization, cloud deployment, and infrastructure optimization for reliable production systems.',
    delay: '500'
  }
];


  return (
    <section className="services-section section-glow" id="services">
      <div className="container">
        <div className="section-header">
          <div className="badge-wrapper">
            <span className="section-badge">SERVICES</span>
          </div>
          <h2 className="section-title">
            What I'm <span className="text-gradient">Offering</span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={service.delay}>
              <div className="card-content">
                <div className="service-icon">
                  <i className={service.icon}></i>
                  <div className="icon-bg"></div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-hover">
                  <span className="learn-more">Learn More <i className="fas fa-arrow-right"></i></span>
                </div>
              </div>
              <div className="card-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
