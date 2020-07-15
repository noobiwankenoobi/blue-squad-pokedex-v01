import React from "react";
import axios from "axios";

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

    //
    changeCurrentPokemon(pokemon);
    console.log("Pokemon =", pokemon);
  };

  const newPokemonId =
    direction === "right" ? currentPokemonId + 1 : currentPokemonId - 1;

  const onClick = (e) => {
    e.preventDefault();
    // Axios Call based on id
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${newPokemonId}`)
      .then((res) => {
        console.log("res.data =", res.data);
        handleData(res.data);
      })
      .catch((err) => {
        // sorry, pokemon not found
        console.error(err);
      });
  };

  const leftArrow = (
    <button className="arrow-btn" onClick={onClick}>
      <i className="fa fa-angle-double-left"></i>
    </button>
  );

  const rightArrow = (
    <button className="arrow-btn" onClick={onClick}>
      <i className="fa fa-angle-double-right"></i>
    </button>
  );

  // JSX return
  return direction === "right" ? rightArrow : leftArrow;
}

export default Arrow;
