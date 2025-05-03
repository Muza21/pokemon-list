import pikachuImage from "../assets/images/pikachu.jpeg";
import bulbasaurImage from "../assets/images/bulbasaur.jpg";
import ivysaurImage from "../assets/images/ivysaur.jpg";
import venusaurImage from "../assets/images/venusaur.png";
import charmanderImage from "../assets/images/charmander.jpg";

export const pokemonData = [
  {
    id: 1,
    name: "Pikachu",
    height: 41,
    weight: 6,
    stats: [
      { name: "hp", value: 45 },
      { name: "attack", value: 75 },
      { name: "speed", value: 120 },
    ],
    image: pikachuImage,
    isFavorite: true,
    isInComparison: false,
  },
  {
    id: 2,
    name: "Bulbasaur",
    height: 60,
    weight: 6.9,
    stats: [
      { name: "hp", value: 45 },
      { name: "attack", value: 49 },
      { name: "speed", value: 45 },
    ],
    image: bulbasaurImage,
    isFavorite: false,
    isInComparison: false,
  },
  {
    id: 3,
    name: "Ivysaur",
    height: 100,
    weight: 13,
    stats: [
      { name: "hp", value: 60 },
      { name: "attack", value: 62 },
      { name: "speed", value: 60 },
    ],
    image: ivysaurImage,
    isFavorite: false,
    isInComparison: false,
  },
  {
    id: 4,
    name: "Venusaur",
    height: 200,
    weight: 100,
    stats: [
      { name: "hp", value: 80 },
      { name: "attack", value: 82 },
      { name: "speed", value: 70 },
    ],
    image: venusaurImage,
    isFavorite: true,
    isInComparison: false,
  },
  {
    id: 5,
    name: "Charmander",
    height: 60,
    weight: 8.5,
    stats: [
      { name: "hp", value: 39 },
      { name: "attack", value: 52 },
      { name: "speed", value: 65 },
    ],
    image: charmanderImage,
    isFavorite: false,
    isInComparison: false,
  },
];
