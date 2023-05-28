import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'apiSlice',
  initialState: {
    precedent: null,
    press: null,
    posts: null,
  },
  reducers: {
    setPrecedent: (state, action) => {
      state.precedent = action.payload;
    },
    setPress: (state, action) => {
      state.press = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
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
export const { setPrecedent, setPress,setPosts, addPrecedent, addPress } = apiSlice.actions;
