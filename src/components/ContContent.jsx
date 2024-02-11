import React from "react";
import "../styles/Components/ContContent.scss";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { FiMail, FiPhone } from "react-icons/fi";
const ContContent = () => {
  return (
    <div className="contacts_cont">
      <h2 className="infoH2" style={{ fontSize: "18px" }}>
        Контакти для зв'язку
      </h2>

      <div className="contItem_cont">
        <div className="contItem">
          <FiPhone size={"20px"} style={{ marginRight: "5px" }} />
          <span>телефон:</span>
          <a href="tel:+380989499990" style={{ fontWeight: "600" }}>
            +380989499990
          </a>
        </div>
        <div className="contItem">
          <PiTelegramLogo size={"20px"} style={{ marginRight: "5px" }} />
          <span>telegram:</span>
          <a href="https://t.me/Serbs_k" style={{ fontWeight: "600" }}>
            @Serbs_k
          </a>
        </div>
        <div className="contItem">
          <FiMail size={"20px"} style={{ marginRight: "5px" }} />
          <span>email:</span>
          <span style={{ fontWeight: "600", color: "black" }}>
            serbsk@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContContent;
