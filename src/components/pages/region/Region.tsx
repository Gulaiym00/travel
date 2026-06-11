"use client";
import scss from "./region.module.scss";
import { regions } from "@/utils/region";
import { motion } from "framer-motion";

const Region = () => {
  return (
    <div className={scss.region}>
      <div className="container">
        <div className={scss.mainRegion}>
          {regions.map((region) => (
            <motion.div
              key={region.title}
              className={scss.regionCard}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <div className={scss.regionTitle}>
                <h1>{region.title}</h1>
                <p>{region.description}</p>
              </div>
              <img src={region.image} alt={region.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Region;
