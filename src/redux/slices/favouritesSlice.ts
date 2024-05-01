import { getItem, setItem } from "@/lib/utils";
import { ProductType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const favorites = getItem("favorites");

interface ItialStateType {
  favorites: ProductType[];
}

const initialState: ItialStateType = {
  favorites: favorites ? JSON.parse(favorites) : [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, action) {
      const isExistsProduct = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (isExistsProduct) {
        state.favorites = state.favorites.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.favorites = [...state.favorites, action.payload];
      }
      setItem("favorites", state.favorites);
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
