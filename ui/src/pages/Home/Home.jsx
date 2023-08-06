import React from "react";
import { Header } from "../../components/Header/Header";
import "./Home.scss";
import heroImg from "../../../public/img/hero.jpg";

export const Home = () => {
  return (
    <>
      <div className="heroSection">
        <div className="heroSectionContainer">
          <img src={heroImg} alt="heroimg" className="heroImg" />
          <div className="heroSectionTextContainer">
            <h2>Center of beauty</h2>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
