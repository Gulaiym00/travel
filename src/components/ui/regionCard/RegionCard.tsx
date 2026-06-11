import React from "react";
import scss from "./regionCard.module.scss";
interface IProps {
  img: string;
  title: string;
  place: string;
}
const RegionCard = ({ img, title, place }: IProps) => {
  return (
    <div className={scss.card}>
      <img src={img} alt="" />
      <div className={scss.text}>
        <h3>{place}</h3>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default RegionCard;
