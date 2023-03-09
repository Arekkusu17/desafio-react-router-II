import "../assets/css/home.css"
import backgroundImage from '../assets/img/pokemon-cards-bg.jpg'

export default function Home() {
  return (
    <section>
      <h1 className="home-title">
        Bienvenido Maestro Pokémon
      </h1>
      <img src={backgroundImage} className="img-fluid bg-image" alt=""></img>
    </section>
  )
}
