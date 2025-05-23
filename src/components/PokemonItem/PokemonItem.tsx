import Minus from "../../assets/Icons/Minus";
import Plus from "../../assets/Icons/Plus";
import Star from "../../assets/Icons/Star";
import Button from "../Button/Button";
import styles from "./PokemonItem.module.css";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export type PokemonItemProps = {
  name: string;
  id: number;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onToggleComparison: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isInComparison: boolean;
};

const PokemonItem = ({
  name,
  id,
  isFavorite,
  isInComparison,
  onToggleFavorite,
  onToggleComparison,
}: PokemonItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${id}`);
  };
  return (
    <>
      <motion.div
        initial={{ x: "-50%" }}
        animate={{ x: "0" }}
        transition={{ type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className={styles.pokemon_card}
        onClick={handleClick}
      >
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.id}>{id}</p>
        </div>
        <div className={styles.buttons_container}>
          <Button onClick={onToggleFavorite}>
            <Star filled={isFavorite} />
          </Button>
          <Button onClick={onToggleComparison}>
            {isInComparison ? <Minus /> : <Plus />}
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default PokemonItem;
