import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './views/Home';
import NotFound from './views/NotFound';
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
          <Route path="*" element={<NotFound />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
