import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/post.slice";

const rootReducer = combineReducers({
  posts: postSlice,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
