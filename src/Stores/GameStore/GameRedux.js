import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  gameIframeLoading: ['loading'],
});

export const GamesTypes = Types;
export default Creators;

export const GAME_INITIAL_STATE = {
  iframeLoading: {},
};

export const INITIAL_STATE = Immutable(GAME_INITIAL_STATE);

export const gameIframeLoading = (state, action) => {
  const { loading } = action;
  const { iframeLoading } = state;
  return state.merge({ iframeLoading: { ...iframeLoading, ...loading } });
};

export const reducers = createReducer(INITIAL_STATE, {
  [Types.GAME_IFRAME_LOADING]: gameIframeLoading,
});
