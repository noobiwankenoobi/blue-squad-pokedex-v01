import React from "react";

// ARROW COMPONENT
function Arrow(props) {
  const { currentPokemonId, direction, getPokemon } = props;

  // Iterate id of next pokemon up or down 1 based on direction of arrow
  const prevPokemon = currentPokemonId - 1;
  const nextPokemon = currentPokemonId + 1;

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
