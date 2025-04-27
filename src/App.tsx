import { Route, Routes } from "react-router-dom";
import "./App.css";
import ComparePokemon from "./components/ComparePokemon/ComparePokemon";
import Header from "./components/Header/Header";
import PokemonList from "./components/PokemonList/PokemonList";
import FavouritePokemonList from "./components/FavouritePokemonList/FavouritePokemonList";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/details/:id" element={<PokemonInfo />} />
        <Route path="/favorites" element={<FavouritePokemonList />} />
        <Route path="/comparison" element={<ComparePokemon />} />
      </Routes>
      {/* <PokemonList /> */}
      {/* <PokemonInfo /> */}
      {/* <FavouritePokemonList /> */}
      {/* <ComparePokemon /> */}
    </>
  );
}

export default App;
