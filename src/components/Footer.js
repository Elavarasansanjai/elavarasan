import React from 'react';
import logo from '../asset/9b287e5e-335c-4235-bc87-6ae3ee503da1.jpg';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="logo">
        Elavarasan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#projects">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="links">
        <a href="https://m.facebook.com/100052008711039/">
          <FaFacebookF />
        </a>
        <a href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.instagram.com/sanjai_11122/&ved=2ahUKEwiO1NedjY_3AhVDDN4KHYvZCsQQFnoECAMQAQ&usg=AOvVaw3tmiwgCkK4ozwkvJ505lgJ">
          <FiInstagram />
        </a>
        <a href="https:www.github.com/elavarasansanjai/">
          <FaGithub />
        </a>
      </div>
      <div className="copy">
        <small>&copy; ELAVARASAN. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
