import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../../utils/status.js";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  product: {},
  productStatus: STATUS.IDLE,
};
export const getProducts = createAsyncThunk(
  "getproducts",
  async (category = null) => {
    const { data } = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    return data.products;
  }
);
export const searchProduct = createAsyncThunk(
  "searchproduct",
  async (search = null) => {
    const { data } = await axios.get(
      `https://dummyjson.com/products/search?q=${search}`
    );
    return data.products;
  }
);
export const getAllProducts = createAsyncThunk("getallproducts", async () => {
  const { data } = await axios.get(`https://dummyjson.com/products`);
  return data.products;
});
export const getOneProduct = createAsyncThunk("getOneProduct", async (id) => {
  const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
  return data;
});
export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.productsStatus = STATUS.SUCCESS;
    });
    builder.addCase(getProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.productsStatus = STATUS.FAILED;
    });
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.products = action.payload;
      state.productsStatus = STATUS.SUCCESS;
    });
    builder.addCase(searchProduct.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(searchProduct.rejected, (state, action) => {
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
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.productsStatus = STATUS.SUCCESS;
    });
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.productsStatus = STATUS.FAILED;
    });
  },
});

export default productSlice.reducer;
