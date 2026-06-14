"use client";
import scss from "./detail.module.scss";
import IncludedCard from "@/components/ui/includedCard/IncludedCard";
import BookingCard from "@/components/ui/bookingCard/BookingCard";
import LocationCard from "@/components/ui/locationCard/LocationCard";
import { useParams } from "next/navigation";
import { useDetailTour } from "@/hooks/tours/useDetailTour";
import { motion } from "framer-motion";

const Detail = () => {
  const params = useParams();
  const id = params.id as string;
  const { data: tour, isLoading } = useDetailTour(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section id={scss.detail}>
      <div className="container">
        <div className={scss.detail}>
          <motion.div
            className={scss.photoTours}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <p>Кыргызстан • Бишкек</p>
            <img src={tour?.image} alt={tour?.title} />
            <p>Кыргызстан/Средняя Азия/За городом и природа/Тур</p>
          </motion.div>
          <motion.div
            className={scss.discription}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h4>{tour?.title}</h4>
            <p>{tour?.description}</p>
          </motion.div>
          <IncludedCard
            types={tour?.types}
            duration={tour?.duration}
            people={tour?.people}
          />
          <motion.div
            className={scss.moreDetails}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h5>Подробнее об экскурсии</h5>
            <h4>{tour?.link}</h4>
            <p>{tour?.details}</p>
          </motion.div>
          <section className={scss.bookingSection}>
            <BookingCard price={tour?.price} />
          </section>
          <LocationCard />
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Detail;
