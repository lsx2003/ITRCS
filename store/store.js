import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import apiSlice from "../slices/apiSlice";
import authReducer from "slices/account/authSlice";
import createSagaMiddleware from 'redux-saga';
import authSaga from 'sagas/account/authSaga';

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  reducer: {
    apiData: apiSlice.reducer,
    auth:  authReducer
  },
});
sagaMiddleware.run(authSaga)

export default store;
