import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./ShoppingCart.scss";
import { useDispatch } from "react-redux";
import { getCartTotal, removeFromCart } from "../../redux/cartSlice";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { addOne, deleteOne } from "../../redux/cartSlice";
export const ShoppingCart = () => {
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);
  const handleRemoveClick = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <div className="mainContainer">
      {itemCount == 0 ? (
        <div className="noItemContainer">
          There is no product in your basket. Start shopping
          <Link to="/">
            <button>Back to home</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="productTitle">
            <h1>PRODUCTS</h1>
          </div>
          <div className="mainPartContainer">
            <div className="shoppingCartContainer">
              {carts.map((item, index) => {
                console.log(item);
                return (
                  <div className="cartItem" key={index}>
                    <DeleteIcon
                      className="removeCard"
                      onClick={() => {
                        handleRemoveClick(item);
                      }}
                    />
                    <h1>
                      <span className="cartBrand">{item.brand}</span>{" "}
                      <span className="cartTitle">{item.title}</span>
                      <span> x {item.quantity}</span>
                    </h1>
                    <div className="middleContainer">
                      <img src={item.thumbnail} alt="" />
                      <div>
                        <h4 className="itemPrice">Price: {item.price}$</h4>
                        <h5 className="totalPrice">
                          Total Price : {item.totalPrice}$
                        </h5>
                        <div className="addDecrease">
                          <span
                            onClick={() => {
                              dispatch(deleteOne(item));
                            }}
                            className="icon delete"
                          >
                            -
                          </span>
                          <span>{item.quantity}</span>
                          <span
                            onClick={() => {
                              dispatch(addOne(item));
                            }}
                            className="icon add"
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="totalPriceContainer">
              <div>
                <h1>Details</h1>
                <h2>
                  Total Pieces :{" "}
                  {carts.reduce((acc, item) => {
                    acc += item.quantity;
                    return acc;
                  }, 0)}
                </h2>
                {totalAmount >= 100 ? (
                  <Tooltip title="Free shipping over $100" placement="right">
                    <h2>Shipping : Free </h2>
                  </Tooltip>
                ) : (
                  <Tooltip
                    title="Reach $100 for free shipping."
                    placement="right"
                  >
                    <h2>Shipping : {totalAmount / itemCount}</h2>
                  </Tooltip>
                )}
                <h2>Total Amount : {totalAmount}$</h2>
              </div>
              <Link to="/checkout">
                <button>Continue</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
