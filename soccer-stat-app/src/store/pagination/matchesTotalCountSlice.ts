import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface countInterface {
  count: number;
}

const initialState: countInterface = {
  count: 0,
};

export const matchesTotalCountSlice = createSlice({
  name: "matchesCount",
  initialState,
  reducers: {
    setMatchesCount: (state, action: PayloadAction<number>): void => {
      state.count = action.payload;
    },
  },
});

export const { setMatchesCount } = matchesTotalCountSlice.actions;

export const selectMatchesCount = (state: RootState) => state.matchesCount;

export default matchesTotalCountSlice.reducer;
