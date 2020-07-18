import React, { useState } from "react";
import axios from "axios";
// Components
import LandingText from "./LandingText";
import Errors from "./Errors";
// Array for filter
// import pokeNameArray from "../util/pokenames";

// SEARCHBAR COMPONENT
const Search = (props) => {
  // PROPS AND STATE CONSTS
  // Sets SearchBar state
  const [searchString, setSearchString] = useState("");
  // Gets currentPokemon setter function from props so it can be called inside SearchBar
  const { changeCurrentPokemon, searchStyle } = props;
  // Error handling
  const [error, setError] = useState({
    errorCode: null,
    message: "",
  });
  const { message } = error;

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
  };

  // onChange of search bar input
  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  // Set lowercase pokemon search input to a constant
  const search = searchString.toLowerCase();

  // AXIOS Gets Pokemon from search string
  const getPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((res) => {
        setError({ errorCode: null, message: "" });
        handleData(res.data);
        setSearchString("");
      })
      .catch((err) => {
        handleErrors();
      });
  };

  const handleErrors = () => {
    setError({ errorCode: 404, message: "Can't find Pokemon" });
  };

  // onSubmit of search form
  const onSubmit = (e) => {
    e.preventDefault();
    if (!searchString || searchString === "") {
      return;
    } else {
      getPokemon();
    }
  };

  let errorDiv = error.message ? <Errors errorMessage={message} /> : null;

  // MAIN PAGE SEARCH JSX
  let mainSearch = (
    <div className="searchbar-container">
      <LandingText />
      <form className="form" id="searchForPokemon" onSubmit={onSubmit}>
        <input
          type="text"
          className="search-input"
          id="addInput"
          placeholder="Enter name or #"
          value={searchString}
          onChange={handleChange}
        />
        <button className="search-btn" type="submit">
          <i className="fa fa-search search-icon" aria-hidden="true"></i>
        </button>
      </form>
      {errorDiv}
    </div>
  );

  // NAV SEARCH JSX
  let navSearch = (
    <div className="nav-searchbar-container">
      <form className="nav-form" id="searchForPokemon" onSubmit={onSubmit}>
        <input
          type="text"
          className="nav-search-input"
          id="addInput"
          placeholder="Search..."
          value={searchString}
          onChange={handleChange}
        />
        <button className="nav-search-btn" type="submit">
          <i className="fa fa-search nav-search-icon" aria-hidden="true"></i>
        </button>
      </form>
      <div className="nav-error-div">{errorDiv}</div>
    </div>
  );

  // JSX to be returned based on what style is passed in props
  // Main and nav versions have slightly different styling
  let searchBar = searchStyle === "nav" ? navSearch : mainSearch;

  // RETURN JSX
  return searchBar;
};

export default Search;
