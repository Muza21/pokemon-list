import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./pokemons/slice";
import favoritesReducer from "./favourites/slice";
import { useDispatch } from "react-redux";
import comparisonReducer from "./comparison/slice";

const rootReducer = {
  pokemons: pokemonsReducer,
  favorites: favoritesReducer,
  comparison: comparisonReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
