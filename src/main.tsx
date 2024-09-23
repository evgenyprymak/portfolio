import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Menu from './Menu';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Menu />
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}