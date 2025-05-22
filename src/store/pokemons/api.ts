import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PokemonAPIResponse, PokemonDetails } from "./types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (build) => ({
    getPokemons: build.query<PokemonAPIResponse, number>({
      query: (offset) =>
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`,
    }),
    getPokemonDetails: build.query<PokemonDetails, string>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonDetailsQuery } = pokemonApi;
