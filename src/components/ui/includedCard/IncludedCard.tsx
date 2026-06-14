import { Products } from "@/hooks/type/type";
import scss from "./IncludedCard.module.scss";
import { motion } from "framer-motion";

interface IncludedCardProps {
  types: string;
  duration: string;
  people: string;
}

const IncludedCard = ({ duration, people, types }: IncludedCardProps) => {
  return (
    <section className={scss.tourInfo}>
      <motion.div
        className={scss.top}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className={scss.item}>🚗 {types}, автомобильно-пешеходная</div>

        <div className={scss.item}>📱 Билет в телефоне</div>

        <div className={scss.item}>🕒 {duration}</div>

        <div className={scss.item}>🌐 Русский/Английский язык</div>

        <div className={scss.item}>👥 Размер группы до {people}человек</div>

        <div className={scss.item}>👶 Можно с детьми</div>
      </motion.div>

      <div className={scss.bottom}>
        <motion.div
          className={scss.column}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h3>Что включено</h3>

          <ul className={scss.included}>
            <li>Услуги гида</li>
            <li>Транспорт</li>
            <li>Проживание в отелях (завтрак)</li>
          </ul>
        </motion.div>

        <motion.div
          className={scss.column}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h3>Что не включено</h3>

          <ul className={scss.excluded}>
            <li>Питание (обеды, ужины, перекусы)</li>
            <li>Личные расходы</li>
            <li>Входные билеты</li>
            <li>Дополнительные активности</li>
            <li>Сувениры</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default IncludedCard;
