import React from "react";
import axios from "axios";

// ARROW COMPONENT
function Arrow(props) {
  const { changeCurrentPokemon, currentPokemonId, direction } = props;

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
    // Sets current pokemon
    changeCurrentPokemon(pokemon);
  };

  // Iterate id of next pokemon up or down 1 based on direction of arrow
  const prevPokemon = currentPokemonId - 1;
  const nextPokemon = currentPokemonId + 1;

  // API Call by Id
  const getPokemon = (pokemonIdent) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonIdent}`)
      .then((res) => {
        handleData(res.data);
      })
      .catch((err) => {
        // sorry, pokemon not found
        console.error(err);
      });
  };

  // Makes api call on arrow click, doesn't allow negative Id numbers when clicking left
  const onClick = (e) => {
    e.preventDefault();
    // Axios Call based on id
    if (currentPokemonId >= 2 && direction === "left") {
      getPokemon(prevPokemon);
    } else if (currentPokemonId >= 0 && direction === "right") {
      getPokemon(nextPokemon);
    } else return;
  };

  // JSX of left and right arrow
  const leftArrow = (
    <div className="arrow-btn" onClick={onClick}>
      <i className="fa fa-angle-double-left"></i>
    </div>
  );

  const rightArrow = (
    <div className="arrow-btn" onClick={onClick}>
      <i className="fa fa-angle-double-right"></i>
    </div>
  );

  // JSX return based on direction from props
  return direction === "right" ? rightArrow : leftArrow;
}

export default Arrow;
