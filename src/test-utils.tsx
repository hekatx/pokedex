import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { pokemonStore } from "./stores/pokemonStore";
import { BrowserRouter } from "react-router-dom";

export function renderWithProviders(
  ui: React.ReactElement,
  {
    // Automatically create a store instance if no store was passed in
    store = pokemonStore,
    ...renderOptions
  } = {}
) {
  setupListeners(store.dispatch);

  function Wrapper({ children }: { children: ReactNode }) {
    return <BrowserRouter><Provider store={store}>{children}</Provider></BrowserRouter>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
