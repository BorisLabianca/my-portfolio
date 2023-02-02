import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  //   btnClass: [
  //     "control control-1 active-btn",
  //     "control control-2",
  //     "control control-3",
  //     "control control-4",
  //     "control control-5",
  //   ],
  //   activeSection: [
  //     "main-section section sec1 home active",
  //     "main-section section sec2 about",
  //     "main-section section sec3 portfolio",
  //     "main-section section sec4 about-this-site",
  //     "main-section section sec5 contact",
  //   ],
  classIndex: 0,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState: initialState,
  reducers: {
    navigateBetweenSections: (state, action) => {
      const { payload } = action;
      state.classIndex = payload;
      window.scrollTo(0, 0);
    },
  },
});

// console.log(navigationSlice);

export const { navigateBetweenSections } = navigationSlice.actions;

export default navigationSlice.reducer;
