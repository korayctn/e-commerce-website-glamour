import React from "react";
import "./CheckoutPage.scss";
import { Link } from "react-router-dom";
let user = {
  name: "Koray",
  surname: "Çetin",
};
export const CheckoutPage = () => {
  return (
    <div className="checkoutContainer">
      {user ? (
        <div className="notifyContainer">
          <h2>It seems you didn't sign in.</h2>
          <Link to="/login">
            <button>Click and login</button>
          </Link>
        </div>
      ) : (
        <div>Products</div>
      )}
    </div>
  );
};
