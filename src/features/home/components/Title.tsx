import { theme, revealUp } from "@/theme";

export const Title = theme.styled("h1", {
  fontSize: "$xl",
  textAlign: "center",
  animation: `${revealUp} 250ms`,
});
