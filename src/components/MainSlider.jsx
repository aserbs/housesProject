import "../components/MySlider.scss";
import { useState, useRef, useEffect } from "react";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const slideStyles = {
  // position: 'absolute',
  width: "100%",
  zIndex: "10",
  height: "87%",
  // objectFit: 'cover',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const slidesContainerStyles = {
  display: "flex",
  // height: "100%",
  transition: "transform ease-out 0.3s",
  zIndex: "10",
  position: "relative",
};

const MainSlider = ({
  slides,
  parentWidth,
  currentProject,
  setActivePortf,
  setShowPopupGallery,
  setCurrentProject,
  setPage,
}) => {
  const timerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [currentProject]);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);
  }, [goToNext]);

  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].projectPhotos})`,
    width: `${parentWidth}px`,
  });

  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  const location = useLocation();
  const hasProject = location.pathname.includes("/project/");

  const openProject = () => {
    setActivePortf("navPortfolio");
    setCurrentProject(currentIndex + 1);
    let page = Math.ceil((currentIndex + 1) / 3);
    setPage(page);
  };

  const openGallery = () => {
    setShowPopupGallery(true);
    setCurrentProject(currentIndex + 1);
    openProject();
  };

  return (
    <div className={hasProject ? "MySlider openedSlider" : "MySlider"}>
      <h2
        className={"slider_info__h2p phoneShow"}
        style={{
          // marginBottom: "20px",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        {slides[currentProject].projectName}
      </h2>
      <p
        className={"slider_info__h2p littleInfo phoneShow"}
        style={{
          fontSize: "17px",
        }}
      >
        {slides[currentProject].littleInfo}
      </p>
      <div className="photo-container">
        <div className="sliderStyles">
          <div className="leftArrowStyles" onClick={goToPrevious}>
            ❰
          </div>
          <div className="rightArrowStyles" onClick={goToNext}>
            ❱
          </div>

          <div className="slidesContainerOverflowStyles">
            <div
              className="SlidesContainerStylesWithWidth"
              style={getSlidesContainerStylesWithWidth()}
            >
              {slides.map((_, slideIndex) => (
                <div
                  onClick={() => openGallery()}
                  key={slideIndex}
                  style={getSlideStylesWithBackground(slideIndex)}
                ></div>
              ))}
            </div>
          </div>

          {/* <img className='slideStyles' src={slides[currentIndex].url} loading="lazy"></img> */}
        </div>

        <div className="bg-element-grey">
          <p
            onClick={() => setActivePortf("navPortfolio")}
            style={{
              position: "absolute",
              zIndex: "1000",
              right: "0",
              cursor: "pointer",
              width: "86%",
              bottom: "55px",
            }}
          >
            Дивитись портфоліо →
          </p>
        </div>
      </div>

      <div className="slider_info">
        <div className="slider_info__container">
          <div className="dotsContainerStyles">
            {slides.map((slide, slideIndex) => (
              <div
                className={
                  currentIndex === slideIndex ? "activeDot" : "dotsStyle"
                }
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              >
                •
              </div>
            ))}
          </div>

          <h2
            className={"slider_info__h2p phoneNone"}
            style={{
              // marginBottom: "20px",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {slides[currentIndex].projectName}
          </h2>
          <p
            className={"slider_info__h2p littleInfo phoneNone"}
            style={{
              fontSize: "17px",
            }}
          >
            {slides[currentIndex].littleInfo}
          </p>
          <div className="info">
            <div className="infoItem">
              <span>Площа</span>
              <span>{slides[currentIndex].square}</span>
            </div>
            <div className="infoItem">
              <span>Термін реалізації </span>
              <span>{slides[currentIndex].duration}</span>
            </div>
            <div className="infoItem">
              <span>Рік реалізації </span>
              <span>{slides[currentIndex].year}</span>
            </div>
          </div>
          <button
            className="about-btn"
            // onClick={() => setShowPopupGallery(true)}
            onClick={() => openProject()}
          >
            Фото цього проєкта
          </button>
          <Link
            to={"/portfolio"}
            className="about-btn goback"
            onClick={() => setShowPopupGallery(true)}
          >
            <IoIosArrowRoundBack size={"20px"} /> Повернутись до портфоліо
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
