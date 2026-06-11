import React from "react";
import scss from "./tours.module.scss";
import ToursCard from "@/components/ui/toursCard/ToursCard";
import { CiMap } from "react-icons/ci";
import { LuBus } from "react-icons/lu";
import { MdHotel } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import { LuShield } from "react-icons/lu";
import { BsPatchCheck } from "react-icons/bs";
import { LuHeadset } from "react-icons/lu";

const Tours = () => {
  return (
    <section id={scss.tours}>
      <div className={scss.container}>
        <div className={scss.tours}>
          <h1>
            Туры по <br />
            Кыргызстану
          </h1>
          <h2>
            Откройте Кыргызстан <br /> вместе с TravelKG
          </h2>
          <div className={scss.icons}>
            <div className={scss.icon}>
              <CiMap />
              <BsPatchCheck />
              <LuShield />
              <LuHeadset />
            </div>
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
          </div>
          <div className={scss.listTours}>
            <center>
              <h4>
                От однодневных экскурсий до многодневных
                <br />
                путешествий — найдите идеальный тур для себя.✨
              </h4>
            </center>
            <ToursCard />
            <ToursCard />
            <ToursCard />
            <ToursCard />
            <ToursCard />
            <ToursCard />

            <div className={scss.listIncluded}>
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
                  Уютное размещение: по два человека в номере (завтрак включён)
                </p>
              </div>

              <div className={scss.cardIncluded}>
                <MdFlight className={scss.iconIncluded} />
                <h3>Полеты:</h3>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;
