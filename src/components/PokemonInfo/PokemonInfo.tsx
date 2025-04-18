import styles from "./PokemonInfo.module.css";
import pikachuImage from "../../assets/images/pikachu.jpeg";
import Button from "../Button/Button";
import Star from "../../assets/Icons/Star";
import Minus from "../../assets/Icons/Minus";
import Plus from "../../assets/Icons/Plus";
import { MouseEvent } from "react";

const pokemonData = {
  name: "Pikachu",
  height: 41,
  weight: 6,
  stats: [
    { name: "hp", value: 45 },
    { name: "attack", value: 75 },
    { name: "speed", value: 120 },
  ],
  image: pikachuImage,
  isFavorite: true,
  isInComparison: false,
};

const PokemonInfo = () => {
  return (
    <article className={styles.container}>
      <div className={styles.pokemon_info}>
        <div className={styles.image_container}>
          <img src={pokemonData.image} alt={`${pokemonData.name} image`} />
        </div>
        <div className={styles.details}>
          <h3 className={styles.name}>{pokemonData.name}</h3>
          <p className={styles.height}>height: {pokemonData.height} cm</p>
          <p className={styles.weight}>weight: {pokemonData.weight} kg</p>
          <div className={styles.stats}>
            <p>stats</p>
            <ul>
              {pokemonData.stats.map((stat, index) => (
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
          <Star filled={pokemonData.isFavorite} />
        </Button>
        <Button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
          }}
        >
          {pokemonData.isInComparison ? <Minus /> : <Plus />}
        </Button>
      </div>
    </article>
  );
};

export default PokemonInfo;
