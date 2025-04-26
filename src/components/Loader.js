// components/Loader.js
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-text">LOADING</div>
        <div className="loader-bar">
          <div
            className="loader-progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
