import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "./store";

const initialState = {
  isLoading: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = appSlice.actions;

export const selectAppState = (state: AppState) => state.app;

export default appSlice.reducer;
