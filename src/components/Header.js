import React from 'react';
import CTA from '../Header/CTA';
import san from '../Header/IMG_20220909_162656_971-removebg-preview.png';
import HeaderSocials from '../Header/HeaderSocials';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Elavarasan</h1>
        <h1>FrontEnd Developer</h1>
        <h5 className="text-light">
          I design and Code, Currently focused on learning New technologies
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={san} alt="me" className="pic" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
