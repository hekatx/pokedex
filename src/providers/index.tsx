import { ReactNode } from "react";
import { Provider } from "react-redux";
import { pokemonStore } from "../stores/pokemonStore";

export function Providers({ children }: { children: ReactNode }) {
  return <Provider store={pokemonStore}>{children}</Provider>;
}
