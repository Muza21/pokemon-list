import styles from "./PokemonList.module.css";
import Pagination from "../Pagination/Pagination";
import PokemonItem from "../PokemonItem/PokemonItem.tsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/index.ts";
import { RootState } from "../../store/index.ts";
import { PokemonResult } from "../../store/pokemons/types.ts";
import Loader from "../Loader/Loader.tsx";
import { toggleFavorite } from "../../store/favourites/slice.ts";
import { toggleComparison } from "../../store/comparison/slice.ts";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import { useGetPokemonsQuery } from "../../store/pokemons/api.ts";
import {
  canBeAddedToComparison,
  extractPokemonId,
  isInComparisonList,
  isInFavourite,
} from "../../utils/pokemon.ts";

const PokemonList = () => {
  const dispatch = useAppDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const comparisonItems = useSelector(
    (state: RootState) => state.comparison.items
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const offset = (currentPage - 1) * 20;
  const { data: pokemons, error, isLoading } = useGetPokemonsQuery(offset);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {error ||
        (errorMessage && (
          <ErrorMessage errorMessage={error ? String(error) : errorMessage} />
        ))}
      {isLoading ? (
        <div className={styles.pokemon_list}>
          <Loader />
        </div>
      ) : (
        <>
          <div className={styles.pokemon_list}>
            {pokemons?.results.map((pokemon: PokemonResult) => {
              const id = extractPokemonId(pokemon.url);
              const isFavorite = isInFavourite(favorites, pokemon.name);
              const isInComparison = isInComparisonList(
                comparisonItems,
                pokemon.name
              );

              return (
                <PokemonItem
                  key={id}
                  name={pokemon.name}
                  id={id}
                  isFavorite={isFavorite}
                  isInComparison={isInComparison}
                  onToggleFavorite={(
                    e: React.MouseEvent<HTMLButtonElement>
                  ) => {
                    e.stopPropagation();
                    dispatch(
                      toggleFavorite({ name: pokemon.name, url: pokemon.url })
                    );
                  }}
                  onToggleComparison={async (
                    e: React.MouseEvent<HTMLButtonElement>
                  ) => {
                    e.stopPropagation();
                    if (
                      !canBeAddedToComparison(comparisonItems, pokemon.name)
                    ) {
                      setErrorMessage(
                        "You can't compare more than 2 pokemons!"
                      );
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
            totalCount={pokemons?.count}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

export default PokemonList;
