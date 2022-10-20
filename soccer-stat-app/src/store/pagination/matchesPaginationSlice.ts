import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface pageInterface {
  matchesPage: number;
  leaguesPage: number;
  teamsPage: number;
}

const initialState: pageInterface = {
  matchesPage: 1,
  leaguesPage: 1,
  teamsPage: 1,
};

export const pageSlice = createSlice({
  name: "paginationPage",
  initialState,
  reducers: {
    setMatchesPage: (state, action: PayloadAction<number>): void => {
      state.matchesPage = action.payload;
    },
    setMatchesFirstPage: (state): void => {
      state.matchesPage = 1;
    },
    setLeaguesPage: (state, action: PayloadAction<number>): void => {
      state.leaguesPage = action.payload;
    },
    setLeaguesFirstPage: (state): void => {
      state.leaguesPage = 1;
    },
    setTeamsPage: (state, action: PayloadAction<number>): void => {
      state.teamsPage = action.payload;
    },
    setTeamsFirstPage: (state): void => {
      state.teamsPage = 1;
    },
  },
});

export const {
  setMatchesPage,
  setMatchesFirstPage,
  setLeaguesPage,
  setLeaguesFirstPage,
  setTeamsPage,
  setTeamsFirstPage,
} = pageSlice.actions;

export const selectPage = (state: RootState) => state.paginationPage;

export default pageSlice.reducer;
