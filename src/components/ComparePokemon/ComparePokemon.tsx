import Remove from "../../assets/Icons/Remove";
import styles from "./ComparePokemon.module.css";

const ComparePokemon = () => {
  return (
    <>
      <h2 className={styles.page_title}>Compare Pokemons</h2>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.label_cell}>name</div>
          <div className={styles.cell}>
            pikachu{" "}
            <span className={styles.icon_container}>
              <Remove />
            </span>
          </div>
          <div className={styles.cell}>
            chazard{" "}
            <span className={styles.icon_container}>
              <Remove />
            </span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label_cell}>height</div>
          <div className={styles.cell}>0.4 m</div>
          <div className={styles.cell}>1.7 m</div>
        </div>
        <div className={styles.row}>
          <div className={styles.label_cell}>weight</div>
          <div className={styles.cell}>6 kg</div>
          <div className={styles.cell}>90.5 kg</div>
        </div>
      </div>
    </>
  );
};

export default ComparePokemon;
