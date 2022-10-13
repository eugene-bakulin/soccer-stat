import { configureStore } from "@reduxjs/toolkit";
import matchesPageReducer from "./pagination/matchesPaginationSlice";
import matchIdReducer from "./matchID/matchIdSlice";
import matchesTotalCountReducer from "./pagination/matchesTotalCountSlice";

export const store = configureStore({
  reducer: {
    matchId: matchIdReducer,
    matchesPage: matchesPageReducer,
    matchesCount: matchesTotalCountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
