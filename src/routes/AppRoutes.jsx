/* src/routes/AppRoutes.jsx */
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Detalhes";
import Favoritos from "../pages/Favoritos";
import Detalhes from "../pages/Detalhes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <nav className="p-4 space-x-4 bg-gray-50 mb-4">
        <Link id="headerItens" to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link id="headerItens" to="/favoritos" className="text-blue-600 hover:underline">Favoritos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Detalhes />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}
