import React, { useEffect } from "react";
import "./Detail.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts, getOneProduct } from "../../redux/productSlice";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

import { ItemCard } from "../../components/ItemCard/ItemCard";
import { STATUS } from "../../../utils/status";
import { Loading } from "../../components/Loading/Loading";

export const Detail = () => {
  const dispatch = useDispatch();
  const { product, products, productStatus, productsStatus } = useSelector(
    (state) => state.products
  );
  let { id } = useParams();

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch, id]);

  return (
    <div className="detailContainer">
      {productStatus !== STATUS.LOADING ? (
        <ItemDetail {...product} />
      ) : (
        <Loading />
      )}
      <div className="relatedContainer">
        {productsStatus !== STATUS.LOADING ? (
          products?.slice(0, 5).map((prod, index) => {
            if (prod.id != id) {
              return <ItemCard {...prod} key={index} img={prod.thumbnail} />;
            }
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
