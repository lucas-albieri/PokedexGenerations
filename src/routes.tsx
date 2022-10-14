import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/presentation";
import PokemonOfDay from "./pages/pokemonOfDay/presentation";


const RoutesService = () => {
    return (
        <Routes>
            <Route path="login/*" element={<Home />} />
            <Route path="paginanaoencontrada" element={<Home />} />
            <Route path="pokemondodia" element={<PokemonOfDay />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
};

export default RoutesService;