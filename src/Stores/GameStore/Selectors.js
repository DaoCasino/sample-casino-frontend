import { createSelector } from 'reselect';
import { getGameId } from 'Stores/GamesStore/Selectors';

export const getGame = (state) => state.game;
export const getGameIframeLoading = (state) => getGame(state).iframeLoading;

export const getCurrentGameIframeLoading = createSelector(
  [getGameIframeLoading, getGameId],
  (loading, id) => {
    if (id in loading) {
      return loading[id];
    }
    return null;
  }
);
