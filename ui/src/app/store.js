import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux/productSlice";
import cartSlice from "../redux/cartSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    carts: cartSlice,
  },
});
