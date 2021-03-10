import { takeLatest, all } from 'redux-saga/effects';
import {
  loginRequestBalance,
  loginRequestWithTokens,
  checkWalletToken,
  logoutRequest,
  optoutRequest,
} from './LoginRequest';

import { setEthAddressRequest } from './SetEthRequest';

import { UserTypes } from '../UserRedux';

function* sagas() {
  yield all([
    takeLatest(UserTypes.LOGIN_REQUEST_BALANCE, loginRequestBalance),
    takeLatest(UserTypes.LOGIN_REQUEST_WITH_TOKENS, loginRequestWithTokens),

    takeLatest(UserTypes.CHECK_WALLET_TOKEN, checkWalletToken),
    takeLatest(UserTypes.LOGOUT_REQUEST, logoutRequest),
    takeLatest(UserTypes.OPTOUT_REQUEST, optoutRequest),
    takeLatest(UserTypes.SET_ETH_ADDRESS_REQUEST, setEthAddressRequest),
  ]);
}

export default sagas;
