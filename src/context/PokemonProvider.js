import React, { useEffect, useState } from "react";
import axios from "axios";
export const PokemonContext = React.createContext();

const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemonData = async () => {
    // const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    // // console.log(response.data.results)
    // const results = response.data.results
    // return results

    await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => {
        console.log(response.data.results);
        setPokemonList(response.data.results)
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    getPokemonData()
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonList }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider


