import React, { useState, useEffect, useContext } from "react";
import "./MainPage.scss";
import { FaSearch } from "react-icons/fa";
import colorsType from "../../colorsType";
import { PokemonContext } from "../context/PokemonContext";

const MainPage = () => {
  const [allPokemon, setAllPokemon, loadMore, setLoadMore] =
    useContext(PokemonContext);
  // console.log(allPokemon);

  return (
    <>
      <div className="search-container">
        <FaSearch className="search-icon" size="20px" />
        <input className="search-input" placeholder="Search..."></input>
      </div>

      <div className="cards-container">
        <ul className="cards">
          {allPokemon.map((pokemon) => (
            <li
              className="card"
              key={pokemon.id}
              style={{
                backgroundColor: colorsType[pokemon.types[0].type.name],
              }}
            >
              <h1>#{pokemon.id}</h1>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                className="card-img"
              />
              <h2>{pokemon.name}</h2>
              <div className="card-types">
                {pokemon.types.map((type) => (
                  <div
                    className="types"
                    // style={{ backgroundColor: colorsType[type.type.name] }}
                  >
                    {type.type.name}
                  </div>
                ))}
              </div>
              <h4>{pokemon.weight}Kg</h4>
              <h4>{pokemon.height * 10}Cm</h4>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MainPage;
