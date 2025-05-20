import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detalhes() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      setPokemon(res.data);
    });
  }, [id]);

  if (!pokemon) return <p className="p-6 text-green-700">Carregando...</p>;

  return (
    <div className="min-h-screen bg-green-50 p-6 flex justify-center items-center">
      <div id="pokechartDetails" className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border-2 border-green-300">
        <h1 className="text-3xl font-bold capitalize text-green-800 mb-4">{pokemon.name}</h1>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="w-40 h-40 mx-auto mb-4"
        />
        <h2 className="text-green-600 text-lg mb-2">ID: {pokemon.id}</h2>
        <h2 className="text-green-500 mb-4">Altura: {pokemon.height / 10} m | Peso: {pokemon.weight / 10} kg</h2>
        <div id="idk" className="flex flex-wrap justify-center gap-2">
          {pokemon.types.map((t) => (
            <span key={t.type.name} className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm capitalize">
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
