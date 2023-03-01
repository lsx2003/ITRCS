import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "apiSlice",
  initialState: {
    case: null,
    precedent: null,
    press: null,
  },
  reducers: {
    setCase: (state, action) => {
      state.case = action.payload;
    },
    setPrecedent: (state, action) => {
      state.precedent = action.payload;
    },
    setPress: (state, action) => {
      state.press = action.payload;
    },
  },
});

export default apiSlice;
export const { setCase, setPrecedent, setPress } = apiSlice.actions;
