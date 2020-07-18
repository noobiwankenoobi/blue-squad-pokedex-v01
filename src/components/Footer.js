import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-msg-wrapper">
        <h5 className="footer-text">
          This app proudly
          <br /> runs on the
        </h5>
        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
          <img src={require("../img/poke-api.png")} alt="pokeapi"></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
