import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import pokemonsReducer from "./pokemons/slice";
import favoritesReducer from "./favourites/slice";
import { useDispatch } from "react-redux";
import comparisonReducer from "./comparison/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { pokemonApi } from "./pokemons/api";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  // pokemons: pokemonsReducer,
  favorites: favoritesReducer,
  comparison: comparisonReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(pokemonApi.middleware),
});

export const persistor = persistStore(store);
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
