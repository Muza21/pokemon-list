import { useDispatch, useSelector } from "react-redux";
import Remove from "../../assets/Icons/Remove";
import styles from "./ComparePokemon.module.css";
import { RootState } from "../../store";
import { removeFromComparison } from "../../store/comparison/slice";
import { formatHeight, formatWeight } from "../../utils/format";

const ComparePokemon = () => {
  const dispatch = useDispatch();
  const comparisonItems = useSelector(
    (state: RootState) => state.comparison.items
  );

  const handleRemove = (name: string) => {
    dispatch(removeFromComparison(name));
  };
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
                <span
                  className={styles.icon_container}
                  onClick={() => handleRemove(pokemon.name)}
                >
                  <Remove />
                </span>
              </div>
              <div>{formatHeight(pokemon.height)}</div>
              <div>{formatWeight(pokemon.weight)}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ComparePokemon;
