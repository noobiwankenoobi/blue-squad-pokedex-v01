import React, { useState } from "react";
// Styles
import "./App.css";
// Components
import SearchBar from "./components/SearchBar";
// import SearchBar2 from "./components/SearchBar2";
import Arrow from "./components/Arrow";
import PokedexCard from "./components/PokedexCard";
import Navbar from "./components/Navbar";

// APP COMPONENT
function App() {
  // STATE AND PROPS
  const [currentPokemon, setCurrentPokemon] = useState({});
  const { id } = currentPokemon;

  // POKEDEX JSX
  let pokedexDiv = (
    <div className="pokedex">
      <Arrow
        changeCurrentPokemon={setCurrentPokemon}
        currentPokemonId={id}
        direction="left"
      />
      <PokedexCard currentPokemon={currentPokemon} />
      <Arrow
        changeCurrentPokemon={setCurrentPokemon}
        currentPokemonId={id}
        direction="right"
      />
    </div>
  );

  // SEARCHBAR JSX
  let searchBar = <SearchBar changeCurrentPokemon={setCurrentPokemon} />;
  // Logic for whether the main searchbar or the pokedex gets rendered
  let pokedexOrSearch = currentPokemon.name ? pokedexDiv : searchBar;

  // RETURNED JSX
  return (
    <div className="App">
      <Navbar
        changeCurrentPokemon={setCurrentPokemon}
        currentPokemon={currentPokemon}
        searchStyle="nav"
      />
      <div className="main">{pokedexOrSearch}</div>
    </div>
  );
}

export default App;
