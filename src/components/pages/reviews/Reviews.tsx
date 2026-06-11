import React from "react";
import scss from "./reviews.module.scss";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <motion.div
          className={scss.mainContainer}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2>Отзывы</h2>
          <div className={scss.list}>
            <div className={scss.card}>
              <div className={scss.top}>
                <div className={scss.star}>
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                </div>
                <p>Иван</p>
              </div>
              <p>
                Иссык-Көлдүн кооздугу сөз менен жеткис. Кыргызстан мага эң жакшы
                эскерүүлөрдү тартуулады.
              </p>
            </div>
            <div className={scss.card}>
              <div className={scss.top}>
                <div className={scss.star}>
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                </div>
                <p>Иван</p>
              </div>
              <p>
                Иссык-Көлдүн кооздугу сөз менен жеткис. Кыргызстан мага эң жакшы
                эскерүүлөрдү тартуулады.
              </p>
            </div>
            <div className={scss.card}>
              <div className={scss.top}>
                <div className={scss.star}>
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                </div>
                <p>Иван</p>
              </div>
              <p>
                Иссык-Көлдүн кооздугу сөз менен жеткис. Кыргызстан мага эң жакшы
                эскерүүлөрдү тартуулады.
              </p>
            </div>
            <div className={scss.card}>
              <div className={scss.top}>
                <div className={scss.star}>
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                </div>
                <p>Иван</p>
              </div>
              <p>
                Иссык-Көлдүн кооздугу сөз менен жеткис. Кыргызстан мага эң жакшы
                эскерүүлөрдү тартуулады.
              </p>
            </div>
          </div>
          <h2>Расскажите о своих впечатлениях от Кыргызстана.</h2>
          <div className={scss.inputBtn}>
            <div className={scss.input}>
              <p>Имя</p>
              <input type="text" />
            </div>
            <div className={scss.input}>
              <p>Комментарий</p>
              <input type="text" />
            </div>
            <button>Отправить</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
