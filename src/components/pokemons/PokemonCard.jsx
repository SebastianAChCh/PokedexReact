import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../Api";
import Pokemon from "./Pokemon";

const PokemonCard = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const results = await getPokemon(id);
      setPokemon(results);
    };
    fetchPokemons();
  }, []);

  return (
    <>
      <Pokemon pokemon={pokemon}></Pokemon>
    </>
  );
};

export default PokemonCard;
