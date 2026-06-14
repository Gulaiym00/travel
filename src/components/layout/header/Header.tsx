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
            <h2 onClick={() => push(`/`)} >TravelKG</h2>
          </div>
          <nav>
            <Link href={"/region"}>Областы</Link>
            <Link href={"/tours"}>Туры</Link>
            <Link href={"/about"}>О нас</Link>
            <Link href={"/favorite"}>Избранные</Link>
          </nav>
          <Link href={"/admin"}>
            <span>
              <FaUser />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
