import React, { Component } from "react";
import axios from "axios";

class SearchBar extends Component {
  state = {
    searchString: "",
    currentPokemon: {},
  };

  onChange = (e) => {
    this.setState({ searchString: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchString);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.state.searchString}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ currentPokemon: res.data });
      })
      .catch((err) => {
        // sorry, pokemon not found
        console.error(err);
      });
  };

  render() {
    let searchForm = (
      <form className="form" id="searchForPokemon" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Seach for Pokemon"
          value={this.state.searchString}
          onChange={this.onChange}
        />
        <button className="button" onClick={this.searchPokemon}>
          Search
        </button>
      </form>
    );

    return searchForm;
  }
}

export default SearchBar;
