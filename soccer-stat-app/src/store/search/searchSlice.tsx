import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface searchStateInterface {
  search: string | null;
}

const initialState: searchStateInterface = {
  search: null,
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>): void => {
      state.search = action.payload;
    },
    clearSearch: (state): void => {
      state.search = null;
    },
  },
});

export const { setSearch, clearSearch } = searchSlice.actions;

export const selectSearchState = (state: RootState) => state.searchSlice;

export default searchSlice.reducer;
