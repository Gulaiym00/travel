"use client";

import React, { useState } from "react";
import scss from "./reviews.module.scss";
import { motion } from "framer-motion";
import { useAddComment } from "@/hooks/useAddComment";
import { useGetComments } from "@/hooks/useGetComments";

const Reviews = () => {
  const { mutate: addComment, isPending } = useAddComment();
  const { data: comments } = useGetComments();

  const [state, setState] = useState({
    userName: "",
    comment: "",
    rating: 5,
  });

  const handleAdd = () => {
    addComment(state);

    setState({
      userName: "",
      comment: "",
      rating: 5,
    });
  };

  return (
    <div className={scss.container}>
      <div className="container">
        <motion.div
          className={scss.mainContainer}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2>Отзывы</h2>

          <div className={scss.list}>
            {comments?.map((el, idx) => (
              <div key={idx} className={scss.card}>
                <div className={scss.top}>
                  <div className={scss.star}>
                    {"★".repeat(el.rating)}
                    {"☆".repeat(5 - el.rating)}
                  </div>
                  <p>{el.userName}</p>
                </div>

                <p>{el.comment}</p>
              </div>
            ))}
          </div>

          <h2>Расскажите о своих впечатлениях от Кыргызстана</h2>

          <div className={scss.inputBtn}>
            <div className={scss.input}>
              <p>Имя</p>
              <input
                type="text"
                value={state.userName}
                onChange={(e) =>
                  setState({
                    ...state,
                    userName: e.target.value,
                  })
                }
              />
            </div>

            <div className={scss.input}>
              <p>Комментарий</p>
              <input
                type="text"
                value={state.comment}
                onChange={(e) =>
                  setState({
                    ...state,
                    comment: e.target.value,
                  })
                }
              />
            </div>

            <div className={scss.input}>
              <p>Оценка</p>

              <div className={scss.rating}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() =>
                      setState({
                        ...state,
                        rating: star,
                      })
                    }
                    style={{
                      cursor: "pointer",
                      fontSize: "30px",
                    }}
                  >
                    {star <= state.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
            </div>

            <button onClick={handleAdd} disabled={isPending}>
              {isPending ? "...Отправляется" : "Отправить"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
