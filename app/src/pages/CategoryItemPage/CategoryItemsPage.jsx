import React, { useEffect } from "react";
import "./CategoryPage.scss";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getAllProducts,
  searchProduct,
} from "../../redux/productSlice";
import { ItemCard } from "../../components/ItemCard/ItemCard";

export const CategoryItemsPage = () => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();

  useEffect(() => {
    if (query.get("cat")) {
      dispatch(getProducts(query.get("cat")));
    } else if (query.get("search")) {
      dispatch(searchProduct(query.get("search")));
    }
  }, [dispatch, products]);
  return (
    <div className="categoryFullContainer">
      <h2>PRODUCTS</h2>

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
    </div>
  );
};
