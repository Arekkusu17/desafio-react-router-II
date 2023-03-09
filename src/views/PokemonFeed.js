import "../assets/css/pokemonFeed.css"

import React, { useEffect, useState } from 'react'
import axios from "axios";

import { useNavigate } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonProvider'


export default function PokemonFeed() {

  const [pokemonList, setPokemonList] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const getPokemonData = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      console.log(response.data.results);
      setPokemonList(response.data.results)
    };
    getPokemonData()
  }, []);

  const handleClick = () => {
    navigate(`/pokemon/${selectedPokemon.name}`)
  }

  const handleSelectChange = (event) => {
    const selectedPokemonName = event.target.value;
    const selectedPokemon = pokemonList.find(pokemon => pokemon.name === selectedPokemonName);
    setSelectedPokemon(selectedPokemon);
    console.log(selectedPokemon);
  }

  return (
    <section className='select-pokemon-section d-flex flex-column gap-2'>
      <h1>
        Selecciona un Pokémon:
      </h1>
      <select className="form-select w-25 mx-auto" defaultValue={""} onChange={handleSelectChange}>
        <option value="" disabled>Selecciona un Pokémon</option>
        {
          pokemonList.map((pokemon) => (
            <option key={pokemon.url} value={pokemon.name}>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </option>

          ))}
      </select>
      <button type="button" className="btn btn-danger w-25 mx-auto" onClick={() => { handleClick() }} disabled={!selectedPokemon}>
        Ver Detalle
      </button>
      {!selectedPokemon && <p className="p-5 "><small className="">El botón está desahibilitado hasta elegir una opción</small></p>}

    </section>

  )
}
