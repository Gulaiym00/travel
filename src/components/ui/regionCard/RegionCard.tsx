"use client"
import React from "react";
import scss from "./regionCard.module.scss";
import { useRouter } from "next/navigation";
interface IProps {
  img: string;
  title: string;
  place: string;
}
const RegionCard = ({ img, title, place }: IProps) => {
  const { push } = useRouter();
  return (
    <div onClick={()=> push("/region")} className={scss.card}>
      <img src={img} alt="" />
      <div className={scss.text}>
        <h3>{place}</h3>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default RegionCard;
