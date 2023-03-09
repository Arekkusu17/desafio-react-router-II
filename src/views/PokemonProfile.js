import "../assets/css/pokemonProfile.css"
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from "react-spinners";

export default function PokemonProfile() {

  const { name: pokemonName } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [loadingPokemonInfo, setLoadingPokemonInfo] = useState(false)


  const navigate = useNavigate();

  useEffect(() => {
    const getPokemonInfo = async () => {
      setLoadingPokemonInfo(true);
      console.log("cargando");
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
        .then((response) => {
          console.log(response.data);
          setTimeout(() => {
            setPokemonInfo(response.data);
            setLoadingPokemonInfo(false);
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          setLoadingPokemonInfo(false);
          navigate('/error')
        });
    };
    getPokemonInfo();
  }, []);



  return (
    <>
      <section className="pokemon-profile-section">
        {pokemonInfo ? (
          <>
            {loadingPokemonInfo ? (
              <div className="loader">
                <ClipLoader size="250px" color="#e22121" loading={loadingPokemonInfo} />
              </div>
            ) : (
              <>
                <div className={`nes-container is-rounded poke-card card mb-3 mx-auto `}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={pokemonInfo.sprites.other['official-artwork'].front_default}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body d-flex flex-column h-100 justify-content-center align-items-center gap-2">
                        <h5 className="card-title text-capitalize">
                          #{pokemonInfo.id} - {pokemonInfo.name}
                        </h5>
                        <div className=" card-text poke-info-text">
                          {pokemonInfo.types.map((type, idx) => {
                            return (
                              <div
                                key={idx}
                                className={`pokemon-type-text ${type.type.name}`}
                              >
                                {type.type.name}
                              </div>
                            );
                          })}
                        </div>
                        <div className="text-start d-flex justify-content-center">
                          <ul className="card-text base-stats text-capitalize">
                            {pokemonInfo.stats.map((stat, idx) => {
                              return (
                                <li key={idx}>
                                  {stat.stat.name}: {stat.base_stat}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="nes-btn is-success w-50 mx-auto"
                  onClick={() => {
                    navigate('/pokemon');
                  }}
                >
                  Volver a Selección de Pokémon
                </button>
              </>
            )}
          </>
        ) : (
          <div className="loader">
            <ClipLoader size="250px" color="#e22121" loading={!pokemonInfo} />
          </div>
        )}
      </section>
    </>
  );

}



// {


