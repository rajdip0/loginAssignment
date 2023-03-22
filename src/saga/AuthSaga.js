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
    // const response = yield call(
    //   [auth(), 'signInWithPhoneNumber'],
    //   `+91${action.payload}`,
    // );

    const confirmation = yield auth().signInWithPhoneNumber(
      `+91${action.payload}`,
    );

    console.log(confirmation);

    if (confirmation != null) {
      yield put(loginSuccess(confirmation));
    } else {
      yield put(loginSuccess(null));
    }
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* verifyOTPSaga(action) {
  let items = yield select(getItem);

  try {
    // const response = yield call([confirmation, confirmation.confirm], otp);

    const confirmation = yield items.loginResponse.confirm(action.payload.otp);

    console.log(confirmation);

    if (confirmation != null) {
      yield put(verifyOTPSuccess(confirmation));
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
