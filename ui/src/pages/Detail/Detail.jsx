import React, { useEffect } from "react";
import "./Detail.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../redux/productSlice";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

export const Detail = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  let { id } = useParams();

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch]);
  return (
    <div className="detailContainer">
      <ItemDetail {...product} />
    </div>
  );
};
