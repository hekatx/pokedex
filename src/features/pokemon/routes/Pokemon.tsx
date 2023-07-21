import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import {
  getPokemonImageURL,
  useGetPokemonByNameQuery,
} from "@/services/pokemonApi";
import { theme } from "@/theme";
import { capitalize, padPokemonId } from "@/utils/stringManipulation";
import { useNavigate, useParams } from "react-router-dom";

const Header = theme.styled("header", {
  display: "flex",
  justifyContent: "space-between",
});

const TitleContainer = theme.styled("div", {
  textAlign: "center",
});

const MainSection = theme.styled("section", {
  marginTop: "2rem",
  display: "flex",
  gap: "$m",
  flexWrap: "wrap",
});

const ImageContainer = theme.styled("div", {
  width: "min-content",
  padding: "$m",
  borderRadius: "$radius",
});

export function Pokemon() {
  const navigate = useNavigate();
  const { name } = useParams();

  const { data: pokemon } = useGetPokemonByNameQuery(name as string);

  const paddedId = pokemon?.id ? padPokemonId(pokemon?.id) : "---";
  const formattedName = capitalize(name ?? "");
  const mainType = pokemon?.types.find((type) => type.slot === 1);

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <Header>
        <Button onClick={navigateBack}>Back</Button>
        <TitleContainer>
          <h1>{formattedName}</h1>
          <span>{paddedId}</span>
        </TitleContainer>
        <div />
      </Header>
      <MainSection>
        <ImageContainer css={{ backgroundColor: `$${mainType?.type.name}` }}>
          <img
            width="512"
            height="512"
            src={getPokemonImageURL(paddedId, "images")}
          />
        </ImageContainer>
        <div>
          {pokemon?.types.map(({ type }) => (
            <Badge css={{ backgroundColor: `$${type.name}` }} key={type.name}>
              {type.name}
            </Badge>
          ))}
        </div>
      </MainSection>
    </section>
  );
}
