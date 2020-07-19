import React, { useState } from "react";
// Styles
import "./App.css";
// Components
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import PokedexCard from "./components/PokedexCard";
import Arrow from "./components/Arrow";
import Footer from "./components/Footer";
//
import axios from "axios";

// APP COMPONENT
function App() {
  // STATE AND PROPS
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [searchString, setSearchString] = useState("");
  const { id } = currentPokemon;
  const [error, setError] = useState({
    errorCode: null,
    message: "",
  });

  // HANDLE DATA
  // Takes data back from api call, sets the currentPokemon in the state
  const handleData = (data) => {
    // Create a pokemon object with only the parts of the returned data you need
    const pokemon = {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      imageUrl: data.sprites.front_default,
    };
    // Sets current pokemon
    setCurrentPokemon(pokemon);
  };

  const handleErrors = () => {
    setError({ errorCode: 404, message: "Can't find Pokemon" });
  };

  // GET POKEMON
  const getPokemon = (pokemonIdent) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonIdent}`)
      .then((res) => {
        handleData(res.data);
        setError({ errorCode: null, message: "" });
        setSearchString("");
      })
      .catch((err) => {
        handleErrors();
      });
  };

  // POKEDEX JSX
  let pokedexDiv = (
    <div className="pokedex">
      <Arrow
        changeCurrentPokemon={setCurrentPokemon}
        currentPokemonId={id}
        getPokemon={getPokemon}
        direction="left"
      />
      <PokedexCard currentPokemon={currentPokemon} />
      <Arrow
        changeCurrentPokemon={setCurrentPokemon}
        currentPokemonId={id}
        getPokemon={getPokemon}
        direction="right"
      />
    </div>
  );

  // SEARCHBAR JSX
  let searchBar = (
    <Search
      changeCurrentPokemon={setCurrentPokemon}
      getPokemon={getPokemon}
      error={error}
      searchString={searchString}
      setSearchString={setSearchString}
    />
  );

  // Logic for whether the main searchbar or the pokedex gets rendered
  let pokedexOrSearch = currentPokemon.name ? pokedexDiv : searchBar;

  // RETURNED JSX
  return (
    <div className="App">
      <Navbar
        changeCurrentPokemon={setCurrentPokemon}
        currentPokemon={currentPokemon}
        searchStyle="nav"
        getPokemon={getPokemon}
        error={error}
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <div className="main">{pokedexOrSearch}</div>
      <Footer />
    </div>
  );
}

export default App;
