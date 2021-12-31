import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { ImInfo } from "react-icons/im";
import { GiPokecog } from "react-icons/gi";
import "./MainPage.scss";
import colorsType from "../../colorsType";
import PokemonInfo from "./PokemonInfo";

const Collection = () => {
  const [
    allPokemon,
    setAllPokemon,
    searchPokemon,
    setSearchPokemon,
    pokemonInfo,
    setPokemonInfo,
    addPokemon,
    setAddPokemon,
  ] = useContext(PokemonContext);

  const deleteHandler = (id) => {
    setAddPokemon(addPokemon.filter((curr) => curr.id !== id));
  };

  return (
    <>
      {pokemonInfo && <PokemonInfo />}
      <div className="cards-container">
        <ul className="cards">
          {addPokemon
            .filter((pokemon) => pokemon.name.includes(searchPokemon))
            .map((pokemon, idx) => (
              <li
                className="card"
                key={idx}
                style={{
                  backgroundColor: colorsType[pokemon.types[0].type.name],
                }}
              >
                <h1>#{pokemon.id}</h1>
                <ImInfo
                  size="40px"
                  className="info-icon"
                  onClick={() => setPokemonInfo(pokemon)}
                />
                <GiPokecog
                  size="50px"
                  className="info-icon-delete"
                  onClick={() => deleteHandler(pokemon.id)}
                />

                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  className="card-img"
                />
                <h2>{pokemon.name.toUpperCase()}</h2>
                <div className="card-types">
                  {pokemon.types.map((type, idx) => (
                    <div className="types" key={idx}>
                      <div>{type.type.name}</div>
                    </div>
                  ))}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Collection;
