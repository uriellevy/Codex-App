import React, { useState, createContext, useEffect } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState("");
  const [fetchNumber, setFetchNumber] = useState(3);
  const [addPokemon, setAddPokemon] = useState(() => {
    const localData = localStorage.getItem("collection");
    return localData ? JSON.parse(localData) : [];
  });

  // add data to localstorage:
  useEffect(() => {
    localStorage.setItem("collection", JSON.stringify(addPokemon));
  }, [addPokemon]);

  // console.log(colorsType.bug);

  const getAllPokemons = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${fetchNumber}`
    );
    const data = await res.json();
    // console.log(data.results);

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
    // console.log(data.results);
  };

  // console.log(allPokemon);

  useEffect(() => {
    getAllPokemons();
  }, [fetchNumber]);

  // console.log(fetchNumber);
  // console.log(cartItems);

  return (
    <PokemonContext.Provider
      value={[
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
      ]}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};
