import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [active, setActive] = useState('#');
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive('#')}
        className={active === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        onClick={() => setActive('#about')}
        className={active === '#about' ? 'active' : ''}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      {/* <a
        onClick={() => setActive('#education')}
        className={active === '#education' ? 'active' : ''}
        href="#education"
      >
        <BiBook />
      </a> */}
      <a
        onClick={() => setActive('#projects')}
        className={active === '#projects' ? 'active' : ''}
        href="#projects"
      >
        <RiServiceLine />
      </a>
      <a
        onClick={() => setActive('#contact')}
        className={active === '#contact' ? 'active' : ''}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
