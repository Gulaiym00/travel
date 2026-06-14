"use client";
import FavoriteCard from "@/components/ui/favoriteCard/FavoriteCard";
import scss from "./favorite.module.scss";
import { useLikesTours } from "@/hooks/tours/useLikesTours";
import { motion } from "framer-motion";

const Favorite = () => {
  const { tours } = useLikesTours();
  return (
    <section id={scss.toursFavorite}>
      <div className="container">
        <div className={scss.toursFavorite}>
          <h2>Избранные туры:</h2>
          <motion.div
            className={scss.listtoursFavorite}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            {tours.map((item) => (
              <FavoriteCard tour={item} key={item._id} />
            ))}
          </motion.div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Favorite;
