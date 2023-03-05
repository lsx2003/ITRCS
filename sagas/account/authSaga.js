import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { login, loginFailure } from 'slices/account/authSlice';
import { authSagaActions } from './authSagaActions'

function* handleLogin(action) {
  try {
    const response = yield call(axios.post, '/api/auth/login', action.payload);
    yield put(login(response.data));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* authSaga() {
  yield takeLatest(authSagaActions.LOGIN, handleLogin);
  yield takeLatest(authSagaActions.LOGOUT, handleLogin);
}

export default authSaga;
