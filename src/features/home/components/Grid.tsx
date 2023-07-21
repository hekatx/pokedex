import { theme } from "@/theme";

export const Grid = theme.styled("section", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr));",
  gap: "2rem",

  "& a": {
    color: "inherit",
    textDecoration: "inherit",

    placeContent: "center",
  },
});
