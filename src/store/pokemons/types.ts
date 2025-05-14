export type PokemonResult = {
  name: string;
  url: string;
};

export type PokemonAPIResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
};

export type PokemonState = {
  list: PokemonResult[];
  count: number;
  next: string | null;
  previous: string | null;
  loading: boolean;
  error: string | null;
  pokemon: PokemonDetails | null;
  detailsLoading: boolean;
  detailsError: string | null;
};

export type PokemonDetails = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: { "official-artwork": { front_default: string } };
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
};
