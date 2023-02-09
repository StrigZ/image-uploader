import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "./store";

const initialState = {
  isLoading: false,
  isComplete: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setIsComplete(state, action: PayloadAction<boolean>) {
      state.isComplete = action.payload;
    },
  },
});

export const { setIsLoading } = appSlice.actions;

export const selectAppState = (state: AppState) => state.app;

export default appSlice.reducer;
