import React, { useState, createContext, useEffect } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  );

  // console.log(colorsType.bug);

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

  // console.log(allPokemon);

  useEffect(() => {
    getAllPokemons();
  }, []);

  // console.log(cartItems);

  return (
    <PokemonContext.Provider
      value={[allPokemon, setAllPokemon, loadMore, setLoadMore]}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};
