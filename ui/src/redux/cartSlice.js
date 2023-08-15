import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const saveInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: fetchFromLocalStorage().length,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemInCarts = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (isItemInCarts) {
        const tempCart = state.carts.map((cart) => {
          if (cart.id === action.payload.id) {
            let quantity = action.payload.quantity + cart.quantity;
            let totalPrice = quantity * cart.price;
            return {
              ...cart,
              quantity: quantity,
              totalPrice: totalPrice,
            };
          } else {
            return cart;
          }
        });
        state.carts = tempCart;
        saveInLocalStorage(state.carts);
      } else {
        let totalPrice = action.payload.quantity * action.payload.price;
        let tempItem = { ...action.payload, totalPrice: totalPrice };
        state.carts.push(tempItem);
        state.i;
        state.itemCount++;
        console.log(state.itemCount);
        console.log(state.carts);
        saveInLocalStorage(state.carts);
      }
    },
    removeFromCart: (state, action) => {
      const tempArr = state.carts.filter((item) => {
        item.id !== action.payload.id;
      });
      state.carts = tempArr;
      saveInLocalStorage(state.carts);
    },
    clearCart: (state) => {
      state.carts = [];
      saveInLocalStorage(state.carts);
    },
    getCartTotal: (state, action) => {
      const initialValue = 0;
      state.totalAmount = state.carts.reduce((total, item) => {
        return (total += item.totalPrice);
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
