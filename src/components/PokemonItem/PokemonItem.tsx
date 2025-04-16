import styles from "./PokemonItem.module.css";

export type Pokemon = {
  name: string;
  id: number;
  isFavorite: boolean;
  isInComparison: boolean;
};

const PokemonItem = ({ name, isFavorite, isInComparison }: Pokemon) => {
  return (
    <>
      <div className={styles.pokemon_card}>
        <h3 className={styles.name}>{name}</h3>
        {isFavorite ? <>true</> : <>false</>}
        {isInComparison ? <>true</> : <>false</>}
      </div>
    </>
  );
};

export default PokemonItem;
