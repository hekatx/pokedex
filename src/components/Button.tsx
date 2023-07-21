import { theme } from "@/theme";

export const Button = theme.styled("button", {
  paddingTop: "0.625rem",
  paddingBottom: "0.625rem",
  paddingLeft: "1.25rem",
  paddingRight: "1.25rem",
  marginRight: "0.5rem",
  marginBottom: "0.5rem",
  borderRadius: "0.5rem",
  borderWidth: "1px",
  borderColor: "#D1D5DB",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  fontWeight: 500,
  color: "#111827",
  backgroundColor: "#ffffff",
  cursor: "pointer",
  "& :hover": { backgroundColor: "#F3F4F6" },
});
