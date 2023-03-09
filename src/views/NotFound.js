import pokeballGif from "../assets/img/pokeball.gif"
import "../assets/css/notFound.css"

import React from 'react'
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <>
      <section className="section-not-found">
        <h1>Ups !</h1>
        <p className="p-2 text-justify">El pokémon que estás buscando no sé encuentra disponible en este momento o posiblemente no existe aún.</p>

        <div className="container d-flex flex-column align-items-center back-to-home">
          <img src={pokeballGif} className="pokeball-gif" alt="" /><p><a href="https://giphy.com/gifs/pokemon-tv-show-pokeball-j2xgBIuAgmrpS">via GIPHY</a></p>
          <button
            type="button"
            className="nes-btn is-success w-50 mx-auto mt-3"
            onClick={() => {
              navigate('/');
            }}
          >
            Volver al Home
          </button>
        </div>
      </section>
    </>
  )
}

