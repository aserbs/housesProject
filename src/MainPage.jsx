import "./App.scss";
import logo from "./images/logo1.svg";
import React, { useState, useContext, useEffect } from "react";

import MainContent from "./components/MainContent";
import PortfContent from "./components/PortfContent";

import MySlider from "./components/MySlider";
import { MyContext, useScroll } from "./Context";

import PopupGallery from "./components/PopupGallery";
import MainSlider from "./components/MainSlider";

function MainPage({
  activeNavId,
  handleNavClick,
  firstRef,
  secondRef,
  executeScrollToFirst,
  executeScrollToSecond,
}) {
  const { scrollTo, setScrollTo } = useScroll();

  useEffect(() => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setScrollTo(null);
      }
    }
  }, [scrollTo, setScrollTo]);

  const {
    projectsInfo,
    currentProject,
    setCurrentProject,
    projectInfoNavMain,
    setPage,
  } = useContext(MyContext);
  // const [openedPhoneSlider, setOpenedPhoneSlider] = useState(false);
  const [showPopupGallery, setShowPopupGallery] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <div className="left_side" id="top">
          <header>
            <div className="logo">
              <img
                src={logo}
                alt="logo"
                onClick={() => handleNavClick("navMain")}
              />
            </div>

            <nav className="deskNav">
              <span
                id="navMain"
                className={
                  activeNavId === "navMain" ? "navSpan active" : "navSpan"
                }
                onClick={() => handleNavClick("navMain")}
              >
                Головна
              </span>
              <span
                id="navPortfolio"
                className={
                  activeNavId === "navPortfolio" ? "navSpan active" : "navSpan"
                }
                onClick={() => handleNavClick("navPortfolio")}
              >
                Портфоліо
              </span>
              {/* <span id="navContact" className={activeNavId === 'navContact' ? 'navSpan active' : 'navSpan'} onClick={() => handleNavClick('navContact')}>Контакти</span> */}
            </nav>

            <nav className="phoneNav">
              <div onClick={executeScrollToFirst}>
                <span id="navMain" className={"navSpan"}>
                  Контакти
                </span>
              </div>
              <div onClick={executeScrollToSecond}>
                <span
                  id="navPortfolio"
                  className={"navSpan"}
                  // onClick={() => handleNavClick("navPortfolio")}
                >
                  Портфоліо
                </span>
              </div>
            </nav>
          </header>

          <div className="infContent">
            <div className="mobContent">
              <MainContent
                usref={firstRef}
                handleNavClick={handleNavClick}
                projectInfoNavMain={projectInfoNavMain}
              />

              <PortfContent usref={secondRef} />

              {/* <ContContent /> */}
            </div>
            <div className="deskContent">
              {activeNavId === "navMain" && (
                <MainContent handleNavClick={handleNavClick} />
              )}
              {/* {activeNavId === 'navContact' && <ContContent />} */}
              {activeNavId === "navPortfolio" && <PortfContent />}
            </div>
          </div>
          <footer className="left_side__footer"></footer>
        </div>
        {activeNavId === "navMain" ? (
          <MainSlider
            setPage={setPage}
            setCurrentProject={setCurrentProject}
            activeNavId={activeNavId}
            setActivePortf={handleNavClick}
            slides={projectInfoNavMain}
            currentProject={currentProject}
            parentWidth={440}
            setShowPopupGallery={setShowPopupGallery}
          />
        ) : (
          <MySlider
            setCurrentProject={setCurrentProject}
            activeNavId={activeNavId}
            setActivePortf={handleNavClick}
            slides={projectsInfo}
            currentProject={currentProject}
            parentWidth={440}
            setShowPopupGallery={setShowPopupGallery}
          />
        )}
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
