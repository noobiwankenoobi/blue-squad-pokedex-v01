import React from "react";
// Components
import PokedexCard from "../components/PokedexCard";
import LeftArrow from "../components/LeftArrow";
import RightArrow from "../components/RightArrow";

function Pokedex(props) {
  const { currentPokemon } = props;
  const { id } = currentPokemon;

  return (
    <div className="pokedex">
      <LeftArrow id={id} />
      <PokedexCard currentPokemon={currentPokemon} />
      <RightArrow id={id} />
    </div>
  );
}

export default Pokedex;
