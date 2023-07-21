import { CSSProperties, createStitches, keyframes } from "@stitches/react";

export const revealUp = keyframes({
  "0%": { transform: "translateY(50%)", opacity: 0 },
  "100%": { transform: "translateY(0%)", opacity: 1 },
});

export const theme = createStitches({
  theme: {
    colors: {
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)",
      normal: "hsl(347, 12%, 85%)",
      fire: "hsl(359, 70%, 70%)",
      water: "hsl(223, 95%, 85%)",
      grass: "hsl(134, 68%, 85%)",
      electric: "hsl(60, 94%, 75%)",
      ice: "hsl(197, 69%, 95%)",
      fighting: "hsl(13, 86%, 75%)",
      poison: "hsl(266, 61%, 85%)",
      ground: "hsl(32, 56%, 85%)",
      flying: "hsl(205, 32%, 85%)",
      psychic: "hsl(328, 95%, 85%)",
      bug: "hsl(134, 45%, 65%)",
      rock: "hsl(0, 30%, 61%)",
      ghost: "hsl(300, 17%, 94%)",
      dark: "hsl(205, 35%, 37%)",
      dragon: "hsl(187, 61%, 71%)",
      steel: "hsl(160, 11%, 79%)",
      fairy: "hsl(336, 84%, 87%)",
    },
    space: {
      xs: "0.5rem",
      s: "1rem",
      m: "1.5rem",
      l: "3rem",
      xl: "5rem",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      xl: "4rem",
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      radius: "10px",
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  utils: {
    bgImage: (value: CSSProperties["backgroundImage"]) => ({
      backgroundImage: value,
    }),
  },
});
