import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../store/searchSlice";

const store = configureStore({
// the "search" key will be used to identify the slice we are dealing with
//in case of multiple slices, we can create different keys for different reducers(of those relevant slices)
  reducer: {
    search: searchReducer,
  },
});

export default store;