// @ts-ignore
import React from 'react';


import Menu from './Menu';
import Hero from './Hero';
import Project from './Project';

import './css/index.css';


const MainPage = () => {
  return (
    <div className="container-fliud px-4">
      <section id='menu' className='container-xxl py-4'><Menu /></section>
      <section id='hero' className='container-xxl'>
        <Hero />
      </section>
      <section id='recent works' className=''>
       
        <div className='container-xxl'>        
          <h1>Recent Works</h1>
          
          <Project
            link='/project/1'
            image='assets/desktop_5.jpg'
            title="Lyte Dashboard"
            year={2019}
            description="Unlocking Data & Events Management for clients. Product Design, UI Kit, Web"
          />
          </div>


      </section>

    </div>
  );
};

export default MainPage;