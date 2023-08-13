import React from "react";
import "./ItemDetail.scss";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export const ItemDetail = ({
  category,
  description,
  price,
  rating,
  title,
  images,
  brand,
  thumbnail,
}) => {
  return (
    <div className="itemDetailContainer">
      <div className="details">
        <img src={thumbnail} className="thumbnail" alt="" />
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
          </div>

          <h4>{price}$</h4>
        </div>
      </div>

      <div>
        {images?.map((image, index) => {
          return <img className="images" src={image} key={index} alt="" />;
        })}
      </div>
    </div>
  );
};
