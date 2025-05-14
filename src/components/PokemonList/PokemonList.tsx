import styles from "./PokemonList.module.css";
import Pagination from "../Pagination/Pagination";
import PokemonItem from "../PokemonItem/PokemonItem.tsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/index.ts";
import { fetchPokemons } from "../../store/pokemons/slice";
import { RootState } from "../../store/index.ts";
import { PokemonResult } from "../../store/pokemons/types.ts";
import Loader from "../Loader/Loader.tsx";

const PokemonList = () => {
  const dispatch = useAppDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemons.list);
  const isLoading = useSelector((state: RootState) => state.pokemons.loading);
  const error = useSelector((state: RootState) => state.pokemons.error);
  const totalCount = useSelector((state: RootState) => state.pokemons.count);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    const offset = (page - 1) * 20;
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
    dispatch(fetchPokemons(url));
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <>
      {error && <p>Error: {error}</p>}
      {isLoading ? (
        <div className={styles.pokemon_list}>
          <Loader />
        </div>
      ) : (
        <>
          <div className={styles.pokemon_list}>
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
          <Pagination
            totalCount={totalCount}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

export default PokemonList;
