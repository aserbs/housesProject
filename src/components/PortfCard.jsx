import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context";
import { Link } from "react-router-dom";
import "../styles/Components/PortfCard.scss";

function PortfCard({ img, name, id }) {
  const { currentProject, setCurrentProject } = useContext(MyContext);
  const [activeCard, setActiveCard] = useState(false);
  useEffect(() => {
    id === currentProject ? setActiveCard(true) : setActiveCard(false);
  }, [currentProject, id]);

  return (
    <>
      <div
        className={
          activeCard === true ? "deskPortfCard activeCard" : "deskPortfCard"
        }
      >
        <div
          className="projectPreview__cont"
          style={{
            backgroundImage: `url(${img})`,
          }}
          onClick={() => {
            setCurrentProject(id);
          }}
        >
          <p className="projInf">{name}</p>
          <p className="moreAbout" onClick={() => setCurrentProject(id)}>
            Більше про цей проект
          </p>
        </div>
      </div>

      <div className="phonePortfCard">
        <Link to={`/project/:${id}`}>
          <div
            className="projectPreview__cont"
            style={{
              backgroundImage: `url(${img})`,
            }}
            onClick={() => {
              setCurrentProject(id);
            }}
          >
            <p className="projInf">{name}</p>
            <p className="moreAbout" onClick={() => setCurrentProject(id)}>
              Більше про цей проект
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default PortfCard;
