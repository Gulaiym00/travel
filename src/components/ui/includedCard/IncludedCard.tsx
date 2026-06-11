import scss from "./IncludedCard.module.scss";

const IncludedCard = () => {
  return (
    <section className={scss.tourInfo}>
      <div className={scss.top}>
        <div className={scss.item}>
          🚗 Индивидуальная, автомобильно-пешеходная
        </div>

        <div className={scss.item}>📱 Билет в телефоне</div>

        <div className={scss.item}>🕒 2 дня, 1 ночь</div>

        <div className={scss.item}>🌐 Русский/Английский язык</div>

        <div className={scss.item}>👥 Размер группы до 4 человек</div>

        <div className={scss.item}>👶 Можно с детьми</div>
      </div>

      <div className={scss.bottom}>
        <div className={scss.column}>
          <h3>Что включено</h3>

          <ul className={scss.included}>
            <li>Услуги гида</li>
            <li>Транспорт</li>
            <li>Проживание в отелях (завтрак)</li>
          </ul>
        </div>

        <div className={scss.column}>
          <h3>Что не включено</h3>

          <ul className={scss.excluded}>
            <li>Питание (обеды, ужины, перекусы)</li>
            <li>Личные расходы</li>
            <li>Входные билеты</li>
            <li>Дополнительные активности</li>
            <li>Сувениры</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IncludedCard;
