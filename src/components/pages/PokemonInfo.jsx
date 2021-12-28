import React, { useContext, useState } from "react";
import "./PokemonInfo.scss";
import { PokemonContext } from "../context/PokemonContext";
import colorsType from "../../colorsType";
import { ImCross } from "react-icons/im";

const PokemonInfo = () => {
  const [
    allPokemon,
    setAllPokemon,
    loadMore,
    setLoadMore,
    searchPokemon,
    setSearchPokemon,
    pokemonInfo,
    setPokemonInfo,
  ] = useContext(PokemonContext);

  const closeHandler = () => {
    setPokemonInfo("");
  };

  // console.log(pokemonInfo);
  return (
    <>
      <div className="backdrop" />
      <div className={pokemonInfo && "modal"}>
        <ImCross className="cross-icon" onClick={closeHandler} />
        <div
          className="modal-left"
          style={{
            backgroundColor: colorsType[pokemonInfo.types[0].type.name],
          }}
        >
          <h1>#{pokemonInfo.id}</h1>
          <img src={pokemonInfo.sprites.other.dream_world.front_default} />
          <div className="modal-types">
            <h4>
              {pokemonInfo.types.map((type) => (
                <div>{type.type.name}</div>
              ))}
            </h4>
            <h4></h4>
          </div>
        </div>
        <div className="modal-right">
          <div className="info">
            <h3>Info</h3>
            <ul>
              <li>Height: {pokemonInfo.height * 10} [cm]</li>
              <li>Weight: {pokemonInfo.weight} [Kg]</li>
              <li>
                abilities:{" "}
                {pokemonInfo.abilities.map((ability) => (
                  <div>{ability.ability.name}</div>
                ))}
              </li>
              <li>Base Exp: {pokemonInfo.base_experience}</li>
            </ul>
          </div>
          <div className="stats">
            <h3>Stats</h3>
            <ul className="stat">
              <li>HP:{pokemonInfo.stats[0].base_stat}</li>
              <li>Atk:{pokemonInfo.stats[1].base_stat}</li>
              <li>Def:{pokemonInfo.stats[2].base_stat}</li>
              <li>Sp.Atk:{pokemonInfo.stats[3].base_stat}</li>
              <li>Sp.Def:{pokemonInfo.stats[4].base_stat}</li>
              <li>Speed:{pokemonInfo.stats[5].base_stat}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonInfo;
