import React from "react";
// Components
import NavSearchBar from "./NavSearchBar";
import Title from "./Title";

const Navbar = (props) => {
  const { currentPokemon, changeCurrentPokemon } = props;

  let searchbar = currentPokemon.name ? (
    <NavSearchBar changeCurrentPokemon={changeCurrentPokemon} />
  ) : null;

  return (
    <div className="navbar">
      <div className="title-container">
        <Title />
      </div>
      <div className="nav-search-container">{searchbar}</div>
    </div>
  );
};

export default Navbar;
