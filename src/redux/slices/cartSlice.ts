import { ProductType } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItem } from "@/lib/utils";
import { setItem } from "@/lib/utils";

const cart = getItem("cart");

interface InitialStateType {
  cart: ProductType[];
}

const initialState: InitialStateType = {
  cart: cart ? JSON.parse(cart) : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existProduct) {
        existProduct.quantity += 1;
      } else {
        state.cart = [...state.cart, { ...action.payload, checked: true }];
      }
      setItem("cart", state.cart);
    },

    clearCart(state) {
      state.cart = [];
      setItem("cart", state.cart);
    },

    incrementQuantity(state, action: PayloadAction<{ id: number | null }>) {
      const existProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existProduct && existProduct.quantity < existProduct.stock) {
        existProduct.quantity = existProduct.quantity += 1;
        existProduct.checked = true;
      }
      setItem("cart", state.cart);
    },

    decrementQuantity(state, action: PayloadAction<{ id: number | null }>) {
      const existProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existProduct && existProduct.quantity > 1) {
        existProduct.quantity = existProduct.quantity - 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
      setItem("cart", state.cart);
    },

    removeFromCart(state, action: PayloadAction<{ id: number | null }>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      setItem("cart", state.cart);
    },

    changeChecked(state, action: PayloadAction<{ id: number | null }>) {
      const existProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existProduct) {
        existProduct.checked = !existProduct.checked;
      }
      setItem("cart", state.cart);
    },

    checkAll(state, action: PayloadAction<boolean>) {
      const isChecked = action.payload;
      state.cart = state.cart.map((item) => ({
        ...item,
        checked: isChecked,
      }));
      setItem("cart", state.cart);
    },
  },
});

export const {
  addToCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  changeChecked,
  checkAll,
} = cartSlice.actions;

export default cartSlice.reducer;
