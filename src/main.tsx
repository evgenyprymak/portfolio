import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Импортируйте ваш основной компонент
import CustomAccordion from './components/Accordion2'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
