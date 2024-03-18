import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   input: [],
// };
const initialState = {
  selectedLocation: undefined, buttonClick: undefined
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // location: (state, action) => {
    //   state.input.push({selectedLocation: action.payload });
    // },
    location: (state, action) => {
      state.selectedLocation= action.payload;
    },
    // searchButton: (state, action) => {
    //   state.input.push({buttonClick: action.payload });
    // }
    searchButton: (state, action) => {
      state.buttonClick= action.payload;
    }
    }
});
//keep adding the reducers' names to make them available globally
export const { location, searchButton } = searchSlice.actions;

export default searchSlice.reducer;