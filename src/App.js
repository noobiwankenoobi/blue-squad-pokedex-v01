import React, { useState } from "react";
// Styles
import "./App.css";
// Components
import SearchBar from "./components/SearchBar";
import Pokedex from "./components/Pokedex";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState({});

  return (
    <div className="App">
      <SearchBar
        state={{ currentPokemon: [currentPokemon, setCurrentPokemon] }}
      />
      <Pokedex currentPokemon={currentPokemon} />
    </div>
  );
}

export default App;
