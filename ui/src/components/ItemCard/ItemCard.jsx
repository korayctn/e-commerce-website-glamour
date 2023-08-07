import React from "react";
import "./ItemCard.scss";

import { CiDiscount1 } from "react-icons/ci";

export const ItemCard = ({ title, discount, img, price }) => {
  const firstPrice = price * 1.2;
  return (
    <div className="itemCard">
      <img src={img} alt="itemImg" />
      <div className="itemTextContainer">
        <h3>{title}</h3>
        <h4>{discount}</h4>
        <div className="priceContainer">
          <s>
            <h4 className="firstPrice">{firstPrice}$</h4>
          </s>
          <h4>{price}$</h4>
        </div>

        <button>Add To Card</button>
      </div>
      <div className="discountContainer">
        <CiDiscount1 color="darkred" size={50} />
      </div>
    </div>
  );
};
