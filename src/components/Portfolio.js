import React from 'react';
import { san } from '../asset/sanjay';
import project1 from '../asset/Screenshot (27).png';
import project2 from '../asset/Screenshot (28).png';
import project3 from '../asset/Screenshot (29).png';
import project4 from '../asset/Screenshot (31).png';
import project5 from '../asset/Screenshot (33).png';
import project6 from '../asset/Screenshot (34).png';
const Portfolio = () => {
  const Projects = [
    {
      // https://github.com/Elavarasansanjai/food-order-app
      // https://github.com/Elavarasansanjai/nandu--products
      // https://github.com/Elavarasansanjai/meetups-Next-Project
      // https://github.com/Elavarasansanjai/movies.corn
      // https://github.com/Elavarasansanjai/shoping_ecomerce
      // https://github.com/Elavarasansanjai/elavarasan-ecomerce

      id: '1',
      image: project1,
      title: 'Nandu Products',
      github: 'https://github.com/Elavarasansanjai/nandu--products',
      link: 'https://nandu-products-oats.vercel.app/',
      description:
        'In this project we can add products into our cart and we can make payment. I used frontend for React and state management for redux toolkit and firebase for database, and strip payment for payment method.',
    },
    {
      id: '2',
      image: project2,
      title: 'Food Order App',
      github: 'https://github.com/Elavarasansanjai/food-order-app',
      link: 'https://food-order-app-virid.vercel.app/',
      description:
        'Build a food order app as my personal portfolio project using React Js, and sagas fohandling async functions.learned more about React components and React Hooks,',
    },
    {
      id: '3',
      image: project4,
      title: 'Meetups',
      github: 'https://github.com/Elavarasansanjai/meetups-Next-Project',
      link: 'https://meetups-next-project.vercel.app/new-meetup',
      description:
        'In this project we can add meetups. I used Next Js for Frontend and Mongodb Atlas for database.',
    },
    {
      id: '4',
      image: project3,
      title: 'Movies Corn',
      github: 'https://github.com/Elavarasansanjai/movies.corn',
      link: 'https://elavarasanmovieapp.netlify.app/',
      description:
        'In this project we can search movies name and get this movie details.learned more about how to handle fetch data with using help of api, and promisemethods, and async functions.',
    },
    {
      id: '5',
      image: project5,
      title: 'E-Commerce Website',
      github: 'https://github.com/Elavarasansanjai/movies.corn',
      link: 'https://elavarasanshopingecomerce.netlify.app/',
      description:
        'Developed this website as a personal project to get deeper understanding about html,css, javascript.',
    },
    {
      id: '6',
      image: project6,
      title: '.Sneakers',
      github: 'https://github.com/Elavarasansanjai/elavarasan-ecomerce',
      link: 'https://elavarasanecomerce.netlify.app/',
      description:
        'This is my First Project. I learned about how to create website as well as style this website',
    },
  ];
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {Projects.map((item) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt="1" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="portfolio__item-cta">
                <a href={item.github} className="btn" target="_blank">
                  Github
                </a>
                <a href={item.link} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
