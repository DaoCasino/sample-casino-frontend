import { takeLatest, all } from 'redux-saga/effects';
import {
  loginRequest,
  loginRequestBalance,
  loginRequestWithTokens,
  checkWalletToken,
  logoutRequest,
} from './LoginRequest';

import { UserTypes } from '../UserRedux';

function* sagas() {
  yield all([
    takeLatest(UserTypes.LOGIN_REQUEST, loginRequest),
    takeLatest(UserTypes.LOGIN_REQUEST_BALANCE, loginRequestBalance),
    takeLatest(UserTypes.LOGIN_REQUEST_WITH_TOKENS, loginRequestWithTokens),
    takeLatest(UserTypes.CHECK_WALLET_TOKEN, checkWalletToken),
    takeLatest(UserTypes.LOGOUT_REQUEST, logoutRequest),
  ]);
}

export default sagas;
export * from './LoginRequest';
