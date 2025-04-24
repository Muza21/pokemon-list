import styles from "./FavouritePokemonList.module.css";
import Pagination from "../Pagination/Pagination";
import PokemonItem, { Pokemon } from "../PokemonItem/PokemonItem.tsx";
import { pokemonData } from "../../data/pokemonData.ts";

const FavouritePokemonList = () => {
  const favoritePokemons = pokemonData.filter(
    (pokemon: Pokemon) => pokemon.isFavorite
  );

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
      <Pagination />
    </>
  );
};

export default FavouritePokemonList;
