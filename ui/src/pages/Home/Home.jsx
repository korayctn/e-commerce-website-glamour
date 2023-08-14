import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import "./Home.scss";
import heroImg from "../../../public/img/hero.jpg";
import heroImg2 from "../../../public/img/hero2.jpg";
import heroImg3 from "../../../public/img/hero3.jpg";
import data from "../../../public/data";
import { ItemCard } from "../../components/ItemCard/ItemCard.jsx";
import { Loading } from "../../components/Loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import { getJewelryProducts, getOneProduct } from "../../redux/productSlice";

export const Home = () => {
  const [loading, setloading] = useState(true);
  const heroImageArr = [heroImg, heroImg2, heroImg3];
  console.log(heroImageArr);
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getJewelryProducts());
  }, [dispatch]);

  console.log(products);
  return (
    <>
      <div className="heroSection">
        <div className="heroSectionContainer">
          <img src={heroImageArr[0]} alt="heroimg" className="heroImg" />
          <div className="heroSectionTextContainer">
            <h2>Center of beauty</h2>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className="trustedBy">
        <div className="trustedByContainer">
          <h4>Trusted by </h4>
          <img
            src="https://www.pngmart.com/files/22/Hugo-Boss-Logo-PNG-Photos.png"
            alt="hugoboss"
          />
          <img
            src="https://www.logo.wine//logo/Bulgari/Bulgari-Logo.wine.svg"
            alt="bvlgari"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/167/092/original/gucci-free-download-free-png.png"
            alt="gucci"
          />
          <img
            src="https://1000logos.net/wp-content/uploads/2021/06/Tiffany-Co-logo.png"
            alt="tiffancyancco"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cartier_logo.svg/1200px-Cartier_logo.svg.png"
            alt="cartier"
          />
        </div>
      </div>
      <div className="cards">
        <h3>HOT OFFERINGS</h3>
        <div className="cardsContainer">
          {productsStatus == "LOADING" ? (
            <Loading />
          ) : (
            products?.slice(0, 3).map((item, index) => {
              return (
                <ItemCard
                  key={index}
                  id={item.id}
                  title={item.title}
                  discount={true}
                  img={item.images[0]}
                  price={item.price}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
