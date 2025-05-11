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
};
