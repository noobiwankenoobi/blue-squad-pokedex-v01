import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-msg-wrapper">
        <h4 className="footer-text">
          This app proudly
          <br /> runs on the
        </h4>
        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://pokeapi.co/static/pokeapi_256.888baca4.png"
            alt="pokeapi"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
