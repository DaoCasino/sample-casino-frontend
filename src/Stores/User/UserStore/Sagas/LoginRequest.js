import { put, call, take, fork, all } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { getAuthTokens } from 'Stores/User/AuthStore/AuthRedux';

import AuthActions from 'Stores/User/AuthStore';
import UserActions from '../UserRedux';
import ModalActions from 'Stores/ModalStore';

import { WalletAuth } from '@daocasino/platform-back-js-lib';
import config from 'Config/AppConfig';

import { loginRequestWithModalSuccess } from './UILogic';
import Cookies from 'js-cookie';

import {
  connectionChannel,
  newAPI,
  getAPI,
  getToken,
  auth,
  TokenExpiredError,
  accountInfo,
  subscribe,
  logout,
  optout,
} from 'Services/SDK.js';

const walletAuth = new WalletAuth(
  config.walletUrl,
  config.walletAuthRedirectUrl,
  config.walletPlatformId,
  config.walletPlatformEnv,
  config.casinoName
);
// Remove token from the window location
walletAuth.clearLocation();

// TODO: REMOVE
window.walletAuthURL = walletAuth.getAuthURL();
window.walletSingUp = walletAuth.getAuthURL();
window.walletSingUp.pathname = '/signup/auth'; // TODO: fix

const {
  loginRequestSuccess,
  loginRequestFailure,
  loginRequestBalanceSuccess,
  loginRequestBalanceFailure,
  loginRequestDisconnect,
  logoutRequestSuccess,
  logoutRequestFailure,
  optoutRequestSuccess,
  optoutRequestFailure,
} = UserActions;

const { authSetTokens } = AuthActions;
const { modalOpen } = ModalActions;

function createAPIChannel(api) {
  return eventChannel((emit) => {
    const tokensUpdateHandle = (tokens) => {
      emit(tokens);
    };

    api.eventEmitter.on('tokensUpdate', tokensUpdateHandle);

    const unsubscribe = () => {
      api.eventEmitter.off('tokensUpdate', tokensUpdateHandle);
    };

    return unsubscribe;
  });
}

let watchTokensUpdateStarted = false;
let watchConnectionCloseStarted = false;

function* watchConnectionClose() {
  if (watchConnectionCloseStarted) return;
  console.log('saga watchConnectionClose');

  watchConnectionCloseStarted = true;
  while (watchConnectionCloseStarted) {
    try {
      const e = yield take(connectionChannel);
      console.log('connection closed', e);

      // Try reconnecting
      const tokens = yield call(getAuthTokens);
      try {
        yield call(newAPI);
        // restart watchTokensUpdate
        watchTokensUpdateStarted = false;
        yield fork(watchTokensUpdate);
        console.log('SDK front call auth 1');
        yield call(auth, tokens);
      } catch (e) {
        console.log('auth error');
        console.error(e);
        if (e instanceof TokenExpiredError) {
          yield put(authSetTokens(null));
          walletAuth.token = null;
          yield put(loginRequestDisconnect());
        }
      }

      // yield put(loginRequestDisconnect());
    } catch (e) {
      console.error(e);
      connectionChannel.cancel();
      watchConnectionCloseStarted = false;
    }
  }
}

function* watchTokensUpdate() {
  if (watchTokensUpdateStarted) return;
  console.log('saga watchTokensUpdate');

  const api = yield call(getAPI);
  const apiChannel = yield call(createAPIChannel, api);

  watchTokensUpdateStarted = true;

  while (watchTokensUpdateStarted) {
    try {
      const tokens = yield take(apiChannel);
      yield put(authSetTokens(tokens));
    } catch (err) {
      console.error('api error:', err);

      apiChannel.close();
      watchTokensUpdateStarted = false;
    }
  }
}

function whitelisted({ accountName }) {
  if (!config.useWhitelist) {
    return true;
  }

  return config.whitelist.includes(accountName);
}

function setAnalyticsInfo({ accountName }) {
  Cookies.set('user_Id', accountName);
}

export function* loginRequestWithTokens({ tokens }) {
  console.log('saga loginRequestWithTokens', tokens);
  let err = null;

  try {
    yield fork(watchTokensUpdate);
    yield fork(watchConnectionClose);
    console.log('SDK front call auth 3');
    yield call(auth, tokens);
  } catch (e) {
    if (e instanceof TokenExpiredError) {
      yield put(authSetTokens(null));
    }
    err = e;
  }

  if (err !== null) {
    yield put(loginRequestFailure(err));
    return;
  }

  yield call(subscribe);
  const info = yield call(accountInfo);

  if (whitelisted(info)) {
    yield put(loginRequestSuccess(info));
    // disable wallet disclamer modal after success login
    yield call(loginRequestWithModalSuccess);
    // set cookie user_id
    yield call(setAnalyticsInfo, info);
  } else {
    yield all([put(modalOpen('not-whitelisted')), call(logoutRequest)]);
  }
}

export function* loginRequestBalance() {
  // console.log('saga loginRequestBalance');
  try {
    const info = yield call(accountInfo);
    yield put(loginRequestBalanceSuccess(info));
  } catch (err) {
    console.error(err);
    yield put(loginRequestBalanceFailure(err));
  }
}

export function* checkWalletToken() {
  console.log('saga checkWalletTokens');
  if (walletAuth.token) {
    const tokens = yield call(getToken, walletAuth);
    yield call(loginRequestWithTokens, { tokens });
  } else {
    yield put(loginRequestDisconnect());
  }
}

export function* logoutRequest() {
  console.log('saga logout');
  const tokens = yield call(getAuthTokens);

  try {
    yield call(logout, tokens);

    yield put(authSetTokens(null));
    walletAuth.token = null;

    yield put(logoutRequestSuccess());
  } catch (err) {
    console.error(err);
    yield put(logoutRequestFailure(err));
  }
}

export function* optoutRequest() {
  console.log('saga optout');
  const tokens = yield call(getAuthTokens);

  try {
    yield call(optout, tokens);

    yield put(authSetTokens(null));
    walletAuth.token = null;

    yield put(optoutRequestSuccess());
  } catch (err) {
    console.error(err);
    yield put(optoutRequestFailure(err));
  }
}
