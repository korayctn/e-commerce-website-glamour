/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./ItemCard.scss";
import { Link } from "react-router-dom";
import { CiDiscount1 } from "react-icons/ci";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

export const ItemCard = ({
  brand,
  title,
  thumbnail,
  discount,
  img,
  price,
  cat,
  id,
}) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      addToCart({ id, brand, title, price, thumbnail: img, quantity: 1 })
    );
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const firstPrice = price * 1.2;
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div className="itemCard">
      <img src={img} alt="itemImg" />
      <div className="itemTextContainer">
        <h3>{title}</h3>

        <div className="priceContainer">
          <s>
            <h4 className="firstPrice">{firstPrice}$</h4>
          </s>
          <h4>{price}$</h4>
        </div>
      </div>
      <div className="buttonsContain">
        <Link to={"/products/" + id}>
          <button className="cardButton">See details</button>
        </Link>
        <button className="cardButton" onClick={handleClick}>
          Add to card
        </button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Item was added to shopping card."
          action={action}
        />
      </div>

      <div className="discountContainer">
        <CiDiscount1 color="darkred" size={50} />
      </div>
    </div>
  );
};
