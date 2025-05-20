import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Favoritos from "../Favoritos";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=300");
      const results = await Promise.all(
        res.data.results.map(async (p) => {
          const pokeDetails = await axios.get(p.url);
          return {
            name: p.name,
            id: pokeDetails.data.id,
            image: pokeDetails.data.sprites.other["official-artwork"].front_default,
          };
        })
      );
      setPokemons(results);
    }

    fetchPokemons();
  }, []);

  return (
    <div className="min-h-screen bg-green-50 p-6 font-sans">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Pokémons</h1>
      <div id="pokechart" className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-4">
        {pokemons.map((p) => (
          <Link
            key={p.id}
            to={`/pokemon/${p.id}`}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition duration-200 no-underline"
            style={{ textDecoration: "none" }}
          >
            <img src={p.image} alt={p.name} className="w-[180px] h-[180px] object-contain mb-2" />
            <h2 className="capitalize font-semibold text-gray-800 text-base">{p.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}


