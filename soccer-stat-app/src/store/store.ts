import { configureStore } from "@reduxjs/toolkit";
import matchesPageReducer from "./pagination/matchesPaginationSlice";
import matchIdReducer from "./matchID/matchIdSlice";
import matchesTotalCountReducer from "./pagination/matchesTotalCountSlice";
import loadingSliceReducer from "./loading/loadingSlice";

export const store = configureStore({
  reducer: {
    matchId: matchIdReducer,
    paginationPage: matchesPageReducer,
    matchesCount: matchesTotalCountReducer,
    isLoading: loadingSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
