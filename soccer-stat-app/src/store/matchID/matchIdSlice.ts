import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface matchIdInterface {
  id: number | null;
}

const initialState: matchIdInterface = {
  id: null,
};

export const matchIdSlice = createSlice({
  name: "matchId",
  initialState,
  reducers: {
    setMatchId: (state, action: PayloadAction<number>): void => {
      state.id = action.payload;
    },
  },
});

export const { setMatchId } = matchIdSlice.actions;

export const selectMatchId = (state: RootState) => state.matchId;

export default matchIdSlice.reducer;
