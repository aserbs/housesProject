import React, { useContext } from "react";
import { MyContext } from '../Context';

function PortfCard({ img, name, id }) {

    const { projectsInfo, currentProject, setCurrentProject } = useContext(MyContext);

    return (
        <div className='projectPreview__cont'
            style={{
                backgroundImage: `url(${img})`,
            }}
            onClick={() => setCurrentProject(id)}
        >
            <p className="projInf">{name}</p>
            <p className="moreAbout" onClick={() => setCurrentProject(id)}>Більше про цей проект</p>

        </div>
    );
}

export default PortfCard;