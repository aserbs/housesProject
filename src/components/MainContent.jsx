import React, { useContext } from "react";
import "../App.scss";
import ContContent from "./ContContent";
import "../styles/Components/MainContent.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MyContext } from "../Context";
const MainContent = ({ usref }) => {
  const { projectInfoNavMain } = useContext(MyContext);

  // function SampleNextArrow(props) {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className="arrow-nextRev "
  //       onClick={onClick}
  //       style={{ fontSize: "24px" }}
  //     >
  //       ❯
  //     </div>
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className="arrow-prevRev "
  //       onClick={onClick}
  //       style={{ fontSize: "24px" }}
  //     >
  //       ❮
  //     </div>
  //   );
  // }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="main-content">
      <p className="typewriter">Твій ремонт - Твій комфорт</p>
      <div className="slider_cont">
        <Slider {...settings}>
          {projectInfoNavMain.map((img, index) => (
            <img
              src={img.projectPhotos}
              alt={img}
              key={index}
              className={"mainSlideItem"}
            />
          ))}
        </Slider>
      </div>

      <p>
        <span style={{ marginLeft: "20px" }}></span>Наша філософія проста,
        максимізувати потенціал нерухомості в рамках бюджету клієнта, будь то
        простий ремонт або елітне оздоблення.
      </p>
      <p>
        <span style={{ marginLeft: "20px" }}></span> Ми будуємо міцні, довірчі
        відносини з нашими клієнтами за допомогою чесних, професійних та творчих
        консультацій, передового дизайну, майстерності співробітників та
        зважених будівельних рішень.
      </p>
      <p>
        <span style={{ marginLeft: "20px" }}></span> Забезпечуючи повний спектр
        послуг, ми виконуємо всі етапи ремонту – від первинного планування та
        створення дизайну до остаточної реалізації проекту, включно з підбором
        матеріалів, виконанням будівельних робіт та меблюванням.
      </p>
      <ContContent usref={usref} />
    </div>
  );
};

export default MainContent;
