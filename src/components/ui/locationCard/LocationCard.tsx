import { places } from "@/utils/places";
import scss from "./locationCard.module.scss";
import { motion } from "framer-motion";

const LocationCard = () => {
  return (
    <motion.section
      className={scss.startLocation}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <h2 className={scss.title}>Место начала</h2>

      <p className={scss.address}>
        <span>Адрес: Площадь Ала-Тоо. 51 ул. Раззакова, Бишкек</span>
      </p>

      <div className={scss.mapWrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14112.135016666572!2d74.5997449726918!3d42.867232731311454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dcbdacf87b%3A0xfc7d686ab988f348!2z0J_Qu9C-0YnQsNC00Ywg0JDQu9CwLdCi0L7Qvi4!5e0!3m2!1sru!2skg!4v1781083376578!5m2!1sru!2skg"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>

      <motion.div
        className={scss.places}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <h3>
          Какие места вы увидите <span>📍</span>
        </h3>

        <ul>
          {places.map((item) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default LocationCard;
