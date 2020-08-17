import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import {
  gamesRequest,
  gamesRequestSuccess,
  gamesRequestFailure,
  gamesSelectGame,
  gamesRequestFinish,
} from './Reducers';

const { Types, Creators } = createActions({
  updateStore: ['params'],
  gamesRequest: ['useCache'],
  gamesRequestFinish: null,
  gamesRequestSuccess: ['items'],
  gamesRequestFailure: ['error'],
  gamesSelectGame: ['id'],
});

export const GamesTypes = Types;
export default Creators;

export const GAMES_INITIAL_STATE = {
  loading: false,
  error: null,
  items: [],
  selected: -1,
};

export const INITIAL_STATE = Immutable(GAMES_INITIAL_STATE);

export const updateStore = (state, action) => state.merge({ ...action.params });

export const reducers = createReducer(INITIAL_STATE, {
  [Types.UPDATE_STORE]: updateStore,
  [Types.GAMES_REQUEST]: gamesRequest,
  [Types.GAMES_REQUEST_SUCCESS]: gamesRequestSuccess,
  [Types.GAMES_REQUEST_FAILURE]: gamesRequestFailure,
  [Types.GAMES_SELECT_GAME]: gamesSelectGame,
  [Types.GAMES_REQUEST_FINISH]: gamesRequestFinish,
});
