import React from "react";
import { useSelector } from "react-redux";

export const ShoppingCart = () => {
  const { carts } = useSelector((state) => state.carts);

  return (
    <div className="shoppingCartContainer">
      {carts.map((item) => {
        return <div className="cartItem"></div>;
      })}
    </div>
  );
};
