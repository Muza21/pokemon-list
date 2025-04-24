import "./App.css";
import FavouritePokemonList from "./components/FavouritePokemonList/FavouritePokemonList";
import Header from "./components/Header/Header";
// import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
// import PokemonList from "./components/PokemonList/PokemonList";

function App() {
  return (
    <>
      <Header />
      {/* <PokemonList /> */}
      {/* <PokemonInfo /> */}
      <FavouritePokemonList />
    </>
  );
}

export default App;
