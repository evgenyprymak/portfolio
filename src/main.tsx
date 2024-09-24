import React, { StrictMode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import Hero from './Hero';
import Menu from './Menu';
import Project from './Project'
import './css/index.css';
// import { SectionOverlay } from './js/sectionoverlay';


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Menu />
      <Hero />
      {/* <SectionOverlay /> */}

      <div className='row projects-list'>
      <Project 
              title="Lyte Dashboard"
              year={2019}
              description="Unlocking Data & Events Management for clients. Product Design, Web"
      />
            <Project 
              title="Quasar"
              image='./src/assets/desktop_6.jpg'
              year={2024}
              description="This is a description of the component."
      />
            </div>

    </StrictMode>
  );
} else {
  console.error('Root element not found');
}