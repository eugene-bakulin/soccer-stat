import { configureStore } from "@reduxjs/toolkit";
import matchIdReducer from "./matchID/matchIdSlice";

export const store = configureStore({
  reducer: {
    matchId: matchIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
