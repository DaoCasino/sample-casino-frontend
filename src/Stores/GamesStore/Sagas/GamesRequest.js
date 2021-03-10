import { put, call, select, all } from 'redux-saga/effects';
import GamesActions from '../GamesRedux';
import { fetchGames, fetchGamesInCasino } from 'Services/SDK.js';
import config from 'Config/AppConfig';
import { labels, sortIndex } from 'Config/Games';

import { getGamesItems } from '../Selectors';

const regex = /\s/gi;
const getRewrite = (name) => name.toLowerCase().replace(regex, '-');
const addRewrite = (game) => {
  const { name, id } = game;
  let rewrite = id;
  if (name) {
    rewrite = getRewrite(name);
  }

  return { ...game, rewrite };
};

const filterNull = (game) => game !== null;
const filterPaused = ({ paused }) => paused === 0;
const addLabel = (game) => {
  if (!(game.codeName in labels)) {
    return game;
  }
  return { ...game, label: labels[game.codeName] };
};

const getSortIndex = ({ codeName }) => {
  if (codeName in sortIndex) {
    return sortIndex[codeName];
  }
  return undefined;
};

const sortGames = (a, b) => {
  const aIndex = getSortIndex(a);
  const bIndex = getSortIndex(b);

  if (aIndex === undefined && bIndex !== undefined) {
    return -1;
  }
  if (aIndex !== undefined && bIndex === undefined) {
    return 1;
  }
  if (aIndex === undefined && bIndex === undefined) {
    return 0;
  }

  if (aIndex < bIndex) {
    return -1;
  }
  if (aIndex > bIndex) {
    return 1;
  }
  if (aIndex === bIndex) {
    return 0;
  }
};

const {
  gamesRequestSuccess,
  gamesRequestFailure,
  gamesRequestFinish,
} = GamesActions;

// manifest.json
const defaultManifest = {
  name: 'Game name',
  description: 'lorem ipsum',
  text: 'lorem ipsum',
  gameSpecURL: 'http://',
};

const defaultSupports = {
  demoMode: false,
};

function* fetchDefaultManifest(game) {
  const manifestUrl = `/assets/games/${game.codeName}/manifest.json`;
  console.log('fetchDefaultManifest', manifestUrl);
  try {
    const response = yield call(fetch, manifestUrl, {
      cache: 'no-cache',
    });
    return yield call([response, 'json']);
  } catch (err) {
    console.error('fetchDefaultManifest', manifestUrl, err);
  }

  return defaultManifest;
}

function* fetchManifest(game) {
  let manifest;
  const manifestUrl = game.url + '/manifest.json';
  console.log('fetchManifest', manifestUrl);
  try {
    const response = yield call(fetch, manifestUrl, {
      cache: 'no-cache',
    });
    manifest = yield call([response, 'json']);
  } catch (err) {
    console.error('fetchManifest', manifestUrl, err);
    manifest = yield call(fetchDefaultManifest, game);
  }

  return {
    ...game,
    ...manifest,
    supports: manifest.supports
      ? { ...defaultSupports, ...manifest.supports }
      : defaultSupports,
    isDAOGame: 'isDAOGame' in manifest ? manifest.isDAOGame : true,
  };
}

const getManifests = (row) => {
  const { meta } = row;
  const { manifestURL, ext } = meta;
  return call(fetchManifest, { ...row, url: manifestURL, ...ext });
};

export function* gamesRequest({ useCache }) {
  console.log('saga gamesRequest, useCache: ', useCache);
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
        rows.push({
          ...game,
          params: params[game.id],
        });
      }
    });

    let games = yield all(rows.map(getManifests));

    games = games
      .filter(filterNull)
      .filter(filterPaused)
      .map(addRewrite)
      .map(addLabel)
      .sort(sortGames);

    yield put(gamesRequestSuccess(games));
  } catch (err) {
    yield put(gamesRequestFailure(err));
  }
}
