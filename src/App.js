import React, { useState } from "react";
// Styles
import "./App.css";
// Components
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import PokedexCard from "./components/PokedexCard";
import Arrow from "./components/Arrow";
import Footer from "./components/Footer";

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
  let searchBar = <Search changeCurrentPokemon={setCurrentPokemon} />;

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
      <Footer />
    </div>
  );
}

export default App;
