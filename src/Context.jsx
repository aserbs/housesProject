import React, { createContext, useContext, useState, useEffect } from "react";

// metropolice
import metroImg1 from "./images/metropolis/metro1-min.jpg";
import metroImg2 from "./images/metropolis/metro2-min.jpg";
import metroImg3 from "./images/metropolis/metro3-min.jpg";
import metroImg4 from "./images/metropolis/metro4-min.jpg";
import metroImg5 from "./images/metropolis/metro5-min.jpg";
import metroImg6 from "./images/metropolis/metro6-min.jpg";
import metroImg7 from "./images/metropolis/metro7-min.jpg";
import metroImg8 from "./images/metropolis/metro8-min.jpg";
import metroImg9 from "./images/metropolis/metro9-min.jpg";
import metroImg10 from "./images/metropolis/metro10-min.jpg";
import metroImg11 from "./images/metropolis/metro11-min.jpg";
import metroImg12 from "./images/metropolis/metro12-min.jpg";
import metroImg13 from "./images/metropolis/metro13-min.jpg";
// cof1
import cof1Img1 from "./images/cof1/1.jpg";
import cof1Img2 from "./images/cof1/2.jpg";
import cof1Img3 from "./images/cof1/3.jpg";
import cof1Img4 from "./images/cof1/4.jpg";
import cof1Img5 from "./images/cof1/5.jpg";
import cof1Img6 from "./images/cof1/6.jpg";
import cof1Img7 from "./images/cof1/7.jpg";
import cof1Img8 from "./images/cof1/8.jpg";
import cof1Img9 from "./images/cof1/9.jpg";
import cof1Img10 from "./images/cof1/10.jpg";
import cof1Img11 from "./images/cof1/11.jpg";

// tym
import tymImg1 from "./images/tym/1.jpg";
import tymImg3 from "./images/tym/3.jpg";
import tymImg5 from "./images/tym/5.jpg";
import tymImg10 from "./images/tym/10.jpg";
import tymImg13 from "./images/tym/13.jpg";
import tymImg14 from "./images/tym/14.jpg";
import tymImg15 from "./images/tym/15.jpg";
import tymImg16 from "./images/tym/16.jpg";
import tymImg17 from "./images/tym/17.jpg";
import tymImg18 from "./images/tym/18.jpg";
import tymImg19 from "./images/tym/19.jpg";
import tymImg20 from "./images/tym/20.jpg";

//zol13
import zol13Img1 from "./images/zol13/1-min.jpg";
import zol13Img2 from "./images/zol13/2-min.jpg";
import zol13Img3 from "./images/zol13/3-min.jpg";
import zol13Img4 from "./images/zol13/4-min.jpg";
import zol13Img5 from "./images/zol13/5-min.jpg";
import zol13Img6 from "./images/zol13/6-min.jpg";
import zol13Img7 from "./images/zol13/7-min.jpg";
import zol13Img8 from "./images/zol13/8-min.jpg";
import zol13Img9 from "./images/zol13/9-min.jpg";
import zol13Img10 from "./images/zol13/10-min.jpg";
import zol13Img11 from "./images/zol13/11-min.jpg";
import zol13Img12 from "./images/zol13/12-min.jpg";

// zol14
import zol14Img1 from "./images/zol14/1-min.jpg";
import zol14Img2 from "./images/zol14/2-min.jpg";
import zol14Img3 from "./images/zol14/3-min.jpg";
import zol14Img4 from "./images/zol14/4-min.jpg";
import zol14Img5 from "./images/zol14/5-min.jpg";
import zol14Img6 from "./images/zol14/6-min.jpg";
import zol14Img7 from "./images/zol14/7-min.jpg";
import zol14Img8 from "./images/zol14/8-min.jpg";
import zol14Img9 from "./images/zol14/9-min.jpg";
import zol14Img10 from "./images/zol14/10-min.jpg";
import zol14Img12 from "./images/zol14/12-min.jpg";
import zol14Img13 from "./images/zol14/13-min.jpg";
import zol14Img14 from "./images/zol14/14-min.jpg";
import zol14Img15 from "./images/zol14/15-min.jpg";
import zol14Img16 from "./images/zol14/16-min.jpg";

// itOffice
import itOfImg1 from "./images/itoffice/1-min.jpg";
import itOfImg2 from "./images/itoffice/2-min.jpg";
import itOfImg3 from "./images/itoffice/3-min.jpg";
import itOfImg4 from "./images/itoffice/4-min.jpg";
import itOfImg5 from "./images/itoffice/5-min.jpg";
import itOfImg6 from "./images/itoffice/6-min.jpg";
import itOfImg7 from "./images/itoffice/7-min.jpg";
import itOfImg8 from "./images/itoffice/8-min.jpg";
import itOfImg9 from "./images/itoffice/9-min.jpg";

