import { expect, test } from "vitest";

import {
  extractPokemonId,
  isInFavourite,
  isInComparisonList,
  canBeAddedToComparison,
  calculateOffset,
} from "../utils/pokemon";
import { PokemonDetails, PokemonResult } from "../store/pokemons/types";

test("extractPokemonId extracts id from url", () => {
  expect(extractPokemonId("https://pokeapi.co/api/v2/pokemon/40/")).toBe(40);
  expect(extractPokemonId("https://pokeapi.co/api/v2/pokemon/1/")).toBe(1);
  expect(extractPokemonId("")).toBe(NaN);
});

test("isInFavourite checks if the pokemon is in favourites list", () => {
  const favourites: PokemonResult[] = [
    { name: "pikachu", url: "n/a" },
    { name: "bulbasaur", url: "n/a" },
  ];

  expect(isInFavourite(favourites, "pikachu")).toBe(true);
  expect(isInFavourite(favourites, "ivysaur")).toBe(false);
});

test("isInComparisonList checks if the pokemon is in comparison list", () => {
  const comparisonItems: PokemonDetails[] = [
    {
      id: 2,
      name: "ivysaur",
      height: 10,
      weight: 130,
      sprites: {
        other: { "official-artwork": { front_default: "" } },
      },
      stats: [
        {
          base_stat: 60,
          stat: {
            name: "hp",
          },
        },
      ],
    },
  ];

  expect(isInComparisonList(comparisonItems, "ivysaur")).toBe(true);
  expect(isInComparisonList(comparisonItems, "pikachu")).toBe(false);
});

test("canBeAddedToComparison checks if the pokemon can be added to comparison", () => {
  const comparisonItems: PokemonDetails[] = [
    {
      id: 2,
      name: "ivysaur",
      height: 10,
      weight: 130,
      sprites: {
        other: { "official-artwork": { front_default: "" } },
      },
      stats: [
        {
          base_stat: 60,
          stat: {
            name: "hp",
          },
        },
      ],
    },
  ];
  expect(canBeAddedToComparison(comparisonItems, "pikachu")).toBe(true);
  expect(
    canBeAddedToComparison(
      [
        {
          id: 2,
          name: "ivysaur",
          height: 10,
          weight: 130,
          sprites: {
            other: { "official-artwork": { front_default: "" } },
          },
          stats: [
            {
              base_stat: 60,
              stat: {
                name: "hp",
              },
            },
          ],
        },
        {
          id: 5,
          name: "pikachu",
          height: 10,
          weight: 130,
          sprites: {
            other: { "official-artwork": { front_default: "" } },
          },
          stats: [
            {
              base_stat: 60,
              stat: {
                name: "hp",
              },
            },
          ],
        },
      ],
      "venusaur"
    )
  ).toBe(false);
});

test("calculateOffset calculates offset by page number and returns it", () => {
  expect(calculateOffset(2)).toBe(20);
  expect(calculateOffset(4)).toBe(60);
});
