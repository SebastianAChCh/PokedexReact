export const getPokemonUrl = async (url) => {
  const Urls = await fetch(url);
  const data = await Urls.json();
  return data;
};

export const getPokemon = async (pokemon) => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await result.json();
  return data;
};
