import React from 'react'
import '../App.scss'
import '../styles/Components/MainContent.scss'
const MainContent = ({ handleNavClick }) => {
  return (
    <div className='main-content'>
      <h2 className='typewriter'>WE CREATE SPACE
        FOR LIVING </h2>
      <p>
        MONO architects are experts in creating stylish, functional public spaces and residential interiors.
        Regardless of the project purpose, we strive to create a well rounded product: each design element has a specific purpose,
        there is nothing superfluous. We blend a minimalism
        approach with modern developments and innovations in order to achieve the perfect balance of comfort and aesthetics.
      </p>
      <div className='btns_cont'>
        {/* <button className='btn-mono' onClick={() => handleNavClick('navContact')}>Зв'язатись зі мною</button>
        <button className='btn-mono' onClick={() => handleNavClick('navPortfolio')}>Мої проекти</button> */}
      </div>


    </div>
  )
}

export default MainContent