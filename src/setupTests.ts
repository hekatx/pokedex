import { fetch, Headers, Request, Response } from 'cross-fetch'
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";
import { server } from "./mocks/api/server";
import { pokemonApi } from "./services/pokemonApi";
import { pokemonStore } from "./stores/pokemonStore";

import {
  AbortController,
  //@ts-ignore
} from "abortcontroller-polyfill/dist/cjs-ponyfill";

global.AbortController = AbortController;

global.fetch = fetch
global.Headers = Headers
global.Request = Request
global.Response = Response

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
