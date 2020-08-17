import { createSelector } from 'reselect';

export const getGames = (state) => state.games;
export const getGamesLoading = (state) => getGames(state).loading;
export const getGamesError = (state) => getGames(state).error;
export const getGamesItems = (state) => getGames(state).items;
export const getGamesSelected = (state) => getGames(state).selected;

export const getGame = createSelector(
  [getGamesSelected, getGamesItems],
  (selected, items) => {
    const games = items.filter((game) => game.id == selected);
    if (Array.isArray(games) && games.length > 0) {
      return games[0];
    }
    return null;
  }
);

export const getGameName = (state) => {
  const game = getGame(state);
  if (game && 'name' in game) {
    return game.name;
  }
  return null;
};

export const getGameId = (state) => {
  const game = getGame(state);
  if (game && 'id' in game) {
    return game.id;
  }
  return null;
};
