import "@testing-library/jest-dom";
import { afterAll, afterEach, beforeAll } from "vitest";
import { mockedServer } from "../__mocks__/server";

// Enable API mocking before tests.
beforeAll(() => mockedServer.listen({ onUnhandledRequest: "bypass" }));

// Reset any runtime request handlers we may add during the tests.
afterEach(() => mockedServer.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => mockedServer.close());
