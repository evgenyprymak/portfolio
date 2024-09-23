import React, { StrictMode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import Menu from './Menu';
import Project from './Project'
import './css/index.css';


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
      <div className='row projects-list'>
      <Project 
              title="Lyte Dashboard"
              year={2019}
              description="Product Design, Web"
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