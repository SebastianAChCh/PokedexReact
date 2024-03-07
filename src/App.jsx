import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pokemons/HomePage";
import PokemonCard from "./components/pokemons/PokemonCard";
import Cabecera from "./components/Cabecera";

const App = () => {
  return (
    <>
      <Cabecera></Cabecera>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons/:id" element={<PokemonCard></PokemonCard>} />
      </Routes>
    </>
  );
};

export default App;
