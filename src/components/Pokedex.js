import React from "react";
import PokedexCard from "../components/PokedexCard";

function Pokedex(props) {
  return (
    <div className="pokedex">
      <PokedexCard currentPokemon={props.currentPokemon} />
    </div>
  );
}

export default Pokedex;
