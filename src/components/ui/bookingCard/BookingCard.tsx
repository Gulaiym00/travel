import { Products } from "@/hooks/type/type";
import scss from "./bookingCard.module.scss";
import { FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";

interface IBokingCardProps {
  price: string;
}

const BookingCard = ({ price }: IBokingCardProps) => {
  return (
    <section className={scss.booking}>
      <motion.h2
        className={scss.title}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Забронировать экскурсию
      </motion.h2>

      <motion.div
        className={scss.cardBooking}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <p>Выберите дату и время</p>

        <motion.div
          className={scss.dates}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <button className={scss.date}>
            <span>Завтра</span>
            <small>5 июня</small>
          </button>

          <button className={scss.date}>
            <span>Послезавтра</span>
            <small>6 июня</small>
          </button>

          <button className={scss.date}>
            <span>Воскресенье</span>
            <small>7 июня</small>
          </button>

          <button className={`${scss.date} ${scss.calendarDate}`}>
            <FiCalendar />
            <span>Выбрать дату</span>
          </button>
        </motion.div>

        <motion.div
          className={scss.counterPerson}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p>Укажите количество участников</p>

          <div className={scss.line} />

          <div className={scss.counterRow}>
            <span>Билет 12+</span>

            <div className={scss.counterBtn}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
          <div className={scss.priceBox}>От 1 до 4 человек · {price} KGS</div>

          <div className={scss.total}>
            Итого: <strong>{price} KGS</strong>
          </div>

          <div className={scss.line} />
        </motion.div>

        <center>
          <motion.form
            className={scss.formPay}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className={scss.field}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <label>Имя</label>
              <input type="text" />
            </motion.div>

            <motion.div
              className={scss.field}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <label>E-mail</label>
              <input type="email" placeholder="example@email.com" />
            </motion.div>

            <motion.div
              className={scss.field}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <label>Введите номер телефона</label>
              <input type="tel" placeholder="+(996)" />
            </motion.div>

            <button type="submit" className={scss.submit}>
              Начать бронирование
            </button>
          </motion.form>
        </center>
      </motion.div>
    </section>
  );
};

export default BookingCard;
