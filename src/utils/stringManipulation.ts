export const padPokemonId = (id: number | string) => {
  id = id.toString();
  const is4thGen = id.length >= 4;
  // PokeAPI ids have no leading zeros and the img resources
  // do have at most 2 leading zeros so we need to pad appropietly
  while (id.length < 3 && !is4thGen) {
    id = `0${id}`;
  }

  return id;
};

export const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);
