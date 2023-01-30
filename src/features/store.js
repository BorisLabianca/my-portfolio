import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigation/navigationSlice";
import languageReducer from "./language/languageSlice";

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    language: languageReducer,
  },
});

export default store;
