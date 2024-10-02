import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',  // Замените "portfolio_react" на название вашего репозитория
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});