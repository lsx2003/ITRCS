import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isAuthenticated = true;
      state.user = payload;
      state.error = null;
    },
    loginFailure: (state, { payload }) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { login, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
