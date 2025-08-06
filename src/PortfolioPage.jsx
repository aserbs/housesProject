import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MyContext } from "./Context.jsx";
import "./styles/Components/PortfContent.scss";
import PortfCard from "./components/PortfCard.jsx";
import logo from "./images/logo1.svg";
import "./App.scss";
function PortfolioPage({ activeNavId, handleNavClick }) {
  const { projectsInfo } = useContext(MyContext);
  useEffect(() => {
    if (window.innerWidth > 976) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <header
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
        }}
      >
        <div className="logo" onClick={() => handleNavClick("navMain")}>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
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
