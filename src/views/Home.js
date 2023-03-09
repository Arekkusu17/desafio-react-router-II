import "../assets/css/home.css"
import imageGif from "../assets/img/pokemon-img.gif"
import backgroundImage from '../assets/img/pokemon-cards-bg.jpg'

export default function Home() {
  return (
    <section>
      <h1 className="home-title mt-5">
        Bienvenido Maestro Pokémon
      </h1>
      <img src={imageGif} className="img-fluid bg-image mt-5" alt=""></img>
      <p><a href="https://giphy.com/gifs/pokemon-tv-show-pokeball-j2xgBIuAgmrpS">via GIPHY</a></p>
    </section>
  )
}
