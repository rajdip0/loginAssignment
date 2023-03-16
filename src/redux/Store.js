import {configureStore} from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import AuthReducer from './reducer/AuthReducer';

import RootSaga from '../saga/RootSaga';

let SagaMiddleware = createSagaMiddleware();
const middleware = [SagaMiddleware, logger];
export default configureStore({
  reducer: {
    AuthReducer: AuthReducer,
  },
  middleware,
});
SagaMiddleware.run(RootSaga);
