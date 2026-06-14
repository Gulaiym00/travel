"use client";
import scss from "./toursCard.module.scss";
import { GiPriceTag } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa6";
import { useGetProduct } from "@/hooks/admin/useGetProduct";
import Link from "next/link";
import { useLikesTours } from "@/hooks/tours/useLikesTours";
import { LuArrowRight } from "react-icons/lu";
import { motion } from "framer-motion";

const ToursCard = () => {
  const { data } = useGetProduct();
  const { addToTour } = useLikesTours();

  return (
    <motion.div
      className={scss.listCardTours}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      {data?.map((item) => (
        <motion.div
          key={item._id}
          className={scss.toursCard}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <FaRegHeart onClick={() => addToTour(item)} className={scss.like} />
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
      ))}
    </motion.div>
  );
};

export default ToursCard;
