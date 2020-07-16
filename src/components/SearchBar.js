import React, { useState } from "react";
import axios from "axios";
// Array
import pokeNameArray from "../util/pokenames";

// SEARCHBAR COMPONENT
const SearchBar = (props) => {
  // Sets SearchBar state
  const [searchString, setSearchString] = useState("");
  // Gets currentPokemon setter function from props so it can be called inside SearchBar
  const { changeCurrentPokemon } = props;
  // Set lowercase pokemon search input to a constant
  const search = searchString.toLowerCase();

  // Takes data back from api call, sets the currentPokemon in the state
  const handleData = (data) => {
    // Create a pokemon object with only the parts of the returned data we need
    const pokemon = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      imageUrl: data.sprites.front_default,
    };
    // Set the current Pokemon to the pokemon object we just created
    changeCurrentPokemon(pokemon);
    console.log("Pokemon =", pokemon);
  };

  // onChange of search bar input
  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  // onSubmit of search form
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((res) => {
        console.log("res.data =", res.data);
        handleData(res.data);
      })
      .catch((err) => {
        // sorry, pokemon not found
        console.error(err);
      });
    setSearchString("");
  };

  // TODO: consider making an api call on every input change/keystroke

  // JSX to be returned
  let searchForm = (
    <form className="form" id="searchForPokemon" onSubmit={onSubmit}>
      <input
        type="text"
        className="input"
        id="addInput"
        placeholder="Seach for a Pokemon!"
        value={searchString}
        onChange={handleChange}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );

  // RETURN JSX
  return <div className="searchbar">{searchForm}</div>;
};

export default SearchBar;
