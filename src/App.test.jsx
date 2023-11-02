import { beforeEach, describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";

import App from "./App";
import { renderWithProviders } from "./__mocks__/store";

describe("App test", () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });
  test("Render App", () => {
    expect(screen.getByText("Posts")).toBeInTheDocument();
  });
});
