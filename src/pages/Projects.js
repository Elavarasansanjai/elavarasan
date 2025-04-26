// pages/Projects.js
import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Nandu from "../Nandu.png";
import movie from "../movie.png";
// import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projectsData = [
    {
      id: 1,
      title: "Nandu Products",
      description:
        "In this project we can add products into our cart and we can make payment. I used frontend for React and state management for redux toolkit and firebase for database, and strip payment for payment method.",
      image: Nandu,
      tags: ["React", "CSS"],
      category: "frontend",
      liveLink: "https://nandu-products-oats.vercel.app/",
      codeLink: "https://github.com/Elavarasansanjai/nandu--products",
    },
    {
      id: 2,
      title: "Movie Finder",
      description:
        "In this project we can search movies name and get this movie details.learned more about how to handle fetch data with using help of api, and promisemethods, and async functions.",
      image: movie,
      tags: ["Javascript", "HTML", "CSS"],
      category: "frontend",
      liveLink: "https://elavarasanmovieapp.netlify.app/",
      codeLink: "https://github.com/Elavarasansanjai/movies.corn",
    },
    {
      id: 3,
      title: "E-Learning Platform",
      description:
        "I developed an eLearning platform where staff can upload lecture videos and create related quiz questions. Students can watch the videos and answer the questions to test their understanding. ",
      image:
        "https://img.freepik.com/premium-photo/elearning-website-with-modish-sofware-student-study-internet_31965-44538.jpg?semt=ais_hybrid&w=740",
      tags: ["React", "Node.js", "Mongo DB", "Express Js"],
      category: "fullstack",
      liveLink: "https://github.com/Elavarasansanjai/elearning_fe",
      codeLink: "https://github.com/Elavarasansanjai/elearning_be",
    },
    {
      id: 3,
      title: "E-Learning Platform",
      description:
        "I developed an eLearning platform where staff can upload lecture videos and create related quiz questions. I Completely Write Whole Product API collection.",
      image:
        "https://media.istockphoto.com/id/499924122/photo/e-learning-concept-with-a-teacher-presenting-online-education-program.jpg?s=612x612&w=0&k=20&c=9zr-SHF6kpOaY4jb3bPXAs2iQum9VxxSPlQsrrqZzng=",
      tags: ["Node.js", "Mongo DB", "Express Js"],
      category: "backend",
      liveLink: "https://github.com/Elavarasansanjai/elearning_be",
      codeLink: "https://github.com/Elavarasansanjai/elearning_be",
    },
  ];

  useEffect(() => {
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === filter)
      );
    }
  }, [filter, projects]);

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
  }, [filteredProjects]);

  return (
    <section className="projects section">
      <div className="container">
        <h2 className="section-title animate fade-in">My Projects</h2>
        <div className="project-filters animate slide-up">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === "frontend" ? "active" : ""}`}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </button>
          <button
            className={`filter-btn ${filter === "backend" ? "active" : ""}`}
            onClick={() => setFilter("backend")}
          >
            Backend
          </button>
          <button
            className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            Full Stack
          </button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className={`animate slide-up delay-${index}`}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
