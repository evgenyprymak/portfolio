// @ts-ignore
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import MainPage from './MainPage';
import ProjectDetails from './ProjectDetails';
import ProjectDetailsProcedural from './ProjectDetailsProcedural';
import Menu from './Menu';
import ScrollToTop from '../src/components/ScrollToTop';

const App = () => {

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);


  return (
    <Router>
      <Menu />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/1" element={<ProjectDetails />} />
        <Route path="/project/2" element={<ProjectDetailsProcedural />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
