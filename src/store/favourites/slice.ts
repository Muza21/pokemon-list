import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonResult } from "../pokemons/types";

interface FavoritesState {
  items: PokemonResult[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<PokemonResult>) => {
      const exists = state.items.find((p) => p.name === action.payload.name);
      if (exists) {
        state.items = state.items.filter((p) => p.name !== action.payload.name);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
