import styles from "./PokemonInfo.module.css";
import Button from "../Button/Button";
import Star from "../../assets/Icons/Star";
import Minus from "../../assets/Icons/Minus";
import Plus from "../../assets/Icons/Plus";
import { MouseEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../store/index";
import { fetchPokemonDetails } from "../../store/pokemons/slice";
import Loader from "../Loader/Loader";
import { toggleFavorite } from "../../store/favourites/slice";
import { toggleComparison } from "../../store/comparison/slice";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { motion } from "motion/react";
import { useGetPokemonDetailsQuery } from "../../store/pokemons/api";
import { formatHeight, formatWeight } from "../../utils/format";

const PokemonInfo = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    data: pokemon,
    error,
    isLoading,
  } = useGetPokemonDetailsQuery(String(id));

  const favorites = useSelector((state: RootState) => state.favorites.items);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon?.id}/`;
  const isFavorite = favorites.some((fav) => fav.name === pokemon?.name);
  const comparison = useSelector((state: RootState) => state.comparison.items);
  const isInComparison = comparison.some((item) => item.name === pokemon?.name);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      dispatch(fetchPokemonDetails(id));
    }
  }, [id, dispatch]);

  if (!pokemon) {
    return <div>404 not found</div>;
  }

  return (
    <>
      {error ||
        (errorMessage && (
          <ErrorMessage errorMessage={error ? String(error) : errorMessage} />
        ))}
      {isLoading ? (
        <Loader />
      ) : (
        <article className={styles.container}>
          <div className={styles.pokemon_info}>
            <div className={styles.image_container}>
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={`${pokemon.name} image`}
              />
            </div>
            <div className={styles.details}>
              <h3 className={styles.name}>{pokemon.name}</h3>
              <p className={styles.height}>
                height: {formatHeight(pokemon.height)}
              </p>
              <p className={styles.weight}>
                weight: {formatWeight(pokemon.weight)}
              </p>
              <div className={styles.stats}>
                <p>stats</p>
                <ul>
                  {pokemon.stats.map((stat, index) => (
                    <li className={styles.stat} key={index}>
                      {stat.stat.name}: {stat.base_stat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.buttons_container}>
            <Button
              onClick={() =>
                dispatch(toggleFavorite({ name: pokemon.name, url: url }))
              }
            >
              <Star filled={isFavorite} />
            </Button>
            <Button
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                if (
                  comparison.length >= 2 &&
                  !comparison.some((p) => p.name === pokemon.name)
                ) {
                  setErrorMessage("You can't compare more than 2 pokemons!");
                  setTimeout(() => setErrorMessage(null), 3000);
                  return;
                }
                dispatch(toggleComparison(pokemon));
              }}
            >
              {isInComparison ? <Minus /> : <Plus />}
            </Button>
          </div>
        </article>
      )}
    </>
  );
};

export default PokemonInfo;
