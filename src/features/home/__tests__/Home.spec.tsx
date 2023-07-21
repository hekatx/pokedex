import { rest } from "msw";
import { describe, it, expect } from "vitest";
import { Home } from "../routes/Home";
import { server } from "@/mocks/api/server";
import { renderWithProviders } from "@/test-utils";

describe("<Home />", () => {
  it("should show fetched data", () => {
    server.use(
      rest.get(`*`, (req, res, ctx) => {
        const arg = req.url.searchParams.getAll("page");
        console.log(arg);
        return res(ctx.json({}));
      })
    );
    const res = renderWithProviders(<Home />);

    const title = res.findByText("Pokedex");

    expect(title).toBeInTheDocument();
  });
});
