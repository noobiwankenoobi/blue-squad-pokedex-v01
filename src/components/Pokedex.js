import React, { useState } from "react";
// Components
import PokedexCard from "../components/PokedexCard";
import LeftArrow from "../components/LeftArrow";
import RightArrow from "../components/RightArrow";

function Pokedex(props) {
  const { currentPokemon } = props;
  // const {
  //   currentPokemon: [currentPokemon, setCurrentPokemon],
  // } = {
  //   currentPokemon: useState({}),
  //   ...(props.state || {}),
  // };

  return (
    <div className="pokedex">
      <LeftArrow currentPokemon={currentPokemon} />
      <PokedexCard currentPokemon={currentPokemon} />
      <RightArrow
        state={{ currentPokemon: [currentPokemon, setCurrentPokemon] }}
      />
    </div>
  );
}

export default Pokedex;
