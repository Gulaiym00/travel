import React from "react";
import scss from "./footer.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.first}>
            <div className={scss.logo}>
              <img src="/travelLogo.png" alt="" />
              <h2>TravelKG</h2>
            </div>
            <p>Откройте Кыргызстан вместе с нами</p>
            <p>2026 Все право защищены.</p>
          </div>
          <div className={scss.info}>
            <h3>Навигация</h3>
            <p>Главная</p>
            <p>Туры</p>
            <p>О нас</p>
            <p>Контакты</p>
          </div>
          <div className={scss.info2}>
            <h3>Контакты</h3>
            <div className={scss.icon}>
              <span>
                <FaPhoneAlt />
              </span>
              <p>0770 456 555</p>
            </div>
            <div className={scss.icon}>
              <span>
                <FaPhoneAlt />
              </span>
              <p>0900 246 111</p>
            </div>
            <div className={scss.icon}>
              <span>
                <HiOutlineMail />
              </span>
              <p>travelkg@gmail.com</p>
            </div>
            <div className={scss.icon}>
              <span>
                <IoLocationOutline />
              </span>
              <p>Бишкек </p>
            </div>
          </div>
          <div className={scss.info}>
            <h3>Следите за нами</h3>
            <p>Instagram: @travelkg_official</p>
            <p>Facebook: TravelKG Tours</p>
            <p>Telegram: @travelkg</p>
            <p>WhatsApp: +996 505 334 555</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
