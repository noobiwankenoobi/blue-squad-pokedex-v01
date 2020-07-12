import React from "react";

function Pokedex(props) {
  return (
    <div className="pokedex">
      <h1>Name: {props.currentPokemon.name}</h1>
      <h1>Height: {props.currentPokemon.height}</h1>
      <h1>Weight: {props.currentPokemon.weight}</h1>
      <h1>Id: {props.currentPokemon.id}</h1>
      <img src={props.currentPokemon.imageUrl} alt="pokemon"></img>
    </div>
  );
}

export default Pokedex;
