// import styles from "./PokemonList.module.css";
import Pagination from "../Pagination/Pagination";
import PokemonItem, { Pokemon } from "../PokemonItem/PokemonItem.tsx";
import { pockemonData } from "../../data/pockemonData.ts";

const PokemonList = () => {
  return (
    <>
      {pockemonData.map((pockemon: Pokemon) => {
        <PokemonItem
          key={pockemon.id}
          name={pockemon.name}
          id={pockemon.id}
          isFavorite={pockemon.isFavorite}
          isInComparison={pockemon.isInComparison}
        />;
      })}
      <Pagination />
    </>
  );
};

export default PokemonList;
