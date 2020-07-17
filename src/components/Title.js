import React from "react";

const Title = () => {
  const pokeballUrl =
    "https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG";

  return (
    <div className="title-container">
      <img src={pokeballUrl} alt="pokeball"></img>
      <h2 className="title-text">Blue Squad Pokedex</h2>
    </div>
  );
};

export default Title;
