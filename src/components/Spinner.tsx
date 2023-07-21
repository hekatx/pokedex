import { theme } from "@/theme";

const Container = theme.styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const spinner = theme.keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

const SpinnerLoader = theme.styled("div", {
  dispaly: "inline-block",
  width: "48px",
  height: "48px",
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: "white",
  borderRadius: "50%",
  animation: `${spinner}  0.6s linear infinite`,
  borderTopColor: "$blue500",
});

export const Spinner = () => (
  <Container>
    <SpinnerLoader />
  </Container>
);
