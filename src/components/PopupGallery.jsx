import '../styles/Components/PopupGallery.scss'
import { IoClose } from "react-icons/io5";
import React, { useState } from 'react';

function PopupGallery({ photos, isShowPopup, setShowPopup, projectsInfo, currentProject }) {
    currentProject = currentProject - 1
    const [currentIndex, setcurrentIndex] = useState(0);
    const handleNext = () => {
        if (projectsInfo[currentProject].projectPhotos.length - 1 !== currentIndex) {
            setcurrentIndex(currentIndex + 1);
        } else {
            setcurrentIndex(0);
        }
    }
    const handlePrevious = () => {
        if (currentIndex !== 0) {
            setcurrentIndex(currentIndex - 1);
        } else {
            setcurrentIndex(projectsInfo[currentProject].projectPhotos.length - 1);
        }
    }

    return (
        <div className={isShowPopup ? "popupGallery galleryOpened" : 'popupGallery'}>
            {/* {projectsInfo[currentProject].projectPhotos.map((photo, index) =>
                <img src={photo} key={index} />
            )} */}
            <button className='close-btn' onClick={() => setShowPopup(false)}><IoClose /></button>
            <div className='galleryContent'>
                <button onClick={() => handlePrevious()}>❮</button>
                <img src={projectsInfo[currentProject].projectPhotos[currentIndex]}></img>
                <button onClick={() => handleNext()}>❯</button>
            </div>

        </div>
    );
}

export default PopupGallery;