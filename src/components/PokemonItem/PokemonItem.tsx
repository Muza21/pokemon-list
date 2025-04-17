import styles from "./PokemonItem.module.css";

export type Pokemon = {
  name: string;
  id: number;
  isFavorite: boolean;
  isInComparison: boolean;
};

const PokemonItem = ({ name, id, isFavorite, isInComparison }: Pokemon) => {
  console.log("here");
  return (
    <>
      <div className={styles.pokemon_card}>
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.id}>{id}</p>
        </div>
        {isFavorite ? <>true</> : <>false</>}
        {isInComparison ? <>true</> : <>false</>}
      </div>
    </>
  );
};

export default PokemonItem;
