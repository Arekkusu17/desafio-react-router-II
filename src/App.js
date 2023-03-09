import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import PokemonProvider from './context/PokemonProvider';
import Home from './views/Home';
import PokemonFeed from './views/PokemonFeed';
import PokemonProfile from './views/PokemonProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* AQUI EL PROVIDER DE POKEMON */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokemonFeed />} />
          <Route path="/pokemon/:name" element={<PokemonProfile />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
