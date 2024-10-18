// @ts-ignore
import React from 'react';

import Hero from './Hero';
import Project from './Project';
import Header from './components/Header';

import './css/index.css';


const MainPage = () => {
  return (
    <div className="container-xxl px-4">
      <div className=''>
        <Hero />
      </div>
      <div className='divider-light' />
      <div className='row contribution'>
        <Header
            wrapperclassName='col-lg-4 col-md-12'
            title='Expertise'
            size='small'
          />
          <div className='col-lg-4 col-md-6'>
            <div className='skill'>Design Leadership</div>
            <div className='skill'>Streamlining Design Processes</div>
            <div className='skill'>Critical Thinking</div>
            <div className='skill'>Empowering Company and Team Culture</div>
            <div className='skill'>User-Centric Design</div>
            <div className='skill'>Scalable Design Solutions</div>
            <div className='skill'>Data-Driven Design Strategies</div>
            <div className='skill'>Cross-Functional Collaboration</div>
            <div className='skill'>Iterative Prototyping and User Testing</div>

          </div>
          <div className='col-lg-4 col-md-6'>

            <div className='skill'>Design Systems</div>
            <div className='skill'>Enhancing Product Usability</div>
            <div className='skill'>Leveraging User Behavior Analytics</div>

            <div className='skill'>0<img src='/portfolio/assets/icons/arrow.svg' style={{height: '14px', marginLeft: '4px', marginRight: '4px',}}></img>1 Products</div>
            <div className='skill'>Presentation & Pitching</div>
            <div className='skill'>B2B, B2C, SaaS</div>
            <div className='skill'>React, JS, Python</div>
            <div className='skill'>AI, Stable Diffusion</div>
            <div className='skill'>Houdini, Redshift</div>
          </div>
      </div>
      <div className='divider-light' />
      <div className='row contribution'>
        <Header
            wrapperclassName='col-lg-4 col-md-12'
            title='Approach'
            description={<span>In today's fast-paced market, the idea of a Minimum Viable Product (MVP) is crucial for efficient and effective product development. An MVP is a version of a product that contains only the core features needed to provide value to customers and obtain validated learning with minimal effort. </span>}
            size='small'
            color='var(--txt-light-2)'
            colorDescription='var(--txt-light-3)'
          />
        <div className='col-lg-4 col-md-6'><img className='mvp_image' src='/portfolio/assets/icons/mvp.svg' /></div>
        <div className='col-lg-4 col-md-6 mvp_steps'>
          <div>Design an engaging experience that resonates with users emotionally, encouraging continued use beyond basic functionality and usability.</div>
          <div>Create a user-friendly interface that allows customers to navigate and utilize features effortlessly.</div>
          <div>Ensure the product operates consistently and dependably, fostering trust among users.</div>
          <div>Design essential features that enable users to complete their tasks effectively.</div>
        
        </div>
      </div>
      <div className='divider-light' />
      <div className=''>
        <Header
          wrapperclassName='pt-40'
          title='Latest projects'
          size='small'
        />
        <div className='row row-gap-10 pt-40 pb-80'>
          <div className='col-md-12 col-lg-6 card-gap-10'>
            <Project
              link='/project/1'
              image='assets/project_title_quasar.jpg'
              title="Quasar Ticketing Platform"
              year={2019}
              description="Enhanced the ticketing platform's usability, leading to significant boosts in conversion and adoption rates."
            /></div>
          <div className='col-md-12 col-lg-6 card-gap-10'>
            <Project
              comingsoon
              link='#'
              image='assets/project_dashboard.png'
              title="Lyte Dashboard"
              year={2019}
              description="Unlocking data and events management for clients through intuitive product design and a comprehensive UI kit for the web."
            />
          </div>
          <div className='col-md-12 col-lg-6 card-gap-10'>
            <Project
              link='#'
              image='assets/project_xenolyte.jpg'
              title="Xenolyte Design System"
              year={2019}
              description="Creating a cohesive design language and reusable components to enhance collaboration and streamline product development."
            />
          </div>
          <div className='col-md-12 col-lg-6 card-gap-10'>
            <Project
              link='#'
              image='assets/project_title_tours.jpg'
              title="Lyte Dashboard for Music Tours"
              year={2019}
              description="Empowering clients with efficient data and event management solutions tailored for the music industry through intuitive product design."
            />
          </div>
          <div className='col-md-12 col-lg-6 card-gap-10'>
            <Project
              link='#'
              image='assets/project_designprocess.jpg'
              title="Creating & Rolling Out Design Process"
              year={2019}
              description="Establishing a streamlined design process to enhance team collaboration and drive efficiency in product development."
            />
          </div>
          <div className='col-md-12 col-lg-6 card-gap-10'>
            <Project
              link='#'
              image='assets/project_admin.jpg'
              title="Complex Admin Tools"
              year={2019}
              description="Designing intuitive admin tools that simplify complex workflows and improve operational efficiency for users."
            />
          </div>
          <div className='col-md-12 col-lg-6 card-gap-10'>
            <Project
              link='#'
              image='assets/project_blueprint.jpg'
              title="Service Blueprint"
              year={2019}
              description="Mapping out client journeys and service touchpoints to identify opportunities for improvement and enhance overall CX."
            />
          </div>
          <div className='col-md-12 col-lg-6 card-gap-10'>
            <Project
              link='#'
              image='assets/project_capital.jpg'
              title="Capital.com Trading Platform"
              year={2019}
              description="Developing the platform from scratch and enhancing the trading experience through user-centered design."
            />
          </div>
        </div>

      </div>




    </div>
  );
};

export default MainPage;