import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "eng",
};

const languageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    switchLanguage: (state, action) => {
      const { payload } = action;
      if (payload === state.language) {
        return;
      } else {
        state.language = payload;
      }
    },
  },
});

export const { switchLanguage } = languageSlice.actions;

export default languageSlice.reducer;
