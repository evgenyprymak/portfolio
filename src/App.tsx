// @ts-ignore
import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './MainPage';
import ProjectDetails from './ProjectDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} /> {/* Перенаправление на главную страницу */}
      </Routes>
    </Router>
  );
};

export default App;
