import React from 'react';

// metropolice
import metroImg1 from './images/metropolis/metro1.jpg';
import metroImg2 from './images/metropolis/metro2.jpg';
import metroImg3 from './images/metropolis/metro3.jpg';
import metroImg4 from './images/metropolis/metro4.jpg';
import metroImg5 from './images/metropolis/metro5.jpg';
import metroImg6 from './images/metropolis/metro6.jpg';
import metroImg7 from './images/metropolis/metro7.jpg';
import metroImg8 from './images/metropolis/metro8.jpg';
import metroImg9 from './images/metropolis/metro9.jpg';
import metroImg10 from './images/metropolis/metro10.jpg';
import metroImg11 from './images/metropolis/metro11.jpg';
import metroImg12 from './images/metropolis/metro12.jpg';
import metroImg13 from './images/metropolis/metro13.jpg';

//zol13
import zol13Img1 from './images/zol13/1.jpg';
import zol13Img2 from './images/zol13/2.jpg';
import zol13Img3 from './images/zol13/3.jpg';
import zol13Img4 from './images/zol13/4.jpg';
import zol13Img5 from './images/zol13/5.jpg';
import zol13Img6 from './images/zol13/6.jpg';
import zol13Img7 from './images/zol13/7.jpg';
import zol13Img8 from './images/zol13/8.jpg';
import zol13Img9 from './images/zol13/9.jpg';
import zol13Img10 from './images/zol13/10.jpg';
import zol13Img11 from './images/zol13/11.jpg';
import zol13Img12 from './images/zol13/12.jpg';

// zol14
import zol14Img1 from './images/zol14/1.jpg';
import zol14Img2 from './images/zol14/2.jpg';
import zol14Img3 from './images/zol14/3.jpg';
import zol14Img4 from './images/zol14/4.jpg';
import zol14Img5 from './images/zol14/5.jpg';
import zol14Img6 from './images/zol14/6.jpg';
import zol14Img7 from './images/zol14/7.jpg';
import zol14Img8 from './images/zol14/8.jpg';
import zol14Img9 from './images/zol14/9.jpg';
import zol14Img10 from './images/zol14/10.jpg';
import zol14Img12 from './images/zol14/12.jpg';
import zol14Img13 from './images/zol14/13.jpg';
import zol14Img14 from './images/zol14/14.jpg';
import zol14Img15 from './images/zol14/15.jpg';
import zol14Img16 from './images/zol14/16.jpg';

// itOffice
import itOfImg1 from './images/itoffice/1.jpg';
import itOfImg2 from './images/itoffice/2.jpg';
import itOfImg3 from './images/itoffice/3.jpg';
import itOfImg4 from './images/itoffice/4.jpg';
import itOfImg5 from './images/itoffice/5.jpg';
import itOfImg6 from './images/itoffice/6.jpg';
import itOfImg7 from './images/itoffice/7.jpg';
import itOfImg8 from './images/itoffice/8.jpg';
import itOfImg9 from './images/itoffice/9.jpg';

// offices
import ofImg1 from './images/office/1.jpg';
import ofImg2 from './images/office/2.jpg';
import ofImg3 from './images/office/3.jpg';
import ofImg4 from './images/office/4.jpg';
import ofImg5 from './images/office/5.jpg';
import ofImg6 from './images/office/6.jpg';
import ofImg7 from './images/office/7.jpg';
import ofImg8 from './images/office/8.jpg';
import ofImg9 from './images/office/9.jpg';
import ofImg10 from './images/office/10.jpg';
import ofImg11 from './images/office/11.jpg';
import ofImg12 from './images/office/12.jpg';
import ofImg13 from './images/office/13.jpg';

// evromisto

import evroImg1 from './images/evromisto/1.jpg';
import evroImg2 from './images/evromisto/2.jpg';
import evroImg3 from './images/evromisto/3.jpg';
import evroImg4 from './images/evromisto/4.jpg';
import evroImg5 from './images/evromisto/5.jpg';
import evroImg6 from './images/evromisto/6.jpg';
import evroImg7 from './images/evromisto/7.jpg';
import evroImg8 from './images/evromisto/8.jpg';
import evroImg9 from './images/evromisto/9.jpg';
import evroImg10 from './images/evromisto/10.jpg';

// parkland

import parkImg1 from './images/parkland/1.jpg';
import parkImg2 from './images/parkland/2.jpg';
import parkImg3 from './images/parkland/3.jpg';
import parkImg4 from './images/parkland/4.jpg';
import parkImg5 from './images/evromisto/5.jpg';
import parkImg6 from './images/evromisto/6.jpg';
import parkImg7 from './images/evromisto/7.jpg';
import parkImg8 from './images/evromisto/8.jpg';


export const MyContext = React.createContext();



export const MyProvider = ({ children }) => {
    const [projectsInfo, setProjectsInfo] = React.useState([
        {
            projectIndex: 1,
            projectPhotos: [metroImg1, metroImg2, metroImg3, metroImg4, metroImg5, metroImg6, metroImg7, metroImg8, metroImg9, metroImg10, metroImg11, metroImg12, metroImg13],
            projectName: 'metropolice',
            info: 'project1'
        },
        {
            projectIndex: 2,
            projectPhotos: [zol13Img1, zol13Img2, zol13Img3, zol13Img4, zol13Img5, zol13Img6, zol13Img7, zol13Img8, zol13Img9, zol13Img10, zol13Img11, zol13Img12],
            projectName: 'zolochy13',
            info: 'project2'
        },
        {
            projectIndex: 3,
            projectPhotos: [zol14Img1, zol14Img2, zol14Img3, zol14Img4, zol14Img5, zol14Img6, zol14Img7, zol14Img8, zol14Img9, zol14Img10, zol14Img12, zol14Img13, zol14Img14, zol14Img15, zol14Img16],
            projectName: 'zolochy14',
            info: 'project3'
        },
        {
            projectIndex: 4,
            projectPhotos: [itOfImg1, itOfImg2, itOfImg3, itOfImg4, itOfImg5, itOfImg6, itOfImg7, itOfImg8, itOfImg9],
            projectName: 'itOffice',
            info: 'project4'
        },
        {
            projectIndex: 5,
            projectPhotos: [ofImg1, ofImg2, ofImg3, ofImg4, ofImg5, ofImg6, ofImg7, ofImg13, ofImg8, ofImg9, ofImg10, ofImg11, ofImg12],
            projectName: 'office',
            info: 'project5'
        },
        {
            projectIndex: 6,
            projectPhotos: [evroImg1, evroImg2, evroImg3, evroImg4, evroImg5, evroImg6, evroImg7, evroImg8, evroImg9, evroImg10],
            projectName: 'evromisto',
            info: 'project6'
        },
        {
            projectIndex: 7,
            projectPhotos: [parkImg1, parkImg2, parkImg3, parkImg4, parkImg5, parkImg6, parkImg7, parkImg8,],
            projectName: 'parkland',
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