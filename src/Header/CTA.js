import React from 'react';

import CV from '../asset/Software Developer 2 (2).pdf';
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
