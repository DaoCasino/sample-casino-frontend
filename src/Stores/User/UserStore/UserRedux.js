import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { getValue } from './Sagas/UILogic';

import config from 'Config/AppConfig';

import {
  loginRequest,
  loginRequestSuccess,
  loginRequestFailure,
  loginRequestBalance,
  loginRequestBalanceSuccess,
  loginRequestBalanceFailure,
  loginRequestDisconnect,
  logoutRequest,
  logoutRequestSuccess,
  logoutRequestFailure,
  optoutRequest,
  optoutRequestSuccess,
  optoutRequestFailure,
  setEthAddressRequest,
  setEthAddressRequestSuccess,
  setEthAddressRequestFailure,
} from './Reducers';

const { Types, Creators } = createActions({
  updateStore: ['params'],

  loginRequest: null,
  loginRequestSuccess: ['accountInfo'],
  loginRequestFailure: ['error'],

  loginRequestBalance: null,
  loginRequestBalanceSuccess: ['accountInfo'],
  loginRequestBalanceFailure: ['error'],

  loginRequestWithTokens: ['tokens'],
  checkWalletToken: null,

  loginRequestDisconnect: null,

  logoutRequest: null,
  logoutRequestSuccess: null,
  logoutRequestFailure: ['error'],

  optoutRequest: null,
  optoutRequestSuccess: null,
  optoutRequestFailure: ['error'],

  setEthAddressRequest: ['ethAddress'],
  setEthAddressRequestSuccess: null,
  setEthAddressRequestFailure: ['error'],
});

export const UserTypes = Types;
export default Creators;

// const getAuthTokens = () => {
//   const accessToken = localStorage.getItem('accessToken');
//   const refreshToken = localStorage.getItem('refreshToken');

//   if (accessToken && refreshToken) {
//     // authData
//     return { accessToken, refreshToken };
//   }

//   return null;
// };

export const USER_INITIAL_STATE = {
  loading: false,
  isLogged: null,
  error: null,
  casinoName: config.casinoName,
  accountInfo: null,
  isShowModal: getValue(false), // show wallet modal
};

export const INITIAL_STATE = Immutable(USER_INITIAL_STATE);

export const updateStore = (state, action) => state.merge({ ...action.params });

export const reducers = createReducer(INITIAL_STATE, {
  [Types.UPDATE_STORE]: updateStore,

  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_REQUEST_SUCCESS]: loginRequestSuccess,
  [Types.LOGIN_REQUEST_FAILURE]: loginRequestFailure,

  [Types.LOGIN_REQUEST_BALANCE]: loginRequestBalance,
  [Types.LOGIN_REQUEST_BALANCE_SUCCESS]: loginRequestBalanceSuccess,
  [Types.LOGIN_REQUEST_BALANCE_FAILURE]: loginRequestBalanceFailure,

  [Types.LOGIN_REQUEST_WITH_TOKENS]: loginRequest,
  [Types.CHECK_WALLET_TOKEN]: loginRequest,

  [Types.LOGIN_REQUEST_DISCONNECT]: loginRequestDisconnect,

  [Types.LOGOUT_REQUEST]: logoutRequest,
  [Types.LOGOUT_REQUEST_SUCCESS]: logoutRequestSuccess,
  [Types.LOGOUT_REQUEST_FAILURE]: logoutRequestFailure,

  [Types.OPTOUT_REQUEST]: optoutRequest,
  [Types.OPTOUT_REQUEST_SUCCESS]: optoutRequestSuccess,
  [Types.OPTOUT_REQUEST_FAILURE]: optoutRequestFailure,

  [Types.SET_ETH_ADDRESS_REQUEST]: setEthAddressRequest,
  [Types.SET_ETH_ADDRESS_REQUEST_SUCCESS]: setEthAddressRequestSuccess,
  [Types.SET_ETH_ADDRESS_REQUEST_FAILURE]: setEthAddressRequestFailure,
});
