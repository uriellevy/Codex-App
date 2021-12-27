import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.scss";
import { PokemonContext } from "./context/PokemonContext";

const Search = () => {
  const [
    allPokemon,
    setAllPokemon,
    loadMore,
    setLoadMore,
    searchPokemon,
    setSearchPokemon,
  ] = useContext(PokemonContext);

  const searchHandler = (e) => {
    setSearchPokemon(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div className="search-container">
      <FaSearch className="search-icon" size="20px" />
      <input
        className="search-input"
        placeholder="Search..."
        onChange={searchHandler}
      ></input>
    </div>
  );
};

export default Search;
