import scss from "./bookingCard.module.scss";
import { FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";
import { useBookingTours } from "@/hooks/tours/useBookingTour";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

interface IBokingCardProps {
  price: string;
}

type FeedbackForm = {
  name: string;
  email: string;
  number: string;
  date: string;
  count: number;
  totalPrice: number;
};

const BOT_TOKEN = "8873304993:AAHu2AhNJiRghfW_vDiSmr-xR8GyAOrIrLo";
const CHAT_ID = "7218795915";

const BookingCard = ({ price }: IBokingCardProps) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const dateInputRef = React.useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(1);
  const incrementCount = () => setCount((prev) => Math.min(prev + 1, 15));
  const decrementCount = () => setCount((prev) => Math.max(prev - 1, 1));
  const totalPrice = useBookingTours((state) => {
    const lastBooking = state.information[state.information.length - 1];
    return lastBooking?.totalPrice || 0;
  });
  const handleCustomDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawDate = e.target.value;

    if (!rawDate) return;

    const formattedDate = new Date(rawDate).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
    });

    setSelectedDate(formattedDate);

    setForm((prev) => ({
      ...prev,
      date: formattedDate,
    }));
  };
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      count,
    }));
  }, [count]);
  const calculatedTotalPrice = count * Number(price);
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      totalPrice: calculatedTotalPrice,
    }));
  }, [calculatedTotalPrice]);
  const [form, setForm] = useState<FeedbackForm>({
    name: "",
    email: "",
    number: "",
    date: "",
    count: count,
    totalPrice: calculatedTotalPrice,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  function handleChange(field: keyof FeedbackForm, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function validateForm(): string | null {
    if (!form.name.trim()) {
      return "Введите имя";
    }

    if (!form.email.trim()) {
      return "Введите email";
    }

    if (!form.number.trim()) {
      return "Введите номер телефона";
    }

    return null;
  }

  function createTelegramMessage(): string {
    return `
Имя: ${form.name}
Email: ${form.email}
Телефон: ${form.number}
Дата: ${form.date}
Количество: ${form.count}
Общаяя сумма:${form.totalPrice}
`.trim();
  }

  async function sendToTelegram() {
    const text = createTelegramMessage();

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok || !data.ok) {
      throw new Error(data.description || "Ошибка при отправке в Telegram");
    }

    return data;
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("");

    const error = validateForm();

    if (error) {
      setStatus(error);
      return;
    }

    try {
      setLoading(true);

      await sendToTelegram();

      setStatus("Сообщение отправлено");

      setForm({
        name: "",
        email: "",
        number: "",
        date: "",
        count: 1,
        totalPrice: totalPrice,
      });
    } catch (error) {
      console.error(error);
      setStatus("Ошибка при отправке");
    } finally {
      setLoading(false);
    }
  }

  ////////////////////////////////////////////////////////
  const router = useRouter();
  // const [name, setName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [number, setNumber] = useState<string>("");

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
            value={form.date}
            onClick={() => {
              setSelectedDate("Завтра, 5 июня");

              setForm((prev) => ({
                ...prev,
                date: "Завтра, 5 июня",
              }));
            }}
          >
            <span>Завтра</span>
            <small>5 июня</small>
          </button>

          <button
            className={scss.date}
            value={form.date}
            onClick={() => {
              setSelectedDate("Суббота, 6 июня");

              setForm((prev) => ({
                ...prev,
                date: "Суббота, 6 июня",
              }));
            }}
          >
            <span>Послезавтра</span>
            <small>6 июня</small>
          </button>

          <button
            className={scss.date}
            value={form.date}
            onClick={() => {
              setSelectedDate("Воскресенье, 7 июня");

              setForm((prev) => ({
                ...prev,
                date: "Воскресенье, 7 июня",
              }));
            }}
          >
            <span>Воскресенье</span>
            <small>7 июня</small>
          </button>

          <button
            value={form.date}
            className={`${scss.date} ${scss.calendarDate} ${selectedDate && !["Послезавтра, 6 июня", "Воскресенье, 7 июня"].includes(selectedDate) ? scss.active : ""}`}
            onClick={() => dateInputRef.current?.showPicker()}
          >
            <FiCalendar />
            <span>Выбрать дату</span>
            <input
              ref={dateInputRef}
              type="date"
              value={form.date}
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
            onSubmit={handleSubmit}
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
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
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
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
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
                value={form.number}
                onChange={(e) => handleChange("number", e.target.value)}
              />
            </motion.div>

            <button
              onClick={() => {
                // {
                //   alert(
                //     "Пожалуйста, заполните все поля, выберите дату и количество перед оплатой!",
                //   );
                //   return;
                // }

                router.push("/payment");
              }}
              type="submit"
              className={scss.submit}
              disabled={loading}
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
