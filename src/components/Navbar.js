import React from "react";
// Components
import SearchBar from "./SearchBar";
import Title from "./Title";

const Navbar = (props) => {
  const { currentPokemon, changeCurrentPokemon, searchStyle } = props;

  let searchbar = currentPokemon.name ? (
    <SearchBar
      changeCurrentPokemon={changeCurrentPokemon}
      searchStyle={searchStyle}
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
