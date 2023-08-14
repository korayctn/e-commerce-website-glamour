import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../../utils/status.js";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  product: {},
  productStatus: STATUS.IDLE,
};
export const getJewelryProducts = createAsyncThunk("getproducts", async () => {
  const { data } = await axios.get(
    "https://dummyjson.com/products/category/womens-jewellery"
  );

  return data.products;
});
export const getOneProduct = createAsyncThunk("getOneProduct", async (id) => {
  const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
  console.log(data);
  return data;
});
export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJewelryProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.productsStatus = STATUS.SUCCESS;
    });
    builder.addCase(getJewelryProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(getJewelryProducts.rejected, (state, action) => {
      state.productsStatus = STATUS.FAILED;
    });
    builder.addCase(getOneProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.productStatus = STATUS.SUCCESS;
    });
    builder.addCase(getOneProduct.pending, (state, action) => {
      state.productStatus = STATUS.LOADING;
    });
    builder.addCase(getOneProduct.rejected, (state, action) => {
      state.productStatus = STATUS.FAILED;
    });
  },
});

export default productSlice.reducer;
