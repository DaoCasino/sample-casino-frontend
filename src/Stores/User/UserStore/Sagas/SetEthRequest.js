import { put, call, take, fork, all } from 'redux-saga/effects';

import UserActions from '../UserRedux';
import { getAuthTokens } from 'Stores/User/AuthStore/AuthRedux';
import { setEthAddress } from 'Services/SDK.js';

const {
  setEthAddressRequestSuccess,
  setEthAddressRequestFailure,
} = UserActions;

const isValidEthAddress = /^0x[0-9a-fA-F]{40}$/;

export function* setEthAddressRequest({ ethAddress }) {
  console.log('saga setEthAddressRequest', { ethAddress });

  if (!ethAddress || !isValidEthAddress.test(ethAddress)) {
    yield put(
      setEthAddressRequestFailure(
        'Invalid address, for example, a regular Ethereum address looks like this: 0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7'
      )
    );
    return false;
  }

  const tokens = yield call(getAuthTokens);

  try {
    const ok = yield call(setEthAddress, tokens, ethAddress);
    if (ok === true) {
      yield put(setEthAddressRequestSuccess());
    } else {
      console.error('setEthAddress response: ', ok);
    }
  } catch (err) {
    console.error(err);
    yield put(setEthAddressRequestFailure(err.message));
  }
}
