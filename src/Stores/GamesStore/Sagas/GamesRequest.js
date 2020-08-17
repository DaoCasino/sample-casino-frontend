import { put, call, select, all } from 'redux-saga/effects';
import GamesActions from '../GamesRedux';
import { fetchGames, fetchGamesInCasino } from 'Services/SDK.js';
import config from 'Config/AppConfig';

import { getGamesItems } from '../Selectors';

const {
  gamesRequestSuccess,
  gamesRequestFailure,
  gamesRequestFinish,
} = GamesActions;

function* fetchManifest(game) {
  console.log('fetchManifest', game);
  try {
    const response = yield call(fetch, game.url + '/manifest.json', {
      cache: 'no-cache',
    });
    const manifest = yield call([response, 'json']);
    return { ...game, ...manifest };
  } catch (err) {
    console.error(err);
  }

  return null;
}

const getManifests = (row) => {
  const { meta } = row;
  const { manifestURL } = meta;

  return call(fetchManifest, { ...row, url: manifestURL });
};

export function* gamesRequest({ useCache }) {
  console.log('saga gamesRequest');
  const items = yield select(getGamesItems);
  if (useCache && Array.isArray(items) && items.length > 0) {
    yield put(gamesRequestFinish());
    return;
  }

  try {
    const casinoGames = yield call(fetchGames);
    const gamesInCasino = yield call(fetchGamesInCasino, config.casinoId);

    const params = gamesInCasino.reduce((obj, row) => {
      obj[row.gameId] = row.params;
      return obj;
    }, {});

    let rows = [];
    casinoGames.forEach((game) => {
      if (game.id in params) {
        rows.push({ ...game, params: params[game.id] });
      }
    });

    const games = yield all(rows.map(getManifests));

    // TODO: MOCK! remove this
    // games[0].url = 'http://localhost:8080';

    yield put(gamesRequestSuccess(games.filter((game) => game !== null)));
  } catch (err) {
    yield put(gamesRequestFailure(err));
  }
}
