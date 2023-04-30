import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'postSlice',
  initialState: {
    post: null,
  },
  reducers: {
    setPost: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export default searchiSlice.reducer;
export const { setPost } = searchiSlice.actions;
