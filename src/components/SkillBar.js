// components/SkillBar.js
import React, { useEffect, useRef } from "react";
// import "./SkillBar.css";

const SkillBar = ({ skill, percentage }) => {
  const progressRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          progressRef.current.style.width = `${percentage}%`;
          observer.current.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.current.observe(progressRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [percentage]);

  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-progress">
        <div className="skill-progress-bar" ref={progressRef}></div>
      </div>
    </div>
  );
};

export default SkillBar;
