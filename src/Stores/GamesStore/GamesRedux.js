import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import {
  gamesRequest,
  gamesRequestSuccess,
  gamesRequestFailure,
  gamesRequestFinish,
} from './Reducers';

const { Types, Creators } = createActions({
  updateStore: ['params'],
  gamesRequest: ['useCache'],
  gamesRequestFinish: null,
  gamesRequestSuccess: ['items'],
  gamesRequestFailure: ['error'],
});

export const GamesTypes = Types;
export default Creators;

const GAMES_INITIAL_STATE = {
  loading: false,
  error: null,
  items: [],
};

const INITIAL_STATE = Immutable(GAMES_INITIAL_STATE);

const updateStore = (state, action) => state.merge({ ...action.params });

export const reducers = createReducer(INITIAL_STATE, {
  [Types.UPDATE_STORE]: updateStore,
  [Types.GAMES_REQUEST]: gamesRequest,
  [Types.GAMES_REQUEST_SUCCESS]: gamesRequestSuccess,
  [Types.GAMES_REQUEST_FAILURE]: gamesRequestFailure,
  [Types.GAMES_REQUEST_FINISH]: gamesRequestFinish,
});
