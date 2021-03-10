import { createSelector } from 'reselect';
import { getUserIsLogged } from 'Stores/User/UserStore/Selectors';

export const getGames = (state) => state.games;
export const getGamesLoading = (state) => getGames(state).loading;
export const getGamesError = (state) => getGames(state).error;
export const getGamesItems = (state) => getGames(state).items;

const getGameFromProps = (_, props) => props && props.game;
const getGameIdFromProps = (_, props) => props && props.id;
const getGameIdFromProps2 = (_, props) => props && props.gameId;

export const getGameName = createSelector(
  [getGameFromProps],
  (game) => game && game.name
);

export const getGameId = createSelector(
  [getGameFromProps],
  (game) => game && game.id
);

export const getGameRewrite = createSelector(
  [getGameFromProps],
  (game) => game && game.rewrite
);

const isSupportDemoMode = (game, isLogged) => {
  if (isLogged === true) {
    // turn off demo mode if the user is logged in
    return false;
  }
  return game && game.supports && game.supports.demoMode;
};

export const getGameSupportDemoMode = createSelector(
  [getGameFromProps, getUserIsLogged],
  isSupportDemoMode
);

export const getGameById = createSelector(
  [getGameIdFromProps, getGamesItems],
  (selected, items) => items.find((game) => game.id === selected)
);

export const getGameSupportDemoModeById = createSelector(
  [getGameById, getUserIsLogged],
  isSupportDemoMode
);

export const getGameDependsWebGLById = createSelector([getGameById], (game) => {
  return game && game.dependencies && game.dependencies.webgl;
});

export const getGameByGameIdFromProps = createSelector(
  [getGameIdFromProps2, getGamesItems],
  (selected, items) => items.find((game) => game.id === selected)
);
