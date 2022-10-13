import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface pageInterface {
  page: number;
}

const initialState: pageInterface = {
  page: 1,
};

export const matchesPageSlice = createSlice({
  name: "matchesPage",
  initialState,
  reducers: {
    setMatchesPage: (state, action: PayloadAction<number>): void => {
      state.page = action.payload;
    },
    setFirstPage: (state): void => {
      state.page = 1;
    },
  },
});

export const { setMatchesPage, setFirstPage } = matchesPageSlice.actions;

export const selectMatchesPage = (state: RootState) => state.matchesPage;

export default matchesPageSlice.reducer;
