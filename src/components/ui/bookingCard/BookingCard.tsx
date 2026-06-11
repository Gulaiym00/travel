import scss from "./bookingCard.module.scss";
import { FiCalendar } from "react-icons/fi";

const BookingCard = () => {
  return (
    <section className={scss.booking}>
      <h2 className={scss.title}>Забронировать экскурсию</h2>

      <div className={scss.cardBooking}>
        <p>Выберите дату и время</p>

        <div className={scss.dates}>
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
        </div>

        <div className={scss.counterPerson}>
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
          <div className={scss.priceBox}>От 1 до 4 человек · 40.000 KGS</div>

          <div className={scss.total}>
            Итого: <strong>40.000 KGS</strong>
          </div>

          <div className={scss.line} />
        </div>

        <center>
          <form className={scss.formPay}>
            <div className={scss.field}>
              <label>Имя</label>
              <input type="text" />
            </div>

            <div className={scss.field}>
              <label>E-mail</label>
              <input type="email" placeholder="example@email.com" />
            </div>

            <div className={scss.field}>
              <label>Введите номер телефона</label>
              <input type="tel" placeholder="+(996)" />
            </div>

            <button type="submit" className={scss.submit}>
              Начать бронирование
            </button>
          </form>
        </center>
      </div>
    </section>
  );
};

export default BookingCard;
