import styles from "./PokemonList.module.css";
import Pagination from "../Pagination/Pagination";
import PokemonItem, { Pokemon } from "../PokemonItem/PokemonItem.tsx";
import { pockemonData } from "../../data/pockemonData.ts";
import React from "react";

const PokemonList = () => {
  return (
    <>
      <div className={styles.pokemon_list}>
        {pockemonData.map((pokemon: Pokemon) => {
          return (
            <React.Fragment key={pokemon.id}>
              <PokemonItem
                name={pokemon.name}
                id={pokemon.id}
                isFavorite={pokemon.isFavorite}
                isInComparison={pokemon.isInComparison}
              />
            </React.Fragment>
          );
        })}
      </div>
      <Pagination />
    </>
  );
};

export default PokemonList;
