import React from "react";
import "../App.scss";
import ContContent from "./ContContent";
import "../styles/Components/MainContent.scss";
const MainContent = ({ handleNavClick }) => {
  return (
    <div className="main-content">
      {/* <h2 className=''>WE CREATE SPACE
        FOR LIVING </h2> */}
      <p className="typewriter">Твій ремонт - Твій комфорт</p>
      <p>
        <span style={{ marginLeft: "30px" }}></span>Наша філософія проста,
        максимізувати потенціал нерухомості в рамках бюджету клієнта, будь то
        простий ремонт або елітне оздоблення.
      </p>
      <p>
        <span style={{ marginLeft: "30px" }}></span> Ми будуємо міцні, довірчі
        відносини з нашими клієнтами за допомогою чесних, професійних та творчих
        консультацій, передового дизайну, майстерності співробітників та
        зважених будівельних рішень.
      </p>
      <p>
        <span style={{ marginLeft: "30px" }}></span> Забезпечуючи повний спектр
        послуг, ми виконуємо всі етапи ремонту – від первинного планування та
        створення дизайну до остаточної реалізації проекту, включно з підбором
        матеріалів, виконанням будівельних робіт та меблюванням.
      </p>
      <ContContent />
    </div>
  );
};

export default MainContent;
