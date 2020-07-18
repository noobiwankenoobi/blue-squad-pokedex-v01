import React from "react";

const Title = () => {
  return (
    <div className="title-container">
      <img src={require("../img/pokeball-1.png")} alt="pokeball"></img>
      <h2 className="title-text">Blue Squad Pokedex</h2>
    </div>
  );
};

export default Title;
