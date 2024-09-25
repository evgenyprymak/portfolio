// @ts-ignore
import React from 'react';

import { gsap } from 'gsap';

// import { Link } from 'react-router-dom';
import Menu from './Menu';
import Hero from './Hero';
import Project from './Project';

import './css/index.css';

// const projects = [
//   { id: 'quasar', title: 'Quasar' },
//   { id: 'lyte-dashboard', title: 'Lyte Dashboard' },
//   // Добавь другие проекты по мере необходимости
// ];

const MainPage = () => {
  return (
    <div className="container-fluid bg-danger">
      <Menu />
      <section id='hero'>
        <Hero />
      </section>
      <section id='recent works' className='bg-primary'>
      <Project 
              title="Lyte Dashboard"
              year={2019}
              description="Unlocking Data & Events Management for clients. Product Design, Web"
      />
            <Project 
              title="Lyte Dashboard"
              year={2019}
              description="Unlocking Data & Events Management for clients. Product Design, Web"
      />
            <Project 
              title="Lyte Dashboard"
              year={2019}
              description="Unlocking Data & Events Management for clients. Product Design, Web"
      />
            <Project 
              title="Lyte Dashboard"
              year={2019}
              description="Unlocking Data & Events Management for clients. Product Design, Web"
      />

      </section>

      {/* <ul>
        {projects.map(project => (
          <li key={project.id}>
            <Link to={`/project/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default MainPage;