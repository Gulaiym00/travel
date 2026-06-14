"use client";
import scss from "./home.module.scss";
import { motion } from "framer-motion";
import { CiMap } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { LuHeadset } from "react-icons/lu";
import RegionCard from "@/components/ui/regionCard/RegionCard";
import Reviews from "../reviews/Reviews";
import { MdStart } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import { useRouter } from "next/navigation";
const Home = () => {
  const {push} = useRouter()
  return (
    <>
      <section className={scss.hero}>
        <div className="container">
            <div className={scss.mainContainer}>
            <h1>
              <Typewriter
                words={["Добро пожаловать\n в TravelKG"]}
                loop={10}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>

            <p>
              Откройте для себя красоту гор , озёр и древней
              <br />
              культуры вместе с TravelKG
            </p>
            <div className={scss.btn}>
              <button onClick={()=> push("/tours")}>Исследовать туры</button>
              <span>
                <MdStart />
              </span>
            </div>

            <div className={scss.info}>
              <p>
                Государство на северо-востоке Центральной Азии.
                <br />
                Расположено в пределах Памиро-Алая на
                <br />
                юго-западе и Тянь-Шаня — на северо-востоке.
                <br />
                Граничит — с Казахстаном, Таджикистаном, Узбекистаном и Китаем.
              </p>

              <p>
                Государство на северо-востоке Центральной Азии.
                <br />
                Расположено в пределах Памиро-Алая на
                <br />
                юго-западе и Тянь-Шаня — на северо-востоке.
                <br />
                Граничит — с Казахстаном, Таджикистаном, Узбекистаном и Китаем.
              </p>
            </div>

            <div className={scss.iconList}>
              <div className={scss.icon}>
                <span>
                  <CiMap />
                </span>
                <p>Уникальные маршруты</p>
              </div>

              <div className={scss.icon}>
                <span>
                  <CiBookmarkCheck />
                </span>
                <p>Опытные гиды</p>
              </div>

              <div className={scss.icon}>
                <span>
                  <MdOutlineSecurity />
                </span>
                <p>Безопасность</p>
              </div>

              <div className={scss.icon}>
                <span>
                  <LuHeadset />
                </span>
                <p>Поддержка 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={scss.region}>
        <div className="container">
          <div className={scss.sectionTitle}>
            <h2>Найдите свое любимое место</h2>
          </div>

          <motion.div
            className={scss.list}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <RegionCard
              place="1st place"
              title="Иссык-Куль"
              img="https://dwc.kg/wp-content/uploads/2023/09/1646258479_56-sportishka-com-p-aeroport-tamchi-issik-kul-turizm-krasivo-f-62.jpg"
            />

            <RegionCard
              place="2nd place"
              title="Чуй"
              img="https://naq.media/wp-content/uploads/2024/11/img-32439-55150.png"
            />

            <RegionCard
              place="3rd place"
              title="Ош"
              img="https://24.kg/files/media/230/230546.jpg"
            />

            <RegionCard
              place="4th place"
              title="Талас"
              img="https://open.kg/uploads/posts/2014-07/1405169362_elechek3.webp"
            />

            <RegionCard
              place="5th place"
              title="Джалал-Абад"
              img="https://avatars.mds.yandex.net/i?id=d8cf055bddfe544cb0c73ad010159ef258c2250c-5338760-images-thumbs&n=13"
            />

            <RegionCard
              place="6th place"
              title="Нарын"
              img="https://asiamixtravel.ru/media/news/news_news_image_2k_20251205_1041.webp"
            />

            <RegionCard
              place="7th place"
              title="Баткен"
              img="https://eurasia.travel/wp-content/uploads/2024/09/Batken-city-sign.jpg"
            />
          </motion.div>
        </div>
      </section>

      <motion.div
        className={scss.interest}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2>Интересные факты о Кыргызстане</h2>

          <motion.div
            className={scss.text}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Кыргызстан — одна из самых горных стран мира.  Более 90%
              территории страны занимают горы, а большую часть ландшафта
              формируют хребты Тянь-Шаня.
            </p>

            <p>
              Эпос «Манас» — один из самых длинных эпосов на Земле.  Его объём в
              несколько раз превышает «Илиаду» и «Одиссею» вместе взятые. Для
              кыргызского народа это не просто литературное произведение, а
              важная часть национальной идентичности.
            </p>
          </motion.div>

          <motion.div
            className={scss.text}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Озеро Иссык-Куль никогда полностью не замерзает.Несмотря на
              высокогорное расположение, солоноватая вода и большая глубина
              позволяют озеру оставаться открытым даже зимой. Оно считается
              одним из крупнейших высокогорных озёр мира.
            </p>

            <p>
              Через территорию Кыргызстана проходил Великий шёлковый путь.  В
              стране сохранились древние города и памятники, связанные с
              торговыми маршрутами между Востоком и Западом.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <Reviews />
    </>
  );
};

export default Home;
