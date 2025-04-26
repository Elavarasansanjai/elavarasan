// pages/Home.js
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import "./Home.css";
import Projects from "./Projects";

const Home = () => {
  const homeRef = useRef(null);

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
    <>
      <section className="home" ref={homeRef}>
        <div className="home-container">
          <div className="home-content">
            <h1 className="animate fade-in">
              <span className="greeting">Hello, I'm</span>
              <span className="name">Elavarasan</span>
              <span className="title">Full Stack Developer</span>
            </h1>
            <p className="animate slide-up delay-1">
              Specialized in MERN Stack development with 1+ years of
              professional experience. I build responsive web applications with
              modern technologies.
            </p>
            <div className="home-buttons animate slide-up delay-2">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
            <div className="social-links animate slide-up delay-3">
              <a
                href="https://github.com/elavarasansanjai"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/r-elavarasan-ravichandran"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-twitter"></i>
              </a> */}
            </div>
          </div>
          <div className="home-image animate slide-in-right">
            <div className="image-wrapper">
              {/* Placeholder for developer image */}
              <div className="developer-image"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator animate fade-in delay-4">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
