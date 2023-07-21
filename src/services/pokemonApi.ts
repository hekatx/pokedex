import { padPokemonId } from "@/utils/stringManipulation";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokeAPI } from "pokeapi-types";

type GetPokemonsArgs = { offset: string; limit: string };

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPokemons: builder.query<PokeAPI.NamedAPIResourceList, GetPokemonsArgs>({
      query: ({ offset, limit }: Record<string, string>) => {
        const params = new URLSearchParams({ offset, limit });

        return `pokemon/?${params.toString()}`;
      },
    }),
    getPokemonByName: builder.query<PokeAPI.Pokemon, string>({
      query: (name: string) => `pokemon/${name}`,
    }),
    getPokemonById: builder.query({
      query: (id: number) => `pokemon/${id}`,
    }),
  }),
});

export const {
  useGetPokemonsQuery,
  useGetPokemonByNameQuery,
  useGetPokemonByIdQuery,
} = pokemonApi;

type PokemonImageCategory = "thumbnails-compressed" | "thumbnails" | "images";

export function getPokemonImageURL(
  id: number | string,
  type: PokemonImageCategory = "thumbnails-compressed"
) {
  return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/${type}/${padPokemonId(
    id
  )}.png`;
}

export function getTypeImageURL(type: number | string) {
  return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/${padPokemonId(
    type
  )}.svg`;
}
