import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import apiSlice from "../slices/apiSlice";

const store = configureStore({
  middleware: [...getDefaultMiddleware()],
  reducer: {
    apiData: apiSlice.reducer,
  },
});

export default store;
