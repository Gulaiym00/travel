"use client";
import { useBookingTours } from "@/hooks/tours/useBookingTour";
import scss from "./payment.module.scss";
import { useState, ChangeEvent, useEffect } from "react";
import { log } from "console";

const Payment = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    const sliceNum = onlyDigits.slice(0, 16);
    const dash = sliceNum.match(/.{1,4}/g);
    const formatValue = dash ? dash.join(" - ") : "";
    setCardNumber(formatValue);
  };

  const handleCvvChange = (e: ChangeEvent<HTMLInputElement>) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    const slised = onlyDigits.slice(0, 3);
    setCvv(slised);
  };

  const totalPrice = useBookingTours(
  (state) => state.information[state.information.length - 1]?.totalPrice || 0
);
  return (
    <section className={scss.payment}>
      <div className={scss.container}>
        <h2>Оплатить счет</h2>

        <div className={scss.card}>
          <div className={scss.methods}>
            <span>Pay</span>
            <span>Pay</span>
            <span>VISA</span>
          </div>

          <p className={scss.amount}>Сумма платежа</p>
          <h3>{totalPrice} KGS</h3>

          <div className={scss.inputGroup}>
            <label>Номер Card</label>
            <input
              id="card-number"
              value={cardNumber}
              type="text"
              placeholder="Введите номер карты"
              onChange={handleCardNumberChange}
            />
          </div>

          <div className={scss.inputGroup}>
            <label>Код карты</label>
            <input
              type="text"
              placeholder="cvv"
              value={cvv}
              id="cvv"
              onChange={handleCvvChange}
            />
          </div>

          <button
            type="button"
            onClick={() => {
              if (!cardNumber.trim() || !cvv.trim()) {
                alert(
                  "Пожалуйста, заполните номер карты и код CVV перед оплатой!",
                );
                return;
              }
              setIsSuccess(true);
            }}
          >
            Заплатить
          </button>
        </div>
      </div>
      {isSuccess && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          >
            <h2 style={{ color: "#2ecc71", marginBottom: "10px" }}>
              ✓ Успешно!
            </h2>
            <p style={{ marginBottom: "20px" }}>Ваш платёж успешно принят.</p>
            <button
              onClick={() => setIsSuccess(false)}
              style={{ padding: "8px 20px", cursor: "pointer" }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Payment;
