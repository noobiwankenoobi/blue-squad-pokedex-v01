import React, { useState } from "react";
// Styles
import "./App.css";
// Components
import SearchBar from "./components/SearchBar";
// import Pokedex from "./components/Pokedex";
import LeftArrow from "./components/LeftArrow";
import Arrow from "./components/Arrow";
import PokedexCard from "./components/PokedexCard";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState({});

  const { id } = currentPokemon;

  return (
    <div className="App">
      <SearchBar
        state={{ currentPokemon: [currentPokemon, setCurrentPokemon] }}
      />
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
    </div>
  );
}

export default App;
