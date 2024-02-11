import "../styles/Components/PopupGallery.scss";
import { IoClose } from "react-icons/io5";
import React, { useState } from "react";

function PopupGallery({
  photos,
  isShowPopup,
  setShowPopup,
  projectsInfo,
  currentProject,
}) {
  currentProject = currentProject - 1;
  const [currentIndex, setcurrentIndex] = useState(0);
  const handleNext = () => {
    if (
      projectsInfo[currentProject].projectPhotos.length - 1 !==
      currentIndex
    ) {
      setcurrentIndex(currentIndex + 1);
    } else {
      setcurrentIndex(0);
    }
  };
  const handlePrevious = () => {
    if (currentIndex !== 0) {
      setcurrentIndex(currentIndex - 1);
    } else {
      setcurrentIndex(projectsInfo[currentProject].projectPhotos.length - 1);
    }
  };

  return (
    <div
      className={isShowPopup ? "popupGallery galleryOpened" : "popupGallery"}
    >
      <button className="close-btn" onClick={() => setShowPopup(false)}>
        <IoClose />
      </button>
      <div className="galleryContent">
        <img
          src={projectsInfo[currentProject].projectPhotos[currentIndex]}
        ></img>
        <div className="btns-cont">
          <button onClick={() => handlePrevious()}>❮</button>
          <button onClick={() => handleNext()}>❯</button>
        </div>
      </div>
    </div>
  );
}

export default PopupGallery;
