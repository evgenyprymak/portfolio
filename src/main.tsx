import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Menu from './Menu.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Menu />
    <App />
  </StrictMode>,
)
