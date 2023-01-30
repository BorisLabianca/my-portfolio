import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "black",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    switchTheme: (state) => {
      if (state.theme === "black") {
        state.theme = "white";
      } else {
        state.theme = "black";
      }
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
