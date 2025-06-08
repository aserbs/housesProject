import React, { createContext, useContext, useState, useEffect } from "react";

export const MyContext = React.createContext();
const cof2Images = Array.from(
  { length: 4 },
  (_, i) => `https://tviyremont.com.ua/static/images/cof2/${i + 1}.webp`
);
const cofPattern = Array.from(
  { length: 6 },
  (_, i) => `https://tviyremont.com.ua/static/images/cofPattern/${i + 1}.webp`
);
const metroImages = Array.from(
  { length: 11 },
  (_, i) => `https://tviyremont.com.ua/static/images/metropolis/${i + 1}.webp`
);
const cof1Images = Array.from(
  { length: 11 },
  (_, i) => `https://tviyremont.com.ua/static/images/cof1/${i + 1}.webp`
);
const tymImages = Array.from(
  { length: 12 },
  (_, i) => `https://tviyremont.com.ua/static/images/tym/${i + 1}.webp`
);
const zol13Images = Array.from(
  { length: 12 },
  (_, i) => `https://tviyremont.com.ua/static/images/zol13/${i + 1}.webp`
);
const zol14Images = Array.from(
  { length: 15 },
  (_, i) => `https://tviyremont.com.ua/static/images/zol14/${i + 1}.webp`
);
const itofficeImages = Array.from(
  { length: 9 },
  (_, i) => `https://tviyremont.com.ua/static/images/itoffice/${i + 1}.webp`
);
const officeImages = Array.from(
  { length: 13 },
  (_, i) => `https://tviyremont.com.ua/static/images/office/${i + 1}.webp`
);
const evromistoImages = Array.from(
  { length: 10 },
  (_, i) => `https://tviyremont.com.ua/static/images/evromisto/${i + 1}.webp`
);
const parkImages = Array.from(
  { length: 8 },
  (_, i) => `https://tviyremont.com.ua/static/images/parkland/${i + 1}.webp`
);

