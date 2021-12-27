import React, { useContext } from "react";
import "./MainPage.scss";
import colorsType from "../../colorsType";
import { PokemonContext } from "../context/PokemonContext";
import PokemonInfo from "./PokemonInfo";

const MainPage = () => {
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
  // console.log(allPokemon);
  // console.log(searchPokemon);
  // console.log(pokemonInfo);

  return (
    <>
      {pokemonInfo && <PokemonInfo />}
      <div className="cards-container">
        <ul className="cards">
          {allPokemon
            .filter((pokemon) => pokemon.name.includes(searchPokemon))
            .map((pokemon) => (
              <li
                className="card"
                key={pokemon.id}
                style={{
                  backgroundColor: colorsType[pokemon.types[0].type.name],
                }}
                onClick={() => setPokemonInfo(pokemon)}
              >
                <h1>#{pokemon.id}</h1>
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  className="card-img"
                />
                <h2>{pokemon.name}</h2>
                <div className="card-types">
                  {pokemon.types.map((type) => (
                    <div className="types">
                      <div>{type.type.name}</div>
                      <img src={type.type.url} />
                    </div>
                  ))}
                </div>
                <button className="btn-add">Add to collection</button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default MainPage;
