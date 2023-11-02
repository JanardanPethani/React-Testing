import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPosts } from "../services/post.services";

const initialState = {
  data: [],
  isLoading: false,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllPosts.rejected, (state) => {
        state.isLoading = false;
        state.data = [];
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = postSlice.actions;

export default postSlice.reducer;
