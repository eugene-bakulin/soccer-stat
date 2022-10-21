import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface loadingStateInterface {
  isLoading: true | false;
}

const initialState: loadingStateInterface = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>): void => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export const selectLoadingState = (state: RootState) => state.isLoading;

export default loadingSlice.reducer;
