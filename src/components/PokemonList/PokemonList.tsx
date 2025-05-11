import styles from "./PokemonList.module.css";
import Pagination from "../Pagination/Pagination";
import PokemonItem from "../PokemonItem/PokemonItem.tsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/index.ts";
import { fetchPokemons } from "../../store/pokemons/slice";
import { RootState } from "../../store/index.ts";
import { PokemonResult } from "../../store/pokemons/types.ts";

const PokemonList = () => {
  const dispatch = useAppDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemons.list);
  const isLoading = useSelector((state: RootState) => state.pokemons.loading);
  const error = useSelector((state: RootState) => state.pokemons.error);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <>
      <div className={styles.pokemon_list}>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {pokemons.map((pokemon: PokemonResult) => {
          return (
            <PokemonItem
              key={Number(pokemon.url.split("/").filter(Boolean).pop())}
              name={pokemon.name}
              id={Number(pokemon.url.split("/").filter(Boolean).pop())}
              isFavorite={false}
              isInComparison={false}
            />
          );
        })}
      </div>
      <Pagination />
    </>
  );
};

export default PokemonList;
