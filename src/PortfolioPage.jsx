import { AiFillHome } from "react-icons/ai";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { MyContext } from "./Context.jsx";
import "./styles/Components/PortfContent.scss";
import PortfCard from "./components/PortfCard.jsx";
import logo from "./images/logo1.svg";
function PortfolioPage({ activeNavId, handleNavClick }) {
  const { projectsInfo } = useContext(MyContext);

  return (
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
      <div>
        <h2 className="infoH2 " style={{ textAlign: "center" }}>
          Мої проекти
        </h2>
        <div className="portfContent">
          {projectsInfo.map((project, index) => (
            <PortfCard
              img={project.projectPhotos[0]}
              name={project.projectName}
              key={index}
              id={project.projectIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
