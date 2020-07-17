import React from "react";

// POKEDEX CARD COMPONENT
function PokedexCard(props) {
  // Props destructuring
  const { currentPokemon } = props;
  const { name, height, weight, id, imageUrl } = currentPokemon;
  // Make name capitalized
  const capName = name.charAt(0).toUpperCase() + name.substring(1);

  // Pokedex JSX
  let pokedexcard = (
    <div className="pokedex-card">
      <div className="img-section">
        <div className="img-container">
          <img src={imageUrl} alt="pokemon" className="sprite-img"></img>
        </div>
      </div>

      <div className="info-section">
        <div className="info-box">
          <p>#</p>
          <h4>{id}</h4>
          <p>NAME</p>
          <h4>{capName}</h4>
          <p>HEIGHT</p>
          <h4>{height}</h4>
          <p>WEIGHT</p>
          <h4>{weight}</h4>
        </div>
      </div>
    </div>
  );

  // Return JSX
  return pokedexcard;
}

export default PokedexCard;
