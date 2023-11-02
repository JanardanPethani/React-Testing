import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "../../helpers/axios";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/posts");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
