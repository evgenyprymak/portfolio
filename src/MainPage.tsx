// @ts-ignore
import React from 'react';


// import Menu from './Menu';
import Hero from './Hero';
import Project from './Project';

import './css/index.css';


const MainPage = () => {
  return (
    <div className="container-fliud px-4">
      {/* <Menu /> */}
      <section id='hero' className='container-xxl'>
        <Hero />
      </section>
      <section id='recent works' className=''>
       
        <div className='container-xxl px-0'>        
          <h1>Recent Works</h1>
          <div className='row py-80 px-0'>
            <div className='col-md-6 px-0'>
              <Project
              link='/project/1'
              image='assets/desktop_5.jpg'
              title="Lyte Dashboard"
              year={2019}
              description="Unlocking Data & Events Management for clients. Product Design, UI Kit, Web"
            />
                          <Project
              link='/project/1'
              image='assets/desktop_5.jpg'
              title="Lyte Dashboard"
              year={2019}
              description="Unlocking Data & Events Management for clients. Product Design, UI Kit, Web"
            />

            </div>

          </div>

          </div>


      </section>

    </div>
  );
};

export default MainPage;