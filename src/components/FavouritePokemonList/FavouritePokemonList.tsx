import styles from "./FavouritePokemonList.module.css";
import Pagination from "../Pagination/Pagination";
import PokemonItem from "../PokemonItem/PokemonItem.tsx";
import { useSelector } from "react-redux";
import { fetchPokemons } from "../../store/pokemons/slice.ts";
import { useState } from "react";
import { RootState, useAppDispatch } from "../../store/index.ts";
import { toggleFavorite } from "../../store/favourites/slice.ts";
import { PokemonResult } from "../../store/pokemons/types.ts";

const FavouritePokemonList = () => {
  const favoritePokemons = useSelector(
    (state: RootState) => state.favorites.items
  );
  const dispatch = useAppDispatch();
  const totalCount = useSelector(
    (state: RootState) => state.favorites.items.length
  );
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
        {favoritePokemons
          .slice((currentPage - 1) * 20, currentPage * 20)
          .map((pokemon: PokemonResult) => {
            const id = Number(pokemon.url.split("/").filter(Boolean).pop());
            const isFavorite = favoritePokemons.some(
              (fav) => fav.name === pokemon.name
            );
            return (
              <PokemonItem
                key={id}
                name={pokemon.name}
                id={id}
                isFavorite={isFavorite}
                onToggleFavorite={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  dispatch(toggleFavorite(pokemon));
                }}
                isInComparison={false}
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
