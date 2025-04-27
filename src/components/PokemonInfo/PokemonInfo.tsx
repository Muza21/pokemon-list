import styles from "./PokemonInfo.module.css";
import Button from "../Button/Button";
import Star from "../../assets/Icons/Star";
import Minus from "../../assets/Icons/Minus";
import Plus from "../../assets/Icons/Plus";
import { MouseEvent } from "react";
import { useParams } from "react-router-dom";
import { pokemonData } from "../../data/pokemonData";

const PokemonInfo = () => {
  const { id } = useParams();
  const pokemon = pokemonData.find(
    (pokemonItem) => pokemonItem.id === Number(id)
  );

  if (!pokemon) {
    return <div>404 not found</div>;
  }

  return (
    <article className={styles.container}>
      <div className={styles.pokemon_info}>
        <div className={styles.image_container}>
          <img src={pokemon.image} alt={`${pokemon.name} image`} />
        </div>
        <div className={styles.details}>
          <h3 className={styles.name}>{pokemon.name}</h3>
          <p className={styles.height}>height: {pokemon.height} cm</p>
          <p className={styles.weight}>weight: {pokemon.weight} kg</p>
          <div className={styles.stats}>
            <p>stats</p>
            <ul>
              {pokemon.stats.map((stat, index) => (
                <li className={styles.stat} key={index}>
                  {stat.name}: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.buttons_container}>
        <Button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
          }}
        >
          <Star filled={pokemon.isFavorite} />
        </Button>
        <Button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
          }}
        >
          {pokemon.isInComparison ? <Minus /> : <Plus />}
        </Button>
      </div>
    </article>
  );
};

export default PokemonInfo;
