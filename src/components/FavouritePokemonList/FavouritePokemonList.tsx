import styles from "./FavouritePokemonList.module.css";
import Pagination from "../Pagination/Pagination";
import PokemonItem from "../PokemonItem/PokemonItem.tsx";
import { useSelector } from "react-redux";
import { fetchPokemons } from "../../store/pokemons/slice.ts";
import { useState } from "react";
import { RootState, useAppDispatch } from "../../store/index.ts";
import { toggleFavorite } from "../../store/favourites/slice.ts";
import { PokemonResult } from "../../store/pokemons/types.ts";
import { toggleComparison } from "../../store/comparison/slice.ts";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";

const FavouritePokemonList = () => {
  const favoritePokemons = useSelector(
    (state: RootState) => state.favorites.items
  );
  const dispatch = useAppDispatch();
  const totalCount = useSelector(
    (state: RootState) => state.favorites.items.length
  );
  const comparisonItems = useSelector(
    (state: RootState) => state.comparison.items
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handlePageChange = (page: number) => {
    const offset = (page - 1) * 20;
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
    dispatch(fetchPokemons(url));
    setCurrentPage(page);
  };
  return (
    <>
      <div className={styles.pokemon_list}>
        {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        {favoritePokemons
          .slice((currentPage - 1) * 20, currentPage * 20)
          .map((pokemon: PokemonResult) => {
            const id = Number(pokemon.url.split("/").filter(Boolean).pop());
            const isFavorite = favoritePokemons.some(
              (fav) => fav.name === pokemon.name
            );
            const isInComparison = comparisonItems.some(
              (item) => item.name === pokemon.name
            );
            return (
              <PokemonItem
                key={id}
                name={pokemon.name}
                id={id}
                isFavorite={isFavorite}
                isInComparison={isInComparison}
                onToggleFavorite={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  dispatch(toggleFavorite(pokemon));
                }}
                onToggleComparison={async (
                  e: React.MouseEvent<HTMLButtonElement>
                ) => {
                  e.stopPropagation();
                  if (
                    comparisonItems.length >= 2 &&
                    !comparisonItems.some((p) => p.name === pokemon.name)
                  ) {
                    setErrorMessage("You can't compare more than 2 pokemons!");
                    setTimeout(() => setErrorMessage(null), 3000);
                    return;
                  }
                  const response = await fetch(pokemon.url);
                  const pokemonDetails = await response.json();

                  dispatch(toggleComparison(pokemonDetails));
                }}
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
