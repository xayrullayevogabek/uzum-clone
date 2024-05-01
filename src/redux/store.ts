import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import favorites from "./slices/favouritesSlice";

export const store = configureStore({
  reducer: {
    cart,
    favorites,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
