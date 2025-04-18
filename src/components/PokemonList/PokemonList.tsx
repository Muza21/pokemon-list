import styles from "./PokemonList.module.css";
import Pagination from "../Pagination/Pagination";
import PokemonItem, { Pokemon } from "../PokemonItem/PokemonItem.tsx";
import { pokemonData } from "../../data/pokemonData.ts";

const PokemonList = () => {
  return (
    <>
      <div className={styles.pokemon_list}>
        {pokemonData.map((pokemon: Pokemon) => {
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
      <Pagination />
    </>
  );
};

export default PokemonList;
