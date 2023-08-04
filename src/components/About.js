import React from 'react';
import me from '../asset/sanjay.jpg';
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <h2>Hey I'm Elavarasan</h2>
          <p>
            🧑‍💻 A self taught Frontend Web Developer. Passionate about learning
            and coding, with a desire to apply skills on an enterprise level.
            Eager to join a team to tackle more complex problems, deliver high
            quality products.
          </p>
          <p>
            🌴 When i'm not coding, I take Photos, play some video games or go
            on vacay
          </p>
          <p>My preferred choice of weapon 👇</p>
          <div className="language">
            <ul>
              <li>
                <span>✔</span> HTML
              </li>
              <li className="left css">
                <span>✔</span> CSS
              </li>
            </ul>
            <ul>
              <li>
                <span>✔</span>JavaScript
              </li>
              <li className="left">
                <span>✔</span>React / Next Js
              </li>
            </ul>
          </div>
          <a href="#contact" className="btn btn-primary">
            Wanna Talk Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
