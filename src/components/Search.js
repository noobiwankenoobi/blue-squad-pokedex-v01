import React from "react";
// Components
import LandingText from "./LandingText";
import Errors from "./Errors";

// SEARCHBAR COMPONENT
const Search = (props) => {
  // PROPS AND STATE CONSTS
  const {
    searchStyle,
    getPokemon,
    error,
    searchString,
    setSearchString,
  } = props;
  const { message } = error;

  // onChange of search bar input
  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  // Set lowercase pokemon search input to a constant
  const search = searchString.toLowerCase();

  // onSubmit of search form
  const onSubmit = (e) => {
    e.preventDefault();
    if (!searchString || searchString === "") {
      return;
    } else {
      getPokemon(search);
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
          maxLength="20"
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
          maxLength="20"
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
