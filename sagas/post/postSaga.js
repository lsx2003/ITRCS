import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { 
  getPostListSuccess,
  getPostListFailure,
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  deleteSuccess,
  deleteFailure } from 'slices/post/postSlice';
import { postSagaActions } from './postSagaActions'
function* handleGetPostList(action) {
  try {
    const response = yield call(axios.get, '/api/post/postList', action.payload);
    yield put(getPostListSuccess(response.data));
  } catch (error) {
    yield put(getPostListFailure(error.message));
  }
}

function* handleCreatePost(action) {
  try {
    const response = yield call(axios.post, '/api/post/create', action.payload);
    yield put(createSuccess(response.data));
  } catch (error) {
    yield put(createFailure(error.message));
  }
}

function* handleUpdatePost(action) {
  try {
    const response = yield call(axios.put, '/api/post/update', action.payload);
    yield put(updateSuccess(response.data));
  } catch (error) {
    yield put(updateFailure(error.message));
  }
}

function* handleDeletePost(action) {
  try {
    const response = yield call(axios.delete, '/api/post/delete', action.payload);
    yield put(deleteSuccess(response.data));
  } catch (error) {
    yield put(deleteFailure(error.message));
  }
}

function* postSaga() {
  yield takeLatest(postSagaActions.GET_POST_LIST, handleGetPostList);
  yield takeLatest(postSagaActions.CREATE_POST, handleCreatePost);
  yield takeLatest(postSagaActions.UPDATE_POST, handleUpdatePost);
  yield takeLatest(postSagaActions.DELETE_POST, handleDeletePost);
}

export default postSaga;
