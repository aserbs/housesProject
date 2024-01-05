import './App.scss'
import React, { useState, useContext } from 'react';
import { AiFillHome } from 'react-icons/ai';
import MainContent from './components/MainContent';
import PortfContent from './components/PortfContent';
import ContContent from './components/ContContent';
import MySlider from './components/MySlider';
import { MyContext } from './Context';


function App() {

  const { projectsInfo, currentProject } = useContext(MyContext);


  const [activeNavId, setActiveNavId] = useState('navMain');

  const handleNavClick = (navId) => {
    if (activeNavId !== navId) {
      setActiveNavId(navId);
    }
  }

  return (

    <div className="App">
      <div className="container">
        <div className='left_side'>
          <header>
            <div className='logo'>
              <AiFillHome size={35} />
            </div>
            <nav>
              <span id="navMain" className={activeNavId === 'navMain' ? 'navSpan active' : 'navSpan'} onClick={() => handleNavClick('navMain')}>Головна</span>
              <span id="navPortfolio" className={activeNavId === 'navPortfolio' ? 'navSpan active' : 'navSpan'} onClick={() => handleNavClick('navPortfolio')}>Портфоліо</span>
              <span id="navContact" className={activeNavId === 'navContact' ? 'navSpan active' : 'navSpan'} onClick={() => handleNavClick('navContact')}>Контакти</span>
            </nav>
          </header>

          <div className='infContent'>
            {activeNavId === 'navMain' && <MainContent />}
            {activeNavId === 'navContact' && <ContContent />}
            {activeNavId === 'navPortfolio' && <PortfContent />}
          </div>
          <footer className='left_side__footer'>
            <p>Твій ремонт / Твій комфорт</p>
          </footer>

        </div>

        <MySlider setActivePortf={handleNavClick} slides={projectsInfo} currentProject={currentProject} parentWidth={440} />




      </div>
    </div>

  );
}

export default App;
