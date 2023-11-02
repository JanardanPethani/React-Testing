import { beforeEach, describe, expect, test } from "vitest";
import {
  fireEvent,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Posts from "./Posts";

import { setupStore } from "../../store";
import { renderWithProviders } from "../../__mocks__/store";
import { fetchAllPosts } from "../../store/services/post.services";

let store = setupStore();

describe("Posts", () => {
  beforeEach(() => {
    renderWithProviders(<Posts />), { store };
  });

  test("Render Posts", () => {
    expect(screen.getByText("Posts")).toBeInTheDocument();
    expect(screen.getByText("No data")).toBeInTheDocument();
    expect(screen.queryByText(/\.\.\.Loading/i)).not.toBeInTheDocument();
  });

  test("Click and show loading", async () => {
    fireEvent.click(screen.getByTestId("fetch-post-btn"));

    expect(screen.queryByText("No data")).not.toBeInTheDocument();
    expect(screen.getByText(/\.\.\.Loading/i));
  });

  test("Fetch and show posts", async () => {
    fireEvent.click(screen.getByTestId("fetch-post-btn"));

    await waitForElementToBeRemoved(() => screen.getByText(/\.\.\.Loading/i));

    // Call action
    store.dispatch(fetchAllPosts());

    const posts = await waitFor(() => screen.findAllByTestId(/post-card/i));
    expect(posts).toHaveLength(2);
    expect(screen.getAllByText(/PT/).length).toBe(2);

    // Test store data
    const storeState = store.getState();
    expect(storeState.posts.data.length).toBe(2);
    expect(storeState.posts.loading).toBeFalsy();
  });

  test("Fetch and show posts (with userEvent)", async () => {
    await userEvent.click(screen.getByTestId("fetch-post-btn"));

    const posts = await waitFor(() => screen.findAllByTestId(/post-card/i));
    expect(posts).toHaveLength(2);
    expect(screen.getAllByText(/PT/).length).toBe(2);
  });
});
