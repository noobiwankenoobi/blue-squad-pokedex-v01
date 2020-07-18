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
    console.log("Pokemon =", pokemon);
  };

  // Iterate id of next pokemon up or down 1 based on direction of arrow
  const newPokemonId =
    direction === "right" ? currentPokemonId + 1 : currentPokemonId - 1;

  // API Call by Id
  const getPokemon = () => {
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

  // Makes api call on arrow click, doesn't allow negative Id numbers when clicking left
  const onClick = (e) => {
    e.preventDefault();
    // Axios Call based on id
    if (currentPokemonId >= 2 && direction === "left") {
      getPokemon();
    } else if (currentPokemonId >= 0 && direction === "right") {
      getPokemon();
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
