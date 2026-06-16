"use client";
import scss from "./toursCard.module.scss";
import { GiPriceTag } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa6";
import { useGetProduct } from "@/hooks/admin/useGetProduct";
import Link from "next/link";
import { useLikesTours } from "@/hooks/tours/useLikesTours";
import { LuArrowRight } from "react-icons/lu";
import { motion } from "framer-motion";
import FavoriteCard from "../favoriteCard/FavoriteCard";
import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FaHeart } from "react-icons/fa";

const ToursCard = () => {
  const { data } = useGetProduct();
  const { addToTour } = useLikesTours();
  const [likedTourIds, setLikedTourIds] = useState<number[]>([]);
  return (
    <motion.div
      className={scss.listCardTours}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      {data?.map((item) => {
        const isCurrentLiked = likedTourIds.includes(item._id);
        return (
          <motion.div
            key={item._id}
            className={scss.toursCard}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            {isCurrentLiked ? (
              <FcLike
                onClick={() =>
                  setLikedTourIds(likedTourIds.filter((id) => id !== item._id))
                }
                className={`${scss.like} ${scss.likes}`}
              />
            ) : (
              <FaRegHeart
                onClick={() => {
                  addToTour(item);
                  setLikedTourIds([...likedTourIds, item._id]);
                }}
                className={scss.like}
              />
            )}
            
            <img src={item.image} alt={item.title} />
            <div className={scss.cardText}>
              <div className={scss.infoTours}>
                <h3>{item.title}</h3>
                <h6>{item.description}</h6>
              </div>
              <div className={scss.btns}>
                <div className={scss.price}>
                  <GiPriceTag />
                  <h3>Цена: {item.price} KGS</h3>
                </div>
                <Link href={`/tours/${item._id}`}>
                  <div className={scss.btn}>
                    <h3>Подробнее</h3>
                    <button>
                      <LuArrowRight />
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ToursCard;
