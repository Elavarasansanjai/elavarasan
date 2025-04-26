// pages/About.js
import React, { useEffect } from "react";
import SkillBar from "../components/SkillBar";
import resume from "../resume.pdf";
// import "./About.css";

const About = () => {
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

  const skills = [
    { name: "JavaScript", percentage: 90 },
    { name: "React.js", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "MongoDB", percentage: 75 },
    { name: "Express.js", percentage: 80 },
    { name: "SQL", percentage: 75 },
    { name: "HTML & CSS", percentage: 90 },
    { name: "Git", percentage: 85 },
  ];

  return (
    <section className="about section">
      <div className="container">
        <h2 className="section-title animate fade-in">About Me</h2>
        <div className="about-content">
          <div className="about-image animate slide-in-left">
            <div className="image-container">
              {/* Placeholder for about image */}
              <div className="about-placeholder-image"></div>
            </div>
          </div>
          <div className="about-text animate slide-in-right">
            <h3>Full Stack Developer</h3>
            <p>
              I am a passionate Full Stack Web Developer with over a year of
              professional experience in building web applications using the
              MERN (MongoDB, Express.js, React.js, Node.js, SQL) stack. My
              journey in web development started with a curiosity about how
              websites work and evolved into a career that I truly love.
            </p>
            <p>
              During my time at Zuštpe Payments Private Limited, I gained
              valuable experience working with Telecomunication applications,
              enhancing my skills in secure, reliable, and efficient web
              development practices.
            </p>
            <div className="personal-info">
              <div className="info-item">
                <strong>Name:</strong> Elavarasan R
              </div>
              <div className="info-item">
                <strong>Email:</strong> elavarasan241020@gmail.com
              </div>
              <div className="info-item">
                <strong>Location:</strong> Trichy Tamilnadu.
              </div>
              <div className="info-item">
                <strong>Experience:</strong> 1+ Years
              </div>
            </div>
            <a href={resume} className="btn btn-primary" download>
              Download Resume
            </a>
          </div>
        </div>
        <div className="skills-section animate fade-in">
          <h3>My Skills</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                skill={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
