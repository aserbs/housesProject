import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import PortfolioPage from './PortfolioPage';
import ShowProjectPage from './ShowProjectPage';

function App() {

  const [activeNavId, setActiveNavId] = useState('navMain');

  const handleNavClick = (navId) => {
    if (activeNavId !== navId) {
      setActiveNavId(navId);
    }
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage activeNavId={activeNavId} handleNavClick={handleNavClick} />} />
        <Route path="/portfolio" element={<PortfolioPage activeNavId={activeNavId} handleNavClick={handleNavClick} />} />
        <Route path="/project/:id" element={<ShowProjectPage activeNavId={activeNavId} handleNavClick={handleNavClick} />} />
      </Routes>
    </Router>
  );
}

export default App;
