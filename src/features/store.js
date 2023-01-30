import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigation/navigationSlice";
import languageReducer from "./language/languageSlice";
import themeReducer from "./theme/themeSlice";

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    language: languageReducer,
    theme: themeReducer,
  },
});

export default store;
