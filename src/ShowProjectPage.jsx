import { Link, useParams } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";

import "./components/MySlider.scss";
import { MyContext, useScroll } from "./Context";
import PopupGallery from "./components/PopupGallery";
import logo from "./images/logo1.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowLeft } from "react-icons/go";
function ShowProjectPage({
  activeNavId,
  handleNavClick,
  executeScrollToFirst,
  executeScrollToSecond,
}) {
  const { setScrollTo } = useScroll();

  const handleSetScrollTo = (targetId) => () => {
    setScrollTo(targetId);
  };

  const { projectsInfo } = useContext(MyContext);
  let { id } = useParams();
  let currentProject = id.startsWith(":") ? id.slice(1) : id;
  const [showPopupGallery, setShowPopupGallery] = useState(false);
  // const myFirstRef = useRef(null);
  // const mySecondRef = useRef(null);
  // const executeScrollToFirst = () => {
  //   myFirstRef.current.scrollIntoView({ behavior: "smooth" });
  // };
  // const executeScrollToSecond = () =>
  //   mySecondRef.current.scrollIntoView({ behavior: "smooth" });

  // handleNavClick("");

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arrow-nextRev "
        onClick={onClick}
        style={{ fontSize: "24px" }}
      >
        ❯
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arrow-prevRev "
        onClick={onClick}
        style={{ fontSize: "24px" }}
      >
        ❮
      </div>
    );
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    // if (window.innerWidth > 976) {
    //   window.location.href = "/";
    // }
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
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
          <div className="logo" onClick={() => handleNavClick("navMain")}>
            <Link to={"/"}>
              <img src={logo} alt="logo" onClick={handleSetScrollTo("top")} />
            </Link>
          </div>

          <nav className="phoneNav">
            <div onClick={handleSetScrollTo("contacts")}>
              <Link to={"/"}>
                <span id="navMain" className={"navSpan"}>
                  Контакти
                </span>
              </Link>
            </div>
            <div>
              <Link to={"/"} onClick={handleSetScrollTo("portfolio")}>
                <span
                  id="navPortfolio"
                  className={"navSpan"}
                  // onClick={() => handleNavClick("navPortfolio")}
                >
                  Портфоліо
                </span>
              </Link>
            </div>
            {/* <Link to={"/portfolio"}>
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
            </Link> */}
          </nav>
        </header>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ marginTop: "50px" }}>
            <h2
              className={"slider_info__h2p phoneShow"}
              style={{
                // marginBottom: "20px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {projectsInfo[currentProject - 1].projectName}
            </h2>
            <p
              className={"slider_info__h2p littleInfo phoneShow"}
              style={{
                fontSize: "17px",
              }}
            >
              {projectsInfo[currentProject - 1].littleInfo}
            </p>
            <Slider {...settings}>
              {projectsInfo[currentProject - 1].projectPhotos.map(
                (img, index) => (
                  <img
                    src={img}
                    alt={img}
                    key={index}
                    className={"slideItem"}
                  />
                )
              )}
            </Slider>
            <div
              className="info"
              style={{ width: "90%", margin: "0 auto", marginTop: "20px" }}
            >
              <div className="infoItem">
                <span>Площа</span>
                <span>{projectsInfo[currentProject - 1].square}</span>
              </div>
              <div className="infoItem">
                <span>Термін реалізації </span>
                <span>{projectsInfo[currentProject - 1].duration}</span>
              </div>
              <div className="infoItem">
                <span>Рік реалізації </span>
                <span>{projectsInfo[currentProject - 1].year}</span>
              </div>
            </div>
          </div>

          <Link
            to={"/"}
            className="about-btn goback"
            onClick={handleSetScrollTo("portfolio")}
          >
            <GoArrowLeft
              fill={"white"}
              size={"20px"}
              style={{ marginRight: "5px" }}
            />
            Назад
          </Link>
        </div>
      </div>
    </>
  );
}

export default ShowProjectPage;
