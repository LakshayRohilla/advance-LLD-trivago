import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   input: [],
// };
const initialState = {
  selectedLocation: undefined, buttonClick: undefined, checkInTime: undefined, checkOutTime: undefined,
   guestAndRoom : {adult: undefined,children: undefined, room: undefined}
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
    },
    checkInTime: (state, action) => {
      state.checkInTime= action.payload;
    },
    checkOutTime: (state, action) => {
      state.checkOutTime= action.payload;
    },
    guestAndRoom: (state, action) => {
      state.guestAndRoom= action.payload;
    }
    }
});
//keep adding the reducers' names to make them available globally
export const { location, searchButton, checkInTime, checkOutTime, guestAndRoom } = searchSlice.actions;

export default searchSlice.reducer;