// offices
import ofImg1 from "./images/office/1-min.jpg";
import ofImg2 from "./images/office/2-min.jpg";
import ofImg3 from "./images/office/3-min.jpg";
import ofImg4 from "./images/office/4-min.jpg";
import ofImg5 from "./images/office/5-min.jpg";
import ofImg6 from "./images/office/6-min.jpg";
import ofImg7 from "./images/office/7-min.jpg";
import ofImg8 from "./images/office/8-min.jpg";
import ofImg9 from "./images/office/9-min.jpg";
import ofImg10 from "./images/office/10-min.jpg";
import ofImg11 from "./images/office/11-min.jpg";
import ofImg12 from "./images/office/12-min.jpg";
import ofImg13 from "./images/office/13-min.jpg";

// evromisto

import evroImg1 from "./images/evromisto/1-min.jpg";
import evroImg2 from "./images/evromisto/2-min.jpg";
import evroImg3 from "./images/evromisto/3-min.jpg";
import evroImg4 from "./images/evromisto/4-min.jpg";
import evroImg5 from "./images/evromisto/5-min.jpg";
import evroImg6 from "./images/evromisto/6-min.jpg";
import evroImg7 from "./images/evromisto/7-min.jpg";
import evroImg8 from "./images/evromisto/8-min.jpg";
import evroImg9 from "./images/evromisto/9-min.jpg";
import evroImg10 from "./images/evromisto/10-min.jpg";

// parkland

import parkImg1 from "./images/parkland/1-min.jpg";
import parkImg2 from "./images/parkland/2-min.jpg";
import parkImg3 from "./images/parkland/3-min.jpg";
import parkImg4 from "./images/parkland/4-min.jpg";
import parkImg5 from "./images/parkland/5-min.jpg";
import parkImg6 from "./images/parkland/6-min.jpg";
import parkImg7 from "./images/parkland/7-min.jpg";
import parkImg8 from "./images/parkland/8-min.jpg";

export const MyContext = React.createContext();

