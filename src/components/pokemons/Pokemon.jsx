import React from "react";

export default function Pokemon({ pokemon }) {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-body">
          {pokemon.sprites === undefined ? (
            <div>Cargando...</div>
          ) : (
            <img className="image" src={pokemon.sprites.front_default} alt="" />
          )}
        </div>
        <div className="card-body">
          {pokemon.types === undefined ? (
            <h3>Cargando...</h3>
          ) : (
            pokemon.types.map((pokemonType, i) => {
              return pokemonType.slot > 1 ? (
                ""
              ) : (
                <div key={i} className={pokemonType.type.name + " card-footer"}>
                  <h1>{pokemon.name}</h1>
                </div>
              );
            })
          )}
        </div>
        <div className="card-specific">
          {pokemon.types === undefined ? (
            <h3>Cargando...</h3>
          ) : (
            pokemon.types.map((pokemonType, i) => {
              return (
                <div key={i} className={pokemonType.type.name + " card-footer"}>
                  <h1>{pokemonType.type.name}</h1>
                </div>
              );
            })
          )}
        </div>
        {pokemon.sprites === undefined ? (
          <h3>Cargando</h3>
        ) : (
          <div className="tarjeta">
            <div>
              <img
                className="image"
                src={pokemon.sprites.front_default}
                alt=""
              />
              <p>Forma Normal</p>
            </div>
            <div>
              <img className="image" src={pokemon.sprites.front_shiny} alt="" />
              <p>Forma Shiny</p>
            </div>
          </div>
        )}
        <div className="abilidades">
          <div className="nombre-abilidad">
            <h2>Habilidades</h2>
          </div>
          {pokemon.abilities === undefined ? (
            <p>Cargando...</p>
          ) : (
            <div className="card-ability">
              {pokemon.abilities.map((abilidad) => {
                return (
                  <div key={abilidad.ability.name}>
                    <h2>{abilidad.ability.name}</h2>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