export const MyProvider = ({ children }) => {
  const [projectsInfo, setProjectsInfo] = React.useState([
    {
      projectIndex: 1,
      projectPhotos: cof2Images,
      projectName: `Кав'ярня "Сервант" - 2`,
      square: "9,21 м²",
      duration: "2 місяці",
      year: "2024 р",
      littleInfo: "м. Київ, пр-т Академіка Глушкова 29",
    },
    {
      projectIndex: 2,
      projectPhotos: cofPattern,
      projectName: `Оновлення кав'ярні "Pattern"`,
      square: "56,48 м²",
      duration: "3 тижня",
      year: "2025 р",
      littleInfo: "м. Київ, вул. Михайла Омеляновича-Павленка, 18/20",
    },
    {
      projectIndex: 3,
      projectPhotos: cof1Images,
      projectName: `Кав'ярня "Сервант" - 1`,
      square: "31,17 м²",
      duration: "3 місяці",
      year: "2024 р",
      littleInfo: "м. Київ, вулиця Кирилівська, 34/38",
    },
    {
      projectIndex: 4,
      projectPhotos: metroImages,
      projectName: "Однокімнатна квартира",
      square: "45,07 м²",
      duration: "4 місяці",
      year: "2022-2023 р",
      littleInfo: "ЖК «Метрополіс», м. Київ",
    },
    {
      projectIndex: 5,
      projectPhotos: tymImages,
      projectName: "Трьохкімнатна квартира",
      square: "78,52 м²",
      duration: "6 місяці",
      year: "2023 р",
      littleInfo: "Будинок Бикова, м. Київ",
    },
    {
      projectIndex: 6,
      projectPhotos: zol13Images,
      projectName: "Приватний будинок №13",
      square: "204,35 м²",
      duration: "8 місяців",
      year: "2018-2019 р",
      littleInfo: "Котеджне містечко “Zoloche”,\nКиївська обл., с. Вишенки",
    },
    {
      projectIndex: 7,
      projectPhotos: zol14Images,
      projectName: "Приватний будинок №14",
      square: "204,35 м²",
      duration: "8 місяців",
      year: "2018-2019 р",
      littleInfo: "Котеджне містечко “Zoloche”,\nКиївська обл., с. Вишенки",
    },
    {
      projectIndex: 8,
      projectPhotos: itofficeImages,
      projectName: "Ремонт офісних приміщеннь для ІТ компанії",
      square: "897 м²",
      duration: "4 місяці",
      year: "2020 р",
      littleInfo: "БЦ «Протасів», м. Київ",
    },
    {
      projectIndex: 9,
      projectPhotos: officeImages,
      projectName:
        "Реконструкція нежитлових приміщень під офіси для державної компанії",
      square: "720 м²",
      duration: "6 місяців",
      year: "2019-2020 р",
      littleInfo: "м. Київ",
    },
    {
      projectIndex: 10,
      projectPhotos: evromistoImages,
      projectName: "Однокімнатна квартира",
      square: "44,32 м²",
      duration: "3 місяці",
      year: "2022 р",
      littleInfo: "ЖК «Євро місто 2»,\nКиївська обл., с. Крюківщина",
    },
    {
      projectIndex: 11,
      projectPhotos: parkImages,
      projectName: "Двухкімнатна  квартира",
      square: "43,76 м²",
      duration: "5 місяців",
      year: "2018 р",
      littleInfo: "ЖК «Паркленд», м. Київ",
    },
  ]);
  const [projectInfoNavMain, setProjectInfoNavMain] = React.useState([
    {
      projectIndex: 1,
      projectPhotos: cof2Images[0],
      projectName: `Кав'ярня "Сервант" - 2`,
      square: "9,21 м²",
      duration: "2 місяці",
      year: "2024 р",
      littleInfo: "м. Київ, пр-т Академіка Глушкова 29",
    },
    {
      projectIndex: 2,
      projectPhotos: cofPattern[0],
      projectName: `Оновлення кав'ярні "Pattern"`,
      square: "56,48 м²",
      duration: "3 тижня",
      year: "2025 р",
      littleInfo: "м. Київ, вул. Михайла Омеляновича-Павленка, 18/20",
    },
    {
      projectIndex: 3,
      projectPhotos: cof1Images[0],

      projectName: `Кав'ярня "Сервант" - 1`,
      square: "31,17 м²",
      duration: "3 місяці",
      year: "2024 р",
      littleInfo: "м. Київ, вулиця Кирилівська, 34/38",
    },
    {
      projectIndex: 4,
      projectPhotos: metroImages[1],

      projectName: "Однокімнатна квартира",
      square: "45,07 м²",
      duration: "4 місяці",
      year: "2022-2023 р",
      littleInfo: "ЖК «Метрополіс», м. Київ",
    },
    {
      projectIndex: 5,
      projectPhotos: tymImages[0],

      projectName: "Трьохкімнатна квартира",
      square: "78,52 м²",
      duration: "6 місяці",
      year: "2023 р",
      littleInfo: "Будинок Бикова, м. Київ",
    },
    {
      projectIndex: 6,
      projectPhotos: zol13Images[7],

      projectName: "Приватний будинок №13",
      square: "204,35 м²",
      duration: "8 місяців",
      year: "2018-2019 р",
      littleInfo: "Котеджне містечко “Zoloche”,\nКиївська обл., с. Вишенки",
    },
    {
      projectIndex: 7,
      projectPhotos: zol14Images[0],

      projectName: "Приватний будинок №14",
      square: "204,35 м²",
      duration: "8 місяців",
      year: "2018-2019 р",
      littleInfo: "Котеджне містечко “Zoloche”,\nКиївська обл., с. Вишенки",
    },
    {
      projectIndex: 8,
      projectPhotos: itofficeImages[0],

      projectName: "Ремонт офісних приміщеннь для ІТ компанії",
      square: "897 м²",
      duration: "4 місяці",
      year: "2020 р",
      littleInfo: "БЦ «Протасів», м. Київ",
    },
    {
      projectIndex: 9,
      projectPhotos: officeImages[0],

      projectName:
        "Реконструкція нежитлових приміщень під офіси для державної компанії",
      square: "720 м²",
      duration: "6 місяців",
      year: "2019-2020 р",
      littleInfo: "м. Київ",
    },
    {
      projectIndex: 10,
      projectPhotos: evromistoImages[0],

      projectName: "Однокімнатна квартира",
      square: "44,32 м²",
      duration: "3 місяці",
      year: "2022 р",
      littleInfo: "ЖК «Євро місто 2»,\nКиївська обл., с. Крюківщина",
    },
    {
      projectIndex: 11,
      projectPhotos: parkImages[0],
      projectName: "Двухкімнатна  квартира",
      square: "43,76 м²",
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
