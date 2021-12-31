import React, { useContext, useEffect, useState } from "react";
import "./MainPage.scss";
import colorsType from "../../colorsType";
import { PokemonContext } from "../context/PokemonContext";
import PokemonInfo from "./PokemonInfo";
import { ImInfo } from "react-icons/im";
import InfiniteScroll from "react-infinite-scroll-component";
import FadeLoader from "react-spinners/FadeLoader";

const MainPage = () => {
  const [
    allPokemon,
    setAllPokemon,
    searchPokemon,
    setSearchPokemon,
    pokemonInfo,
    setPokemonInfo,
    addPokemon,
    setAddPokemon,
    fetchNumber,
    setFetchNumber,
  ] = useContext(PokemonContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log(allPokemon);
  // console.log(searchPokemon);
  // console.log(pokemonInfo);
  // console.log(addPokemon);

  const addHandler = (pokemon) => {
    if (addPokemon.includes(pokemon)) {
      setAddPokemon((prev) => [...prev]);
    } else setAddPokemon((prev) => [...prev, pokemon]);
    // console.log(pokemon);
  };

  const infiniteHandler = () => {
    setIsLoading(true);
    setAllPokemon((prev) => (prev = []));
    setTimeout(() => {
      setFetchNumber(fetchNumber + 3);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div>
      {pokemonInfo && <PokemonInfo />}
      {isLoading ? (
        <div className="loading-container">
          <FadeLoader color={"#fff"} loading={isLoading} size={50} />
        </div>
      ) : (
        <div className="cards-container">
          <ul className="cards">
            <InfiniteScroll
              className="cards"
              dataLength={allPokemon.length}
              next={infiniteHandler}
              hasMore={true}
            >
              {allPokemon
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
                    <img
                      src={pokemon.sprites.other.dream_world.front_default}
                      className="card-img"
                      alt={pokemon.name}
                    />
                    <h2>{pokemon.name.toUpperCase()}</h2>
                    <div className="card-types">
                      {pokemon.types.map((type, idx) => (
                        <div className="types" key={idx}>
                          <div>{type.type.name}</div>
                        </div>
                      ))}
                    </div>
                    <button
                      className="btn-add"
                      onClick={() => addHandler(pokemon)}
                    >
                      Add to collection
                    </button>
                  </li>
                ))}
            </InfiniteScroll>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainPage;
