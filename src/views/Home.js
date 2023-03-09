import "../assets/css/home.css"
import imageGif from "../assets/img/pokemon-img.gif"

export default function Home() {
  return (
    <>
      <section className="home-view-section">
        <div className="container d-flex flex-column align-items-center pt-5">
          <h1 className="home-title">
            Bienvenido Maestro Pokémon
          </h1>
          <img src={imageGif} className="img-fluid bg-image mt-5" alt=""></img>
          <p><a href="https://giphy.com/gifs/pokemon-tv-show-pokeball-j2xgBIuAgmrpS">via GIPHY</a></p>
        </div>
      </section>

    </>
  )
}
