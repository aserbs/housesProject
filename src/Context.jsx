import React from 'react';
import img1 from './images/project1_photo1.jpg';
import img2 from './images/project1_photo2.jpg';
import img3 from './images/project1_photo3.jpg';





export const MyContext = React.createContext();



export const MyProvider = ({ children }) => {
    const [projectsInfo, setProjectsInfo] = React.useState([
        {
            projectIndex: 1,
            projectPhotos: [img1, img2, img3],
            projectName: 'project1',
            info: 'project1'
        },
        {
            projectIndex: 2,
            projectPhotos: [img1, img2, img3],
            projectName: 'project2',
            info: 'project2'
        },
        {
            projectIndex: 3,
            projectPhotos: [img1, img2, img3],
            projectName: 'project3',
            info: 'project3'
        },
        {
            projectIndex: 4,
            projectPhotos: [img2, img2, img3],
            projectName: 'project4',
            info: 'project4'
        },
        {
            projectIndex: 5,
            projectPhotos: [img1, img2, img3],
            projectName: 'project5',
            info: 'project5'
        },
        {
            projectIndex: 6,
            projectPhotos: [img3, img2, img3],
            projectName: 'project6',
            info: 'project6'
        },


    ]);

    const [currentProject, setCurrentProject] = React.useState(1)

    const addToArray = item => {
        setProjectsInfo([...projectsInfo, item]);
    };

    return (
        <MyContext.Provider value={{ projectsInfo, addToArray, currentProject, setCurrentProject }}>
            {children}
        </MyContext.Provider>
    );
};