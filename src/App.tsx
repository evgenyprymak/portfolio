// @ts-ignore
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import ScrollToTop from '../src/components/ScrollToTop';

import MainPage from './MainPage';
import ProjectDetails from './ProjectDetails';
import ProjectDetailsDashboard from './ProjectDetailsDashboard';
import ProjectDetailsProcedural from './ProjectDetailsProcedural';



const App = () => {



  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/1" element={<ProjectDetails />} />
        <Route path="/project/2" element={<ProjectDetailsDashboard />} />
        <Route path="/project/100" element={<ProjectDetailsProcedural />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
