import React from 'react';
import '../components/MySlider.scss';
import { useState, useRef, useEffect } from 'react';
import { useCallback } from 'react';


const slideStyles = {
  // position: 'absolute',
  width: '100%',
  zIndex: '10',
  height: '87%',
  // objectFit: 'cover',
  backgroundSize: 'cover',

}

const slidesContainerStyles = {
  display: "flex",
  // height: "100%",
  transition: "transform ease-out 0.3s",
  zIndex: '10',
  position: 'relative',
}



const MySlider = ({ slides, parentWidth, currentProject, setActivePortf }) => {
  const timerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);


  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides[currentProject].projectPhotos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides[currentProject].projectPhotos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides[currentProject].projectPhotos]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    console.log('useEf');
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);
  }, [goToNext]);

  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[currentProject].projectPhotos[slideIndex]})`,
    width: `${parentWidth}px`,
  });

  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  return (
    <div className='MySlider'>
      <div className='photo-container'>
        <div className='sliderStyles'>
          <div className='leftArrowStyles' onClick={goToPrevious}>❰</div>
          <div className='rightArrowStyles' onClick={goToNext}>❱</div>

          <div className='slidesContainerOverflowStyles'>
            <div className='SlidesContainerStylesWithWidth' style={getSlidesContainerStylesWithWidth()}>
              {slides[currentProject].projectPhotos.map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  style={getSlideStylesWithBackground(slideIndex)}
                ></div>
              ))}
            </div>
          </div>

          {/* <img className='slideStyles' src={slides[currentIndex].url} loading="lazy"></img> */}
        </div>

        <div className='bg-element-grey'>
          <p onClick={() => setActivePortf('navPortfolio')} style={{
            position: 'absolute',
            zIndex: '1000',
            right: '0',
            cursor: 'pointer',
            width: '86%',
            bottom: '55px',
          }}>Дивитись портфоліо →</p>
        </div>
      </div>

      <div className='slider_info'>
        <div className='slider_info__container'>
          <div className='dotsContainerStyles'>
            {slides[currentProject].projectPhotos.map((slide, slideIndex) => (
              <div className={currentIndex === slideIndex ? 'activeDot' : 'dotsStyle'} key={slideIndex} onClick={() => goToSlide(slideIndex)}>•</div>
            ))}
          </div>

          <h2 className={'slider_info__h2p'} style={{ marginBottom: '20px', fontSize: '20px', fontWeight: '600', }}>{slides[currentProject].projectName}</h2>
          <p className={'slider_info__h2p'} style={{ marginBottom: '25px' }}>Some info Some info Some info Some info </p>
          <div className='info'>
            <div className='infoItem'>
              <span>Style</span>
              <span>{slides[currentProject].info}</span>
            </div>
            <div className='infoItem'>
              <span>Style</span>
              <span>{slides[currentProject].info}</span>
            </div>
            <div className='infoItem'>
              <span>Style</span>
              <span>{slides[currentProject].info}</span>
            </div>
            <div className='infoItem'>
              <span>Style</span>
              <span>{slides[currentProject].info}</span>
            </div>
            <div className='infoItem last'>
              <span>Style</span>
              <span>{slides[currentProject].info}</span>
            </div>
          </div>
          <button className='about-btn'>more about this project</button>
        </div>
      </div>
    </div>
  )
}

export default MySlider;