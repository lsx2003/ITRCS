import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerSuccess: (state, { payload }) => {
      state.user = payload;
      state.error = null;
    },
    registerFailure: (state, { payload }) => {
      state.user = null;
      state.error = payload;
    },
    loginSuccess: (state, { payload }) => {
      state.user = payload;
      state.error = null;
    },
    loginFailure: (state, { payload }) => {
      state.user = null;
      state.error = payload;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

export const {registerUser,registerFailure, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
