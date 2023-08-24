import React, { useEffect } from "react";
import "./SearchPage.scss";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getAllProducts,
  searchProduct,
} from "../../redux/productSlice";
import { ItemCard } from "../../components/ItemCard/ItemCard";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();

  useEffect(() => {
    dispatch(searchProduct(query.get("search")));
  }, [dispatch, products]);
  return (
    <div className="categoryFullContainer">
      <div>
        <h2>PRODUCTS</h2>
      </div>
      {products ? (
        <>
          <div className="itemcardCont">
            {products?.map((item, index) => {
              return (
                <ItemCard
                  key={index}
                  id={item.id}
                  title={item.title}
                  discount={true}
                  img={item.images[0]}
                  price={item.price}
                  brand={item.brand}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          return(
          <h2>There is no items</h2>)
        </>
      )}
    </div>
  );
};
