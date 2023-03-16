import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  isLoading: true,
  token: null,
  loginResponse: {},
  verifyOTPResponse: {},
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    getTokenRequest(state, action) {
      state.isLoading = true;
      state.status = action.type;
    },
    getTokenSuccess(state, action) {
      state.isLoading = false;
      state.token = action.payload;
      state.status = action.type;
    },
    getTokenFailure(state, action) {
      state.isLoading = false;
      state.error = action.error;
      state.status = action.type;
    },

    loginRequest(state, action) {
      state.isLoading = true;
      state.status = action.type;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.loginResponse = action.payload;
      state.status = action.type;
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.error;
      state.status = action.type;
    },

    verifyOTPRequest(state, action) {
      state.isLoading = true;
      state.status = action.type;
    },
    verifyOTPSuccess(state, action) {
      state.isLoading = false;
      state.verifyOTPResponse = action.payload;
      state.status = action.type;
    },
    verifyOTPFailure(state, action) {
      state.isLoading = false;
      state.error = action.error;
      state.status = action.type;
    },
  },
});

export const {
  getTokenRequest,
  getTokenSuccess,
  getTokenFailure,

  loginRequest,
  loginSuccess,
  loginFailure,

  verifyOTPRequest,
  verifyOTPSuccess,
  verifyOTPFailure,
} = AuthSlice.actions;

export default AuthSlice.reducer;
