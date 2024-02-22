import { createSlice } from "@reduxjs/toolkit";
import { requestStatus } from "./constants";

export const requestSlice = createSlice({
  name: "request",
  initialState: {},
  selectors: {
    selectIsLoading: (state, id) => state[id] === requestStatus.pending,
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, { meta }) => {
          state[meta.requestId] = requestStatus.pending;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = requestStatus.success;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { meta }) => {
          state[meta.requestId] = requestStatus.fail;
        }
      ),
});

export const { selectIsLoading } = requestSlice.selectors;