import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Pokemons from "./views/Pokemons";
import PokemonDetalles from "./views/PokemonDetalles";
import NotFound from "./views/NotFound";

const App = () => {
    return (
        <>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemons" element={<Pokemons />} />
                    <Route
                        path="/pokemons/:name"
                        element={<PokemonDetalles />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
};

export default App;