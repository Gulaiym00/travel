"use client";

import React from "react";
import scss from "./header.module.scss";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Header = () => {
  const { push } = useRouter();
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.logo}>
            <img onClick={() => push(`/`)} src="/travelLogo.png" alt="logo" />
            <h2>TravelKG</h2>
          </div>
          <nav>
            <Link href={"/"}>Областы</Link>
            <Link href={"/"}>Туры</Link>
            <Link href={"/about"}>О нас</Link>
            <Link href={"/"}>Избранные</Link>
          </nav>
          <span>
            <FaUser />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
