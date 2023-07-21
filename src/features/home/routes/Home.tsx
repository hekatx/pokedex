import { useGetPokemonsQuery } from "../../../services/pokemonApi";
import { PokemonCard } from "../components/PokemonCard";
import { Spinner } from "@/components/Spinner";
import { useState } from "react";
import { Grid } from "../components/Grid";
import { Title } from "../components/Title";
import { Button } from "@/components/Button";
import { theme } from "@/theme";

const PAGE_SIZE = 20;

const PaginationContainer = theme.styled("div", {
  width: "min-content",
  margin: "$m 0 0 auto",
  display: "flex",
  gap: "$m",
});

export function Home() {
  const [page, setPage] = useState(0);
  const {
    data: pokemons,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPokemonsQuery({
    offset: `${page * PAGE_SIZE}`,
    limit: `${PAGE_SIZE}`,
  });

  let content;

  if (isLoading) {
    content = <Spinner />;
  } else if (isSuccess) {
    content = (
      <Grid>
        {pokemons?.results?.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemonResource={pokemon} />
        ))}
      </Grid>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <section>
      <Title>Pokedex</Title>
      {content}
      <PaginationContainer>
        <Button onClick={() => setPage(page - 1)}>Previous</Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </PaginationContainer>
    </section>
  );
}
