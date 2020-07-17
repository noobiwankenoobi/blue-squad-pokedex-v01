import React, { useState } from "react";
// Styles
import "./App.css";
import "./css/SearchBar2.scss";
// Components
import SearchBar from "./components/SearchBar";
// import SearchBar2 from "./components/SearchBar2";
import Arrow from "./components/Arrow";
import PokedexCard from "./components/PokedexCard";

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

  // RETURNED JSX
  return (
    <div className="App">
      {/* TOP SEARCHBAR */}
      <SearchBar changeCurrentPokemon={setCurrentPokemon} />
      {/* POKEDEX */}
      {currentPokemon.name ? pokedexDiv : <div></div>}
    </div>
  );
}

export default App;
