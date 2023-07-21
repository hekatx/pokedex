import {
  getPokemonImageURL,
  useGetPokemonByNameQuery,
} from "@/services/pokemonApi";
import { theme } from "@/theme";
import { capitalize, padPokemonId } from "@/utils/stringManipulation";
import { PokeAPI } from "pokeapi-types";
import { Link } from "react-router-dom";

const Container = theme.styled("article", {
  borderRadius: "$radius",
  background: "$gray500",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "215px",
  width: "215px",
  padding: "$m",
  placeContent: "center",

  "& img": {
    marginBottom: "$s",
  },
});

export function PokemonCard({
  pokemonResource,
}: {
  pokemonResource: PokeAPI.NamedAPIResource;
}) {
  const { data: pokemon } = useGetPokemonByNameQuery(pokemonResource.name);

  const paddedId = pokemon?.id ? padPokemonId(pokemon?.id) : "---";
  const formattedName = capitalize(pokemonResource.name);
  const mainType = pokemon?.types.find((type) => type.slot === 1);

  return (
    <Link to={`/pokemon/${pokemonResource.name}`}>
      <Container css={{ backgroundColor: `$${mainType?.type.name}` }}>
        {pokemon && (
          <img
            width="215"
            height="215"
            src={getPokemonImageURL(pokemon?.id)}
            alt={`An illustration of the pokemon ${pokemon?.name}`}
          />
        )}
        <span>{formattedName}</span>
        <span>{paddedId}</span>
      </Container>
    </Link>
  );
}
