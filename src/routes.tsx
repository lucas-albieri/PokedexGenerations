import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/presentation";


const RoutesService = () => {
    return (
        <Routes>
            <Route path="login/*" element={<Home />} />

            <Route path="paginanaoencontrada" element={<Home />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
};

export default RoutesService;