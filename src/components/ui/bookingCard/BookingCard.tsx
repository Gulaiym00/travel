import scss from "./bookingCard.module.scss";
import { FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";
import { useBookingTours } from "@/hooks/tours/useBookingTour";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface IBokingCardProps {
  price: string;
}

const BookingCard = ({ price }: IBokingCardProps) => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const dateInputRef = React.useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(1);
  const incrementCount = () => setCount((prev) => Math.min(prev + 1, 15));
  const decrementCount = () => setCount((prev) => Math.max(prev - 1, 1));
  const handleCustomDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawDate = e.target.value;
    if (!rawDate) return;

    const formattedDate = new Date(rawDate).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
    });

    setSelectedDate(formattedDate);
  };
  const { addToInformation } = useBookingTours();

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
          <button
            className={scss.date}
            onClick={() => setSelectedDate("Завтра, 5 июня")}
          >
            <span>Завтра</span>
            <small>5 июня</small>
          </button>

          <button
            className={scss.date}
            onClick={() => setSelectedDate("Послезавтра, 6 июня")}
          >
            <span>Послезавтра</span>
            <small>6 июня</small>
          </button>

          <button
            className={scss.date}
            onClick={() => setSelectedDate("Воскресенье, 7 июня")}
          >
            <span>Воскресенье</span>
            <small>7 июня</small>
          </button>

          <button
            className={`${scss.date} ${scss.calendarDate} ${selectedDate && !["Послезавтра, 6 июня", "Воскресенье, 7 июня"].includes(selectedDate) ? scss.active : ""}`}
            onClick={() => dateInputRef.current?.showPicker()}
          >
            <FiCalendar />
            <span>Выбрать дату</span>
            <input
              ref={dateInputRef}
              type="date"
              onChange={handleCustomDateChange}
              style={{
                position: "absolute",
                opacity: 0,
                width: 0,
                height: 0,
                pointerEvents: "none",
              }}
            />
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
              <button onClick={decrementCount} disabled={count <= 1}>
                -
              </button>
              <span>{count}</span>
              <button onClick={incrementCount} disabled={count < 0}>
                +
              </button>
            </div>
          </div>
          <div className={scss.priceBox}>За одного человека {price} KGS</div>

          <div className={scss.total}>
            Итого: <strong>{count * Number(price)} KGS</strong>
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
              <input
                type="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </motion.div>

            <motion.div
              className={scss.field}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <label>E-mail</label>
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>

            <motion.div
              className={scss.field}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <label>Введите номер телефона</label>
              <input
                type="number"
                placeholder="+(996)"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </motion.div>

            <button
              onClick={() => {
                if (
                  !name.trim() ||
                  !email.trim() ||
                  !number.trim() ||
                  !selectedDate ||
                  count <= 0
                ) {
                  alert(
                    "Пожалуйста, заполните все поля, выберите дату и количество перед оплатой!",
                  );
                  return;
                }
                addToInformation({
                  name,
                  email,
                  number,
                  date: selectedDate,
                  count,
                  totalPrice: count * Number(price),
                });
                router.push("/payment");
              }}
              type="button"
              className={scss.submit}
            >
              Начать бронирование
            </button>
          </motion.form>
        </center>
      </motion.div>
    </section>
  );
};

export default BookingCard;
