import { useSelector } from "react-redux";
import Remove from "../../assets/Icons/Remove";
import styles from "./ComparePokemon.module.css";
import { RootState } from "../../store";

const ComparePokemon = () => {
  // const dispatch = useDispatch();
  const comparisonItems = useSelector(
    (state: RootState) => state.comparison.items
  );

  console.log(comparisonItems);
  console.log("comparison");
  return (
    <>
      <h2 className={styles.page_title}>Compare Pokemons</h2>
      <div className={styles.container}>
        <div className={styles.column}>
          <div>name</div>
          <div>height</div>
          <div>weight</div>
        </div>
        {comparisonItems.map((pokemon) => {
          return (
            <div key={pokemon.id} className={styles.column}>
              <div className={styles.name}>
                {pokemon.name}
                <span className={styles.icon_container}>
                  <Remove />
                </span>
              </div>
              <div>{pokemon.height / 10} m</div>
              <div>{pokemon.weight / 10} kg</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ComparePokemon;
