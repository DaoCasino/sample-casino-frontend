import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  authSetTokens: ['tokens'],
});

export const AuthTypes = Types;
export default Creators;

export const getAuthTokens = () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (accessToken && refreshToken) {
    // authData
    return { accessToken, refreshToken };
  }

  return null;
};

export const AUTH_INITIAL_STATE = {
  tokens: getAuthTokens(),
};

export const INITIAL_STATE = Immutable(AUTH_INITIAL_STATE);

export const authSetTokens = (state, { tokens }) => state.merge({ tokens });

export const reducers = createReducer(INITIAL_STATE, {
  [Types.AUTH_SET_TOKENS]: authSetTokens,
});
