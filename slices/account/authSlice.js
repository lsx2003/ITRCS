import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser:(state,{payload})=>{
      state.isLoading = true;
    },
    registerSuccess: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
      state.error = null;
    },
    registerFailure: (state, { payload }) => {
      state.user = null;
      state.isLoading = false;
      state.error = payload;
    },
    login: (state, { payload }) => {
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

export const {registerUser,registerFailure, login, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
