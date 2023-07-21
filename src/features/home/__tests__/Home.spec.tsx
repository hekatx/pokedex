import { describe, it, expect } from "vitest";
import { Home } from "../routes/Home";
import { renderWithProviders } from "@/test-utils";
import { waitFor } from "@testing-library/react";
import { capitalize } from "@/utils/stringManipulation";
import { pokemonsMock } from "@/mocks/api/handler";

describe("<Home />", () => {
  it("should show fetched data", async () => {
    const res = renderWithProviders(<Home />);

    const title = await res.findByText("Pokedex");

    expect(title).toBeInTheDocument();

    await waitFor(() => {
      pokemonsMock.results.forEach(pokemon => {
        expect(res.getByText(capitalize(pokemon.name))).toBeInTheDocument();
      })
    });
  });
});
