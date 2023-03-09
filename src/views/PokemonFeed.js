import "../assets/css/pokemonFeed.css"

import React, { useEffect, useState } from 'react'
import axios from "axios";

import { useNavigate } from 'react-router-dom'


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
    <section className='select-pokemon-section '>
      <div className="nes-container is-rounded  d-flex flex-column gap-2">
        <label htmlFor="default_select">Selecciona un Pokémon:</label>
        <div className="nes-select ">
          <select id="default_select" className="form-select w-100 mx-auto" defaultValue={""} onChange={handleSelectChange}>
            <option value="" disabled>Selecciona un Pokémon</option>
            {
              pokemonList.map((pokemon) => (
                <option key={pokemon.url} value={pokemon.name}>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </option>

              ))}
          </select>
        </div>
        <button type="button" className={`btn nes-btn is-error ${!selectedPokemon && "is-disabled"} mx-auto`} onClick={() => { handleClick() }} disabled={!selectedPokemon}>
          Ver Detalle
        </button>
        {!selectedPokemon && <p className="p-5 "><small className="nes-text is-error">El botón está desahibilitado hasta elegir una opción</small></p>}

      </div>
    </section>

  )
}
