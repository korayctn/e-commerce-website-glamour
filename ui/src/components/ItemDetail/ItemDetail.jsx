import React from "react";
import "./ItemDetail.scss";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../../redux/cartSlice";

export const ItemDetail = ({
  category,
  description,
  price,
  rating,
  title,
  images,
  brand,
  thumbnail,
  id,
}) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickSnack = () => {
    quantity > 0 && setOpen(true);
    dispatch(addToCart({ id, brand, title, price, thumbnail, quantity }));
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const addthebasket = () => {};
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleCloseSnack}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnack}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const [thumb, setThumb] = useState();
  const [clicked, setClicked] = useState(false);
  const handleClick = (e) => {
    setThumb(e.target.src);
  };
  const dec = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const inc = () => {
    setQuantity(quantity + 1);
  };
  return (
    <>
      <div className="itemDetailContainer">
        <div className="details">
          {thumbnail && thumb == null ? (
            <img src={thumbnail} className="thumbnail" alt="" />
          ) : (
            <img src={thumb} className="thumbnail" alt="" />
          )}

          <div className="detailsText">
            <h2>
              <span className="brandName">{brand}</span> {title}
            </h2>
            <div className="ratingContainer">
              <Rating
                className="rating"
                name="read-only"
                precision={0.5}
                value={4.6}
                readOnly
              />
              <span className="ratingText">{rating}</span>
            </div>
            <h3 className="decriptionText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
              laborum provident illo ipsa aliquam inventore distinctio voluptas
              natus eos ratione. Distinctio illo ipsam tempora dolorum
              recusandae ratione quae, illum, necessitatibus labore eum
              voluptate, ipsum nemo sit accusantium quis earum. Vitae dolore
              culpa nulla laborum, dolores illo aut voluptatem! Dolor animi
              doloribus nostrum placeat, nisi, rem eos, sed iure consequatur
              similique porro! Error, fugiat rem tempora hic ab cupiditate
              repellendus dicta.
            </h3>
            <h4 className="priceText">{price}$</h4>
            <div className="numberContainer">
              <button onClick={dec} className="numberChanger">
                -
              </button>
              <span className="number">{quantity}</span>
              <button onClick={inc} className="numberChanger">
                +
              </button>
              <button className="buttonAdd" onClick={handleClickSnack}>
                Add card
              </button>
              <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleCloseSnack}
                message="Item was added to shopping card."
                action={action}
              />
            </div>
          </div>
        </div>

        <div className="imgContainer">
          {images?.map((image, index) => {
            return (
              <img
                onClick={handleClick}
                className={"images"}
                src={image}
                key={index}
                alt=""
              />
            );
          })}
        </div>
      </div>
      <div className="relatedItems">
        <h2>Related Items</h2>
      </div>
    </>
  );
};
