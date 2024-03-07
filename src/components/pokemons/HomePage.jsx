import React from "react";
import { useEffect, useState } from "react";
import { getPokemonUrl } from "../Api";
import PokemonList from "./PokemonList";

const HomePage = () => {
  const [api, setApi] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [Load, setLoad] = useState(true);

  useEffect(() => {
    const PokemonApi = async () => {
      const result = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
      );
      const data = await result.json();
      setApi(data.results);
    };
    PokemonApi();
  }, []);

  useEffect(() => {
    const fetchPokemons = async () => {
      const promise = api.map(async (pokemonUrl) => {
        return await getPokemonUrl(pokemonUrl.url);
      });
      const pokemons = await Promise.all(promise);
      setPokemon(pokemons);
    };
    fetchPokemons();
  }, [api]);

  return (
    <div className="App">
      {pokemon.map((pokemones) => {
        return (
          <PokemonList
            key={pokemones.name}
            cargar={!Load}
            pokemon={pokemones}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
