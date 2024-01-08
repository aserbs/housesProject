import './App.scss'
import React, { useState, useContext } from 'react';
import { AiFillHome } from 'react-icons/ai';
import MainContent from './components/MainContent';
import PortfContent from './components/PortfContent';
import ContContent from './components/ContContent';
import MySlider from './components/MySlider';
import { MyContext } from './Context';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PortfolioPage from './PortfolioPage';
import ShowProjectPage from './ShowProjectPage';
import PopupGallery from './components/PopupGallery';

function MainPage({ activeNavId, handleNavClick }) {

    const { projectsInfo, currentProject } = useContext(MyContext);

    const [openedPhoneSlider, setOpenedPhoneSlider] = useState(false);
    const [showPopupGallery, setShowPopupGallery] = useState(false);

    return (

        <div className="App">
            <div className="container">
                <div className='left_side'>
                    <header>
                        <div className='logo'>
                            <AiFillHome size={35} />
                        </div>
                        <nav className='deskNav'>
                            <span id="navMain" className={activeNavId === 'navMain' ? 'navSpan active' : 'navSpan'} onClick={() => handleNavClick('navMain')}>Головна</span>
                            <span id="navPortfolio" className={activeNavId === 'navPortfolio' ? 'navSpan active' : 'navSpan'} onClick={() => handleNavClick('navPortfolio')}>Портфоліо</span>
                            <span id="navContact" className={activeNavId === 'navContact' ? 'navSpan active' : 'navSpan'} onClick={() => handleNavClick('navContact')}>Контакти</span>

                        </nav>

                        <nav className='phoneNav'>
                            <Link to={'/'} ><span id="navMain" className={activeNavId === 'navMain' ? 'navSpan active' : 'navSpan'} onClick={() => handleNavClick('navMain')}>Головна</span></Link>
                            <Link to={'/portfolio'}> <span id="navPortfolio" className={activeNavId === 'navPortfolio' ? 'navSpan active' : 'navSpan'} onClick={() => handleNavClick('navPortfolio')}>Портфоліо</span></Link>
                        </nav>
                    </header>


                    <div className='infContent'>
                        <div className='mobContent'>
                            <MainContent handleNavClick={handleNavClick} />
                            <PortfContent setOpenedPhoneSlider={setOpenedPhoneSlider} />
                            <ContContent />
                        </div>
                        <div className='deskContent'>
                            {activeNavId === 'navMain' && <MainContent handleNavClick={handleNavClick} />}
                            {activeNavId === 'navContact' && <ContContent />}
                            {activeNavId === 'navPortfolio' && <PortfContent />}
                        </div>

                    </div>
                    <footer className='left_side__footer'>
                        <p>Твій ремонт / Твій комфорт</p>
                    </footer>

                </div>

                <MySlider
                    setActivePortf={handleNavClick}
                    slides={projectsInfo}
                    currentProject={currentProject}
                    parentWidth={440}
                    setShowPopupGallery={setShowPopupGallery}
                    setOpenedPhoneSlider={setOpenedPhoneSlider}
                />

            </div>
            <PopupGallery
                projectsInfo={projectsInfo}
                currentProject={currentProject}
                isShowPopup={showPopupGallery}
                setShowPopup={setShowPopupGallery}
            />

        </div>




    );
}

export default MainPage;
