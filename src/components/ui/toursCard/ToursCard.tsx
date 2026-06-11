import scss from "./toursCard.module.scss";
import { GiPriceTag } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa6";

const ToursCard = () => {
  return (
    <div className={scss.toursCard}>
      <FaRegHeart className={scss.like} />
      <img src="/cardImg.png" alt="" />
      <div className={scss.cardText}>
        <div className={scss.infoTours}>
          <h3>Однодневная экскурсия в национальный природный парк Ала-Арча</h3>
          <h6>
            Экскурсия в Ала-Арчу — это путешествие в живописное горное ущелье
            всего в 40 км от Бишкека. Вас ждут прогулки вдоль горной реки,
            свежий воздух, виды заснеженных вершин и хвойных лесов. По желанию
            можно подняться к панорамным точкам или водопадам.
          </h6>
        </div>
        <div className={scss.btns}>
          <div className={scss.price}>
            <GiPriceTag />
            <h3>Цена: 1000 KGS</h3>
          </div>
          <div className={scss.btn}>
            <h3>Подробнее</h3>
            <button>
              <svg
                width="25"
                height="20"
                viewBox="4 0 40 20 "
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9 20.75L27 13.75V13.6H0V9.94999H27V9.79999L14.9 2.84999L16.95 -1.34706e-05L35 11.4V12.2L16.95 23.6L14.9 20.75Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursCard;
