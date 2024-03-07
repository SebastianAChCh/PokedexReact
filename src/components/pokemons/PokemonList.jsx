import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemon, cargar }) => {
  const [Load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(cargar);
  }, []);

  return Load ? (
    <h1>Cargando...</h1>
  ) : (
    <div className="card">
      <div className="card-body">
        <img className="image" src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="card-body">
        {pokemon.types.map((pokemonType, i) => {
          return pokemonType.slot > 1 ? (
            ""
          ) : (
            <div className={pokemonType.type.name + " card-footer"} key={i}>
              <h3>
                <Link className="link" to={`/pokemons/${pokemon.name}`}>
                  #{pokemon.id} {pokemon.name}
                </Link>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;
