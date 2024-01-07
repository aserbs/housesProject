import React from 'react'
import '../styles/Components/ContContent.scss'
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { FiMail, FiPhone } from "react-icons/fi";
const ContContent = () => {
  return (
    <div className='contacts_cont'>
      <h2 className='infoH2'> Не соромтеся звертатися до мене</h2>

      <div className='contItem_cont'>
        <div className="contItem">
          <FiPhone size={'25px'} style={{ marginRight: '5px' }} />
          <span>телефон:</span>
          <span>+380996164208</span>
        </div>
        <div className="contItem">
          <FaInstagram size={'25px'} style={{ marginRight: '5px' }} />
          <span>inst:</span>
          <span>@asdasd</span>
        </div>
        <div className="contItem">
          <PiTelegramLogo size={'25px'} style={{ marginRight: '5px' }} />
          <span>telegram:</span>
          <span>@asdas</span>
        </div>
        <div className="contItem">
          <FiMail size={'25px'} style={{ marginRight: '5px' }} />
          <span>email:</span>
          <span>asdas@gmail.com</span>
        </div>
      </div>

    </div>
  )
}

export default ContContent;