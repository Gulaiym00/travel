"use client";
import scss from "./tours.module.scss";
import ToursCard from "@/components/ui/toursCard/ToursCard";
import { CiMap } from "react-icons/ci";
import { LuBus } from "react-icons/lu";
import { MdHotel } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import { LuShield } from "react-icons/lu";
import { BsPatchCheck } from "react-icons/bs";
import { LuHeadset } from "react-icons/lu";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Tours = () => {
  return (
    <section id={scss.tours}>
      <div className={scss.container}>
        <div className={scss.tours}>
          <div className={scss.titleTours}>
            <h1>
              <Typewriter
                words={["Туры по\nКыргызстану"]}
                loop={2}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
          </div>
          <div className={scss.content}>
            <h2>
              Откройте Кыргызстан <br /> вместе с TravelKG
            </h2>
            <motion.div
              className={scss.icons}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className={scss.icon}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
              >
                <CiMap />
                <BsPatchCheck />
                <LuShield />
                <LuHeadset />
              </motion.div>
              <div className={scss.text}>
                <p>
                  Уникальные <br /> маршруты
                </p>
                <p>Опытные гиды</p>
                <p>
                  Безопасность <br />и комфорт
                </p>
                <p>Поддержка 24/7</p>
              </div>
            </motion.div>
          </div>
          <div className={scss.listTours}>
            <motion.center
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <h4>
                От однодневных экскурсий до многодневных
                <br />
                путешествий — найдите идеальный тур для себя.✨
              </h4>
            </motion.center>
            <ToursCard />

            <motion.div
              className={scss.listIncluded}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={scss.whatIncludes}>Что включено</h2>
              <div className={scss.cardsIncluded}>
                <div className={scss.cardIncluded}>
                  <CiMap className={scss.iconIncluded} />
                  <h3>Гиды:</h3>
                  <p>Два потрясающих гида, которые знают всё о Кыргызстане</p>
                </div>

                <div className={scss.cardIncluded}>
                  <LuBus className={scss.iconIncluded} />
                  <h3>Трансфер:</h3>
                  <p>От аэропорта до отеля</p>
                </div>

                <div className={scss.cardIncluded}>
                  <MdHotel className={scss.iconIncluded} />
                  <h3>Отель:</h3>
                  <p>
                    Уютное размещение: по два человека в номере (завтрак
                    включён)
                  </p>
                </div>

                <div className={scss.cardIncluded}>
                  <MdFlight className={scss.iconIncluded} />
                  <h3>Полеты:</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;
