"use client";
import { useLikesTours } from "@/hooks/tours/useLikesTours";
import scss from "./favoriteCard.module.scss";
import { FcLike } from "react-icons/fc";
import { GiPriceTag } from "react-icons/gi";
import Link from "next/link";
import { Products } from "@/hooks/type/type";
import { MdDeleteForever } from "react-icons/md";
import { LuArrowRight } from "react-icons/lu";
import { motion } from "framer-motion";

interface IFavoriteCardProps {
  tour: Products;
}

const FavoriteCard = ({ tour }: IFavoriteCardProps) => {
  const { removeTour } = useLikesTours();
  return (
    <div className={scss.listCardFavorite}>
      <motion.div
        className={scss.favoriteCard}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <FcLike className={scss.likes} />
        <img src={tour.image} alt={tour.title} />
        <div className={scss.cardTextFavorite}>
          <div className={scss.infoFavorite}>
            <h3>{tour.title}</h3>
            <h6>{tour.description}</h6>
          </div>
          <div className={scss.btns}>
            <div className={scss.price}>
              <GiPriceTag />
              <h3>Цена: {tour.price} KGS</h3>
            </div>
            <button
              className={scss.deleteFavorite}
              onClick={() => removeTour(tour._id)}
            >
              <MdDeleteForever />
            </button>
            <Link href={`/tours/${tour._id}`}>
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
    </div>
  );
};

export default FavoriteCard;
