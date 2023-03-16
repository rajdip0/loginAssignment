import {call, put, select, takeLatest} from 'redux-saga/effects';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getTokenFailure,
  getTokenSuccess,
  loginFailure,
  loginSuccess,
  verifyOTPFailure,
  verifyOTPSuccess,
} from '../redux/reducer/AuthReducer';
import auth from '@react-native-firebase/auth';

let getItem = state => state.AuthReducer;

export function* getTokenSaga() {
  //   let item = yield select(getItem);
  try {
    const response = yield call(AsyncStorage.getItem, 'login');
    console.log(response);

    if (response != null) {
      yield put(getTokenSuccess(response));
    } else {
      yield put(getTokenSuccess(null));
    }
  } catch (error) {
    yield put(getTokenFailure(error));
  }
}

export function* loginSaga(action) {
  try {
    const response = yield call(
      [auth(), 'signInWithPhoneNumber'],
      `+91${action.payload}`,
    );
    console.log(response);

    if (response != null) {
      yield put(loginSuccess(response));
    } else {
      yield put(loginSuccess(null));
    }
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* verifyOTPSaga(action) {
  const {confirmation, otp} = action.payload;

  try {
    const response = yield call([confirmation, confirmation.confirm], otp);
    console.log(response);

    if (response != null) {
      yield put(verifyOTPSuccess(response));
    } else {
      yield put(verifyOTPSuccess(null));
    }
  } catch (error) {
    yield put(verifyOTPFailure(error));
  }
}

const watchFunction = [
  (function* () {
    yield takeLatest('Auth/getTokenRequest', getTokenSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/loginRequest', loginSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/verifyOTPRequest', verifyOTPSaga);
  })(),
];

export default watchFunction;
