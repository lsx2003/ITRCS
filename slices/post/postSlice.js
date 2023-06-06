import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
};

const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    getPostList:(state,{payload}) =>{
      state.isLoading = true;
    },
    getPostListSuccess: (state, { payload }) => {
      state.posts = payload;
      state.isLoading = false;
      state.error = null;
    },
    getPostListFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    createPost:(state,{payload})=>{
      state.isLoading = true;
    },
    createSuccess: (state, { payload }) => {
      state.posts = payload;
      state.isLoading = false;
      state.error = null;
    },
    createFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    updatePost:(state,{payload})=>{
      state.isLoading = true;
    },
    updateSuccess: (state, { payload }) => {
      state.posts = payload;
      state.isLoading = false;
      state.error = null;
    },
    updateFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    deletePost:(state,{payload})=>{
      state.isLoading = true;
    },
    deleteSuccess: (state, { payload }) => {
      state.posts = payload;
      state.isLoading = false;
      state.error = null;
    },
    deleteFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default postSlice.reducer;
export const { getPostList,createPost,updatePost,deletePost } = postSlice.actions;
