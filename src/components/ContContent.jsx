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
          <span>+380996164208</span>
        </div>
        {/* <div className="contItem">
          <FaInstagram size={'20px'} style={{ marginRight: '5px' }} />
          <span>inst:</span>
          <span>@asdasd</span>
        </div> */}
        <div className="contItem">
          <PiTelegramLogo size={"20px"} style={{ marginRight: "5px" }} />
          <span>telegram:</span>
          <span>@Serbs_k</span>
        </div>
        <div className="contItem">
          <FiMail size={"20px"} style={{ marginRight: "5px" }} />
          <span>email:</span>
          <span>serbsk@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContContent;
