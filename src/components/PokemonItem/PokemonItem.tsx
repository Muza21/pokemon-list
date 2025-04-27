import { MouseEvent } from "react";
import Minus from "../../assets/Icons/Minus";
import Plus from "../../assets/Icons/Plus";
import Star from "../../assets/Icons/Star";
import Button from "../Button/Button";
import styles from "./PokemonItem.module.css";
import { Link } from "react-router-dom";

export type Pokemon = {
  name: string;
  id: number;
  isFavorite: boolean;
  isInComparison: boolean;
};

const PokemonItem = ({ name, id, isFavorite, isInComparison }: Pokemon) => {
  const handleClick = () => {
    console.log(name);
  };
  return (
    <>
      <Link to={`/details/${id}`}>
        <div className={styles.pokemon_card} onClick={handleClick}>
          <div className={styles.header}>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.id}>{id}</p>
          </div>
          <div className={styles.buttons_container}>
            <Button
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
              }}
            >
              <Star filled={isFavorite} />
            </Button>
            <Button
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
              }}
            >
              {isInComparison ? <Minus /> : <Plus />}
            </Button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PokemonItem;
