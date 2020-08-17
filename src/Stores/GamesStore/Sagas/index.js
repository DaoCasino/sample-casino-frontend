import { takeLatest, all } from 'redux-saga/effects';
import { gamesRequest } from './GamesRequest';
import { GamesTypes } from '../GamesRedux';

function* sagas() {
  yield all([takeLatest(GamesTypes.GAMES_REQUEST, gamesRequest)]);
}

export default sagas;
export * from './GamesRequest';
