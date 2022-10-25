import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface modalInterface {
  manyReqModalDisplay: boolean;
  deniedModalDisplay: boolean;
}

const initialState: modalInterface = {
  manyReqModalDisplay: false,
  deniedModalDisplay: false,
};

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setManyReqModal: (state): void => {
      state.manyReqModalDisplay = true;
    },
    closeManyReqModal: (state): void => {
      state.manyReqModalDisplay = false;
    },
    setDeniedModal: (state): void => {
      state.deniedModalDisplay = true;
    },
    closeDeniedModal: (state): void => {
      state.deniedModalDisplay = false;
    },
  },
});

export const {
  setManyReqModal,
  closeManyReqModal,
  setDeniedModal,
  closeDeniedModal,
} = modalSlice.actions;

export const selectModalState = (state: RootState) => state.modalSlice;

export default modalSlice.reducer;
