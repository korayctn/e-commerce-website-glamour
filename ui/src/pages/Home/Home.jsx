import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import "./Home.scss";
import heroImg from "../../../public/img/hero.jpg";
import data from "../../../public/data";
import { ItemCard } from "../../components/ItemCard/ItemCard.jsx";
import { Loading } from "../../components/Loading/Loading";

export const Home = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(false);
  }, []);

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
      <div className="trustedBy">
        <div className="trustedByContainer"></div>
      </div>
      <div className="cards">
        <h3>HOT OFFERINGS</h3>
        <div className="cardsContainer">
          {data.map((item, index) => {
            return (
              item.discount && (
                <ItemCard
                  key={index}
                  id={item.id}
                  title={item.title}
                  discount={item.discount}
                  img={item.img}
                  price={item.price}
                />
              )
            );
          })}
        </div>
      </div>
    </>
  );
};
