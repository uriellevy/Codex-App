import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import { FaSearch } from "react-icons/fa";
import colorsType from "../../colorsType";

const MainPage = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  );

  // console.log(colorsType.bug);

  const colors = (pokemon) => {
    const color = pokemon.types[0].type.name;
  };

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    // console.log(data.results);
    setLoadMore(data);

    function createPokemon(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemon((curr) => [...curr, data]);
      });
    }
    createPokemon(data.results);
  };

  console.log(allPokemon);

  useEffect(() => {
    getAllPokemons();
  }, []);

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
              style={{ backgroundColor: colorsType.water }}
            >
              <h4>#{pokemon.id}</h4>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                className="card-img"
              />
              <h2>{pokemon.name}</h2>
              <div className="card-types">
                {pokemon.types.map((type) => (
                  <div className="types">{type.type.name}</div>
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
