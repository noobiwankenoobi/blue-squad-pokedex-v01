import React, { useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar";
import Pokedex from "./components/Pokedex";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState({});

  return (
    <div className="App">
      <Pokedex currentPokemon={currentPokemon} />
      <SearchBar
        state={{ currentPokemon: [currentPokemon, setCurrentPokemon] }}
      />
    </div>
  );
}

export default App;
