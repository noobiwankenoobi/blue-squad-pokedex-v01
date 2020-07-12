import React, { useState } from "react";
import axios from "axios";

const SearchBar = (props) => {
  // Sets SearchBar state
  const [searchString, setSearchString] = useState("");
  // Sets currentPokemon state
  // const [currentPokemon, setCurrentPokemon] = useState({});
  const {
    currentPokemon: [currentPokemon, setCurrentPokemon],
  } = {
    currentPokemon: useState({}),
    ...(props.state || {}),
  };

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

    //
    setCurrentPokemon(pokemon);
    console.log("Pokemon =", pokemon);
  };

  // onChange of search bar input
  const onChange = (e) => {
    setSearchString(e.target.value);
  };

  // onSubmit of search form
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(searchString);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${searchString}`)
      .then((res) => {
        console.log(res.data);
        handleData(res.data);
      })
      .catch((err) => {
        // sorry, pokemon not found
        console.error(err);
      });
    setSearchString("");
  };

  // TODO: reset the search input and state after submit
  // TODO: consider making an api call on every input change

  // JSX to be returned
  let searchForm = (
    <form className="form" id="searchForPokemon" onSubmit={onSubmit}>
      <input
        type="text"
        className="input"
        id="addInput"
        placeholder="Seach for Pokemon"
        value={searchString}
        onChange={onChange}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );

  // RETURN JSX
  return searchForm;
};

export default SearchBar;
