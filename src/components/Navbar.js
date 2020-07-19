import React from "react";
// Components
import Search from "./Search";
import Title from "./Title";

const Navbar = (props) => {
  const {
    currentPokemon,
    changeCurrentPokemon,
    searchStyle,
    getPokemon,
    error,
    searchString,
    setSearchString,
  } = props;

  let searchbar = currentPokemon.name ? (
    <Search
      changeCurrentPokemon={changeCurrentPokemon}
      searchStyle={searchStyle}
      getPokemon={getPokemon}
      error={error}
      searchString={searchString}
      setSearchString={setSearchString}
    />
  ) : null;

  return (
    <div className="navbar">
      <Title />
      <div className="nav-search-container">{searchbar}</div>
    </div>
  );
};

export default Navbar;
