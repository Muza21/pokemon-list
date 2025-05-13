import styles from "./FavouritePokemonList.module.css";
import Pagination from "../Pagination/Pagination";
import PokemonItem, { Pokemon } from "../PokemonItem/PokemonItem.tsx";
import { pokemonData } from "../../data/pokemonData.ts";
import { useSelector } from "react-redux";
import { fetchPokemons } from "../../store/pokemons/slice.ts";
import { useState } from "react";
import { RootState, useAppDispatch } from "../../store/index.ts";

const FavouritePokemonList = () => {
  const favoritePokemons = pokemonData.filter(
    (pokemon: Pokemon) => pokemon.isFavorite
  );
  const dispatch = useAppDispatch();

  const totalCount = useSelector((state: RootState) => state.pokemons.count);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    const offset = (page - 1) * 20;
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
    dispatch(fetchPokemons(url));
    setCurrentPage(page);
  };

  return (
    <>
      <div className={styles.pokemon_list}>
        {favoritePokemons.map((pokemon: Pokemon) => {
          return (
            <PokemonItem
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              isFavorite={pokemon.isFavorite}
              isInComparison={pokemon.isInComparison}
            />
          );
        })}
      </div>
      <Pagination
        totalCount={totalCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default FavouritePokemonList;
