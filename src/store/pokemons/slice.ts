import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PokemonAPIResponse, PokemonState } from "./types";

export const fetchPokemons = createAsyncThunk<
  PokemonAPIResponse,
  string | undefined,
  { rejectValue: string }
>(
  "fetchPokemons",
  async (url = "https://pokeapi.co/api/v2/pokemon", { rejectWithValue }) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch Pokémon list");
      const data: PokemonAPIResponse = await res.json();
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      return rejectWithValue(message);
    }
  }
);

const initialState: PokemonState = {
  list: [],
  count: 0,
  next: null,
  previous: null,
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.results;
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export default pokemonSlice.reducer;
