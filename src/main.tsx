import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Menu from './Menu';
import Project from './Project'
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Project 
              title="My Cool Component"
              year={2024}
              description="This is a description of the component."
      />
            <Project 
              title="My Cool Component"
              year={2024}
              description="This is a description of the component."
      />
            <Project 
              title="My Cool Component"
              year={2024}
              description="This is a description of the component."
      />
      {/* <App /> */}
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}