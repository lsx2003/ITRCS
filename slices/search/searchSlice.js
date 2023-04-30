import { createSlice } from '@reduxjs/toolkit';

const searchiSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    keyword: null,
  },
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export default searchiSlice.reducer;
export const { setKeyword } = searchiSlice.actions;
