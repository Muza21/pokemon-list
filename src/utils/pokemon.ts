import { PokemonDetails, PokemonResult } from "../store/pokemons/types";

export const extractPokemonId = (url: string): number =>
  Number(url.split("/").filter(Boolean).pop());

export const isInFavourite = (pokemons: PokemonResult[], pokemonName: string) =>
  pokemons.some((pokemon) => pokemon.name === pokemonName);

export const isInComparisonList = (
  pokemons: PokemonDetails[],
  pokemonName: string
) => pokemons.some((pokemon) => pokemon.name === pokemonName);

export const canBeAddedToComparison = (
  pokemons: PokemonDetails[],
  pokemonName: string
) =>
  pokemons.length < 2 ||
  pokemons.some((pokemon) => pokemon.name === pokemonName);

export const calculateOffset = (page: number, limit: number = 20) =>
  (page - 1) * limit;
