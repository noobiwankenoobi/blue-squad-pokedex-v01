import React, { useState } from "react";
// Styles
import "./App.css";
// Components
import SearchBar from "./components/SearchBar";
import Arrow from "./components/Arrow";
import PokedexCard from "./components/PokedexCard";

// APP COMPONENT
function App() {
  const [currentPokemon, setCurrentPokemon] = useState({});

  const { id } = currentPokemon;

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
