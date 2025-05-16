import { MouseEvent } from "react";
import Minus from "../../assets/Icons/Minus";
import Plus from "../../assets/Icons/Plus";
import Star from "../../assets/Icons/Star";
import Button from "../Button/Button";
import styles from "./PokemonItem.module.css";
import { useNavigate } from "react-router-dom";

export type Pokemon = {
  name: string;
  id: number;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isInComparison: boolean;
};

const PokemonItem = ({
  name,
  id,
  isFavorite,
  isInComparison,
  onToggleFavorite,
}: Pokemon) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${id}`);
  };
  return (
    <>
      <div className={styles.pokemon_card} onClick={handleClick}>
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.id}>{id}</p>
        </div>
        <div className={styles.buttons_container}>
          <Button onClick={onToggleFavorite}>
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
    </>
  );
};

export default PokemonItem;
