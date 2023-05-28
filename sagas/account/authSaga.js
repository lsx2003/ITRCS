import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { registerSuccess, registerFailure, loginSuccess, loginFailure,logout } from 'slices/account/authSlice';
import { authSagaActions } from './authSagaActions'
function* handleRegister(action) {
  try {
    const response = yield call(axios.post, '/api/auth/registerUser', action.payload);
    yield put(registerSuccess(response.data));
  } catch (error) {
    yield put(registerFailure(error.message));
  }
}

function* handleLogin(action) {
  try {
    const response = yield call(axios.post, '/api/auth/login', action.payload);
    yield put(login(response.data));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* handleLogOut(action) {
  try {
    const response = yield call(axios.post, '/api/auth/logout', action.payload);
    yield put(logout(response.data));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* authSaga() {
  yield takeLatest(authSagaActions.REGISTER, handleRegister);
  yield takeLatest(authSagaActions.LOGIN, handleLogin);
  yield takeLatest(authSagaActions.LOGOUT, handleLogOut);
}

export default authSaga;
