import "whatwg-fetch";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";
import { server } from "./mocks/api/server";
import { pokemonApi } from "./services/pokemonApi";
import { pokemonStore } from "./stores/pokemonStore";
import _fetch from "node-fetch";

import {
  AbortController,
  abortableFetch,
  //@ts-ignore
} from "abortcontroller-polyfill/dist/cjs-ponyfill";

const { fetch, Request } = abortableFetch(_fetch);

global.Request = Request;
// @ts-ignore
global.AbortController = AbortController;

//@ts-ignore
global.fetch = fetch;
//@ts-ignore
global.Request = Request;

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  // This is the solution to clear RTK Query cache after each test
  pokemonStore.dispatch(pokemonApi.util.resetApiState());
});

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
  server.close();
});
