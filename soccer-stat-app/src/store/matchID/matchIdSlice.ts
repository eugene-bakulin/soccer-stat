import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface matchIdInterface {
  leagueName: string | null;
  teamName: string | null;
  type: "league" | "team" | null;
  id: number | null;
}

const initialState: matchIdInterface = {
  leagueName: null,
  teamName: null,
  type: null,
  id: null,
};

export const matchIdSlice = createSlice({
  name: "matchId",
  initialState,
  reducers: {
    setMatchId: (state, action: PayloadAction<number>): void => {
      state.id = action.payload;
    },
    setMatchType: (state, action: PayloadAction<"league" | "team">): void => {
      state.type = action.payload;
    },
    setTeamName: (state, action: PayloadAction<string>): void => {
      state.teamName = action.payload;
    },
    setLeagueName: (state, action: PayloadAction<string>): void => {
      state.leagueName = action.payload;
    },
  },
});

export const { setMatchId, setMatchType, setTeamName, setLeagueName } =
  matchIdSlice.actions;

export const selectMatchId = (state: RootState) => state.matchId;

export default matchIdSlice.reducer;
