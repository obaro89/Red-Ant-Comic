import { configureStore } from "@reduxjs/toolkit";
import { comicReducer } from "./reducers";

const store = configureStore({
  reducer: {
    marvel: comicReducer,
  },
});

export default store;
