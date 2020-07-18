import React from "react";

// POKEDEX CARD COMPONENT
function PokedexCard(props) {
  // Props destructuring
  const { currentPokemon } = props;
  const { name, height, weight, id, imageUrl } = currentPokemon;
  // Make name capitalized
  const capName = name.charAt(0).toUpperCase() + name.substring(1);

  // Stat Conversion functions
  const hectToKilo = (weight) => {
    return weight / 10;
  };

  const deciToMeter = (height) => {
    return height / 10;
  };

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
          <div className="info-row">
            <h2 className="info-field-title">#</h2>
            <h2 className="info-field-content">{id}</h2>
          </div>
          <div className="info-row">
            <p className="info-field-title">NAME</p>
            <h3 className="info-field-content">{capName}</h3>
          </div>
          <div className="info-row">
            <p className="info-field-title">HEIGHT</p>
            <h3 className="info-field-content">{deciToMeter(height)}m</h3>
          </div>
          <div className="info-row">
            <p className="info-field-title">WEIGHT</p>
            <h3 className="info-field-content">{hectToKilo(weight)}kg</h3>
          </div>
        </div>
      </div>
    </div>
  );

  // Return JSX
  return pokedexcard;
}

export default PokedexCard;
