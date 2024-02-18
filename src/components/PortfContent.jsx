import React, { useContext, useState } from "react";
import { MyContext } from "../Context.jsx";
import "../styles/Components/PortfContent.scss";
import PortfCard from "./PortfCard.jsx";

function PortfContent({ setOpenedPhoneSlider }) {
  const { projectsInfo, page } = useContext(MyContext);
  const [currentPage, setCurrentPage] = useState(page - 1);

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projectsInfo.length / projectsPerPage);

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const startIndex = currentPage * projectsPerPage;
  const selectedProjects = projectsInfo.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  return (
    <>
      <h2 className="infoH2 ">Мої проекти</h2>
      <div className="portfContent">
        {selectedProjects.map((project, index) => (
          <PortfCard
            img={project.projectPhotos[0]}
            name={project.projectName}
            key={index}
            id={project.projectIndex}
            setOpenedPhoneSlider={setOpenedPhoneSlider}
          />
        ))}
      </div>
      <div className="dotsCont">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            style={{
              color: index === currentPage ? "black" : "lightGrey",
              fontSize: "60px",
            }}
            onClick={() => handlePageClick(index)}
          >
            •
          </span>
        ))}
      </div>
    </>
  );
}

export default PortfContent;
