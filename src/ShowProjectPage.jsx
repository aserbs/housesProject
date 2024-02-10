import { AiFillHome } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import React, { useState, useContext } from "react";
import MySlider from "./components/MySlider";
import { MyContext } from "./Context";
import PopupGallery from "./components/PopupGallery";
import logo from "./images/logo1.svg";
function ShowProjectPage({ activeNavId, handleNavClick }) {
  const { projectsInfo } = useContext(MyContext);
  let { id } = useParams();
  let currentProject = id.startsWith(":") ? id.slice(1) : id;
  const [showPopupGallery, setShowPopupGallery] = useState(false);
  handleNavClick("");

  return (
    <>
      <PopupGallery
        projectsInfo={projectsInfo}
        currentProject={currentProject}
        isShowPopup={showPopupGallery}
        setShowPopup={setShowPopupGallery}
      />
      <div>
        <header>
          <div className="logo">
            <img src={logo} />
          </div>

          <nav className="phoneNav">
            <Link to={"/"}>
              <span
                id="navMain"
                className={
                  activeNavId === "navMain" ? "navSpan active" : "navSpan"
                }
                onClick={() => handleNavClick("navMain")}
              >
                Головна
              </span>
            </Link>
            <Link to={"/portfolio"}>
              {" "}
              <span
                id="navPortfolio"
                className={
                  activeNavId === "navPortfolio" ? "navSpan active" : "navSpan"
                }
                onClick={() => handleNavClick("navPortfolio")}
              >
                Портфоліо
              </span>
            </Link>
          </nav>
        </header>

        <MySlider
          setShowPopupGallery={setShowPopupGallery}
          // setActivePortf={handleNavClick}
          slides={projectsInfo}
          currentProject={currentProject}
          parentWidth={440}
          // openedPhoneSlider={openedPhoneSlider}
          // setOpenedPhoneSlider={setOpenedPhoneSlider}
        />
      </div>
    </>
  );
}

export default ShowProjectPage;
