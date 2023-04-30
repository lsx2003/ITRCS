import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'apiSlice',
  initialState: {
    precedent: null,
    press: null,
  },
  reducers: {
    setPrecedent: (state, action) => {
      state.precedent = action.payload;
    },
    setPress: (state, action) => {
      state.press = action.payload;
    },
    // addPrecedent: (state, action) => {
    //   state.precedent?.push(...action.payload);
    // },
    // addPress: (state, action) => {
    //   state.press?.push(...action.payload);
    // },
  },
});

export default apiSlice.reducer;
export const { setPrecedent, setPress, addPrecedent, addPress } = apiSlice.actions;
