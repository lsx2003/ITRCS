import { configureStore } from '@reduxjs/toolkit';
import apiReducer from '../slices/api/apiSlice';
import authReducer from 'slices/account/authSlice';
import searchReducer from 'slices/search/searchSlice';
import createSagaMiddleware from 'redux-saga';
import authSaga from 'sagas/account/authSaga';
import logger from 'redux-logger';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

const store = configureStore({
  middleware: middleware,
  reducer: {
    apiData: apiReducer,
    auth: authReducer,
    search: searchReducer,
  },
});
sagaMiddleware.run(authSaga);

export default store;
