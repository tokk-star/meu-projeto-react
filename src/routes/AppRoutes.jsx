import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Favoritos from "../pages/Favoritos";
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";

export default function AppRoutes() {
        return (
        <>
        <BrowserRouter>
           <Link to="/">Home</Link>
           <Link to="/detalhes">Detalhes</Link>
           <Link to="/favoritos">Favoritos</Link>

           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalhes/:id" element={<Detalhes />} />
            <Route path="/favoritos" element={<Favoritos />} />
           </Routes>
        </BrowserRouter>
        </>
        );
        }