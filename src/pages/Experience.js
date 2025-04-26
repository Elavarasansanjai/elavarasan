// pages/Experience.js
import React, { useEffect } from "react";
// import "./Experience.css";

const Experience = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="experience section">
      <div className="container">
        <h2 className="section-title animate fade-in">Experience</h2>
        <div className="timeline">
          <div className="timeline-item animate slide-in-left">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Apr 2025 - Current</div>
            <div className="timeline-content">
              <h3>Web Development Freelance</h3>
              <h4>Sri Suwastika Cattle Feed</h4>
              <p>
                I Working on full-stack web application for Sri Swastika Cattle
                Feed to help manage products, customer orders, and streamline
                daily operations, supporting the business’s growth.
              </p>
              <ul>
                <li>Admin Panel: Manage products, users, and orders.</li>
                <li>
                  User Module: Customers can browse products and place orders.
                </li>
                <li>
                  Delivery Boy Module: Delivery staff can log in daily and view
                  their assigned orders.
                </li>
              </ul>
            </div>
          </div>
          <div className="timeline-item animate slide-in-right">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Jan 2024 - Apr 2025</div>
            <div className="timeline-content">
              <h3>MERN Stack Developer</h3>
              <h4>Zuštpe Payments Private Limited</h4>
              <p>
                MERN Stack Developer with 1 year of experience in building
                scalable web applications using React.js, Node.js, Express.js,
                and MongoDB. Skilled in API development, third-party
                integrations (SMPP, WhatsApp, OAuth), payment gateways, and
                cloud deployment (AWS, Nginx). Passionate about optimizing
                performance, security, and user experience.
              </p>
              <ul>
                <li>
                  Integrated and managed payment gateways to enable seamless and
                  secure online transactions.
                </li>
                <li>
                  Delivered a complete Telecom Services Platform with:{" "}
                  <strong>SMPP</strong>
                  integration for handling large-scale SMS transmissions. API
                  <strong> WhatsApp</strong> Integration and{" "}
                  <strong>Click-to-call</strong> Integration to enhance
                  communication capabilities.
                </li>
                <li>
                  Spearheaded the Education Fees Management System, handling
                  end-to- end development including backend APIs, frontend UI,
                  database management, and deployment.
                </li>
                <li>
                  Led the development of an LPG Gas Booking System for agency
                  management with dynamic features and efficient service
                  delivery.
                </li>
                <li>
                  Integrated OAuth Service Provider for secure user
                  authentication and access management.
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item animate slide-in-right">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Dec 2024 - Jan 2025</div>
            <div className="timeline-content">
              <h3>Freelance / Part-Time Projects</h3>
              <h4>Self-employed</h4>
              <p>
                Developed a responsive and modern landing page for Solvexis
                using React.js.
              </p>
              <ul>
                <li>Ensured responsiveness for mobile and desktop devices</li>
                <li>
                  Integrated dynamic content handling and smooth navigation for
                  an intuitive user journey.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="subsection-title animate fade-in">Education</h3>
        <div className="timeline">
          <div className="timeline-item animate slide-in-left">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2020 - 2023</div>
            <div className="timeline-content">
              <h3>Bachelor of Science in Computer Science</h3>
              <h4>Bishop Heber College ,Trichy</h4>
              <p>
                Graduated with honors. Specialized in web development and
                database management. Completed coursework in algorithms, data
                structures, and software engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