export const MyProvider = ({ children }) => {
  const [projectsInfo, setProjectsInfo] = React.useState([
    {
      projectIndex: 1,
      projectPhotos: [
        cof1Img1,
        cof1Img2,
        cof1Img3,
        cof1Img4,
        cof1Img5,
        cof1Img6,
        cof1Img7,
        cof1Img8,
        cof1Img9,
        cof1Img10,
        cof1Img11,
      ],
      projectName: `Кав'ярня "Сервант"`,
      square: "31,17 м2",
      duration: "3 місяці",
      year: "2024 р",
      littleInfo: "м. Київ, вулиця Кирилівська,34/38",
    },
    {
      projectIndex: 2,
      projectPhotos: [
        metroImg1,
        metroImg2,
        metroImg3,
        metroImg4,
        metroImg5,
        metroImg6,
        metroImg7,
        metroImg8,
        metroImg9,
        metroImg10,
        metroImg11,
        metroImg12,
        metroImg13,
      ],
      projectName: "Однокімнатна квартира",
      square: "45,07 м2",
      duration: "4 місяці",
      year: "2022-2023 р",
      littleInfo: "ЖК «Метрополіс», м. Київ",
    },
    {
      projectIndex: 3,
      projectPhotos: [
        tymImg1,
        tymImg3,
        tymImg5,
        tymImg10,
        tymImg13,
        tymImg14,
        tymImg15,
        tymImg16,
        tymImg17,
        tymImg18,
        tymImg19,
        tymImg20,
      ],
      projectName: "Трьохкімнатна квартира",
      square: "78,52 м2",
      duration: "6 місяці",
      year: "2023 р",
      littleInfo: "Будинок Бикова, м. Київ",
    },
    {
      projectIndex: 4,
      projectPhotos: [
        zol13Img1,
        zol13Img2,
        zol13Img3,
        zol13Img4,
        zol13Img5,
        zol13Img6,
        zol13Img7,
        zol13Img8,
        zol13Img9,
        zol13Img10,
        zol13Img11,
        zol13Img12,
      ],
      projectName: "Приватний будинок №13",
      square: "204,35 м2",
      duration: "8 місяців",
      year: "2018-2019 р",
      littleInfo: "Котеджне містечко “Zoloche”,\nКиївська обл., с. Вишенки",
    },
    {
      projectIndex: 5,
      projectPhotos: [
        zol14Img7,
        zol14Img1,
        zol14Img2,
        zol14Img3,
        zol14Img4,
        zol14Img5,
        zol14Img6,

        zol14Img8,
        zol14Img9,
        zol14Img10,
        zol14Img12,
        zol14Img13,
        zol14Img14,
        zol14Img15,
        zol14Img16,
      ],
      projectName: "Приватний будинок №14",
      square: "204,35 м2",
      duration: "8 місяців",
      year: "2018-2019 р",
      littleInfo: "Котеджне містечко “Zoloche”,\nКиївська обл., с. Вишенки",
    },
    {
      projectIndex: 6,
      projectPhotos: [
        itOfImg1,
        itOfImg2,
        itOfImg3,
        itOfImg4,
        itOfImg5,
        itOfImg6,
        itOfImg7,
        itOfImg8,
        itOfImg9,
      ],
      projectName: "Ремонт офісних приміщеннь для ІТ компанії",
      square: "897 м2",
      duration: "4 місяці",
      year: "2020 р",
      littleInfo: "БЦ «Протасів», м. Київ",
    },
    {
      projectIndex: 7,
      projectPhotos: [
        ofImg1,
        ofImg2,
        ofImg3,
        ofImg4,
        ofImg5,
        ofImg6,
        ofImg7,
        ofImg13,
        ofImg8,
        ofImg9,
        ofImg10,
        ofImg11,
        ofImg12,
      ],
      projectName:
        "Реконструкція нежитлових приміщень під офіси для державної компанії",
      square: "720 м2",
      duration: "6 місяців",
      year: "2019-2020 р",
      littleInfo: "м. Київ",
    },
    {
      projectIndex: 8,
      projectPhotos: [
        evroImg1,
        evroImg2,
        evroImg3,
        evroImg4,
        evroImg5,
        evroImg6,
        evroImg7,
        evroImg8,
        evroImg9,
        evroImg10,
      ],
      projectName: "Однокімнатна квартира",
      square: "44,32 м2",
      duration: "3 місяці",
      year: "2022 р",
      littleInfo: "ЖК «Євро місто 2»,\nКиївська обл., с. Крюківщина",
    },
    {
      projectIndex: 9,
      projectPhotos: [
        parkImg1,
        parkImg2,
        parkImg3,
        parkImg4,
        parkImg5,
        parkImg6,
        parkImg7,
        parkImg8,
      ],
      projectName: "Двухкімнатна  квартира",
      square: "43,76 м2",
      duration: "5 місяців",
      year: "2018 р",
      littleInfo: "ЖК «Паркленд», м. Київ",
    },
    ,
  ]);
  const [projectInfoNavMain, setProjectInfoNavMain] = React.useState([
    {
      projectIndex: 1,
      projectPhotos: cof1Img1,

      projectName: `Кав'ярня "Сервант"`,
      square: "31,17 м2",
      duration: "3 місяці",
      year: "2024 р",
      littleInfo: "м. Київ, вулиця Кирилівська, 34/38",
    },
    {
      projectIndex: 2,
      projectPhotos: metroImg1,

      projectName: "Однокімнатна квартира",
      square: "45,07 м2",
      duration: "4 місяці",
      year: "2022-2023 р",
      littleInfo: "ЖК «Метрополіс», м. Київ",
    },
    {
      projectIndex: 3,
      projectPhotos: tymImg1,

      projectName: "Трьохкімнатна квартира",
      square: "78,52 м2",
      duration: "6 місяці",
      year: "2023 р",
      littleInfo: "Будинок Бикова, м. Київ",
    },
    {
      projectIndex: 4,
      projectPhotos: zol13Img8,

      projectName: "Приватний будинок №13",
      square: "204,35 м2",
      duration: "8 місяців",
      year: "2018-2019 р",
      littleInfo: "Котеджне містечко “Zoloche”,\nКиївська обл., с. Вишенки",
    },
    {
      projectIndex: 5,
      projectPhotos: zol14Img1,

      projectName: "Приватний будинок №14",
      square: "204,35 м2",
      duration: "8 місяців",
      year: "2018-2019 р",
      littleInfo: "Котеджне містечко “Zoloche”,\nКиївська обл., с. Вишенки",
    },
    {
      projectIndex: 6,
      projectPhotos: itOfImg1,

      projectName: "Ремонт офісних приміщеннь для ІТ компанії",
      square: "897 м2",
      duration: "4 місяці",
      year: "2020 р",
      littleInfo: "БЦ «Протасів», м. Київ",
    },
    {
      projectIndex: 7,
      projectPhotos: ofImg1,

      projectName:
        "Реконструкція нежитлових приміщень під офіси для державної компанії",
      square: "720 м2",
      duration: "6 місяців",
      year: "2019-2020 р",
      littleInfo: "м. Київ",
    },
    {
      projectIndex: 8,
      projectPhotos: evroImg1,

      projectName: "Однокімнатна квартира",
      square: "44,32 м2",
      duration: "3 місяці",
      year: "2022 р",
      littleInfo: "ЖК «Євро місто 2»,\nКиївська обл., с. Крюківщина",
    },
    {
      projectIndex: 9,
      projectPhotos: parkImg1,
      projectName: "Двухкімнатна  квартира",
      square: "43,76 м2",
      duration: "5 місяців",
      year: "2018 р",
      littleInfo: "ЖК «Паркленд», м. Київ",
    },
  ]);

  const [currentProject, setCurrentProject] = React.useState(1);
  const [page, setPage] = React.useState(0);

  const addToArray = (item) => {
    setProjectsInfo([...projectsInfo, item]);
  };

  return (
    <MyContext.Provider
      value={{
        page,
        setPage,
        projectsInfo,
        addToArray,
        currentProject,
        setCurrentProject,
        projectInfoNavMain,
        setProjectInfoNavMain,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollTo, setScrollTo] = useState(null);
  useEffect(() => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setScrollTo(null); // Очистите цель скролла после выполнения скролла
      }
    }
  }, [scrollTo, setScrollTo]);
  return (
    <ScrollContext.Provider value={{ scrollTo, setScrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
