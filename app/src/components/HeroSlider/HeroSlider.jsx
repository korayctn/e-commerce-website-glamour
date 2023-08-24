import "./HeroSlider.scss";
import React, { useState, useEffect } from "react";
import heroImg from "../../../public/img/hero.jpg";
import heroImg2 from "../../../public/img/hero2.jpg";
import heroImg3 from "../../../public/img/hero3.jpg";

const images = [heroImg2, heroImg3, heroImg];

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="containerHero">
      <div className="hero-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="heroSectionTextContainer">
        <h2>Center of beauty</h2>
        <button>Shop Now</button>
      </div>
    </div>
  );
};
