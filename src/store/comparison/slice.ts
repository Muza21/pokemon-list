import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonDetails } from "../pokemons/types";

type ComparisonState = {
  items: PokemonDetails[];
};

const initialState: ComparisonState = {
  items: [],
};

const comparisonSlice = createSlice({
  name: "comparison",
  initialState,
  reducers: {
    toggleComparison: (state, action: PayloadAction<PokemonDetails>) => {
      const exists = state.items.find((p) => p.name === action.payload.name);
      if (exists) {
        state.items = state.items.filter((p) => p.name !== action.payload.name);
      } else if (state.items.length < 2) {
        state.items.push(action.payload);
      }
    },
    removeFromComparison: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((p) => p.name !== action.payload);
    },
  },
});

export const { toggleComparison, removeFromComparison } =
  comparisonSlice.actions;
export default comparisonSlice.reducer;
