"use client";
import React from "react";
import scss from "./about.module.scss";
import { IoPeople, IoLocationOutline } from "react-icons/io5";
import { TbStarsFilled } from "react-icons/tb";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

const About = () => {
  const position: [number, number] = [42.8771, 74.6066];
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.aboutUs}>
            <h2>О нас</h2>
            <p>
              Добро пожаловать в TravelKG — туристическую компанию, которая
              помогает путешественникам открывать самые красивые места
              Кыргызстана и мира.
            </p>
          </div>
          <div className={scss.aboutUs}>
            <h2>Кто мы</h2>
            <p>
              TravelKG — современная туристическая компания, специализирующаяся
              на организации туров, экскурсий и путешествий. Мы предлагаем
              качественный сервис, индивидуальный подход и незабываемые
              впечатления для каждого клиента.
            </p>
          </div>
          <div className={scss.mission}>
            <h2>Наша миссия</h2>
            <p>
              Наша миссия — сделать путешествия доступными, комфортными и
              безопасными, помогая людям открывать новые культуры, страны и
              удивительные места
            </p>
            <div className={scss.images}>
              <img
                src="https://ru.kabar.kg/media/images/623d61bb7072e461745.2e16d0ba.format-webp.fill-1668x1014.webp"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3365-6533-4330-b233-383864323239/noroot.png"
                alt=""
              />
              <img
                src="https://media.vand.ru/tourcategory/ib17504234437855.webp"
                alt=""
              />
            </div>
          </div>
          <motion.div
            className={scss.recommend}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={scss.recommendText}>
              <h2> Что мы предлагаем:</h2>
              <p>Туры по: </p>
              <p>• Кыргызстану</p>
              <p>• Групповые путешествия</p>
              <p>• Индивидуальные туры</p>
              <p>• Бронирование отелей</p>
              <p>• Трансфер и транспортные услуги</p>
              <p>• Экскурсионные программы</p>
            </div>
            <img
              src="https://nazarnews.org/media/news_images/2023/07/24/News_129630498777942478886343591760531257398.jpg"
              alt=""
            />
          </motion.div>
          <motion.div
            className={scss.plus}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Почему выбирают нас</h2>
            <p>✔ Опытная команда специалистов</p>
            <p>✔ Индивидуальный подход к каждому клиенту </p>
            <p>✔ Надежные партнеры и проверенные маршруты</p>
            <p>✔ Конкурентные цены</p>
            <p>✔ Поддержка клиентов на всех этапах путешествия</p>
          </motion.div>
          <motion.div
            className={scss.statistics}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Статистика</h2>
            <div className={scss.list}>
              <div className={scss.card}>
                <span>
                  <IoPeople />
                </span>
                <p>5000+ довольных клиентов</p>
              </div>
              <div className={scss.card}>
                <span>
                  <LiaMapMarkedAltSolid />
                </span>
                <p>200+ туристических маршрутов</p>
              </div>
              <div className={scss.card}>
                <span>
                  <TbStarsFilled />
                </span>
                <p>10+ лет опыта</p>
              </div>
              <div className={scss.card}>
                <span>
                  <IoLocationOutline />
                </span>
                <p> 7 областей Кыргызстана</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className={scss.team}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Наша команда</h2>
            <div className={scss.list}>
              <div className={scss.card}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOgfDMZUNUFrmelM5jVoQarAr6d1gVgQxaA&s"
                  alt=""
                />
                <p>
                  Азамат Токтогулов <br /> Директор компании <br /> Более 10 лет
                  опыта в туристической сфере
                </p>
              </div>
              <div className={scss.card}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOgfDMZUNUFrmelM5jVoQarAr6d1gVgQxaA&s"
                  alt=""
                />
                <p>
                  Айгерим Мамбетова <br /> Менеджер по туризму
                  <br /> Помогает клиентам подобрать лучшие маршруты
                </p>
              </div>
              <div className={scss.card}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOgfDMZUNUFrmelM5jVoQarAr6d1gVgQxaA&s"
                  alt=""
                />
                <p>
                  Нурбек Абдылдаев <br /> Специалист по бронированию <br />{" "}
                  Занимается бронированием гостиниц, билетов.
                </p>
              </div>
            </div>
          </motion.div>
          <h2> Место начала тура: Площадь Ала-Тоо</h2>
          <MapContainer
            center={[42.8771, 74.6066]}
            zoom={16}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={[42.8771, 74.6066]}>
              <Popup>Площадь Ала-Тоо</Popup>
            </Marker>
          </MapContainer>
          <h2>Какие места вы увидите: </h2>
          <div className={scss.places}>
            <p> Озеро Иссык-Куль</p>
            <p>Орто-Токой</p>
            <p> Перевал Кубакы (2160 м)</p>
            <p> Каньон Сказка</p>
            <p> Ущелья Джети-Огуз</p>
            <p> Водо пад Чаша Манаса</p>
            <p> Водопад Брызги</p>
            <p> Перевал Барскоон (3750 м)</p>
            <p> Плато Арабель (3900 м)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
