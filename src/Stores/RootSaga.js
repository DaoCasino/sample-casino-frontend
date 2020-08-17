import { fork, all } from 'redux-saga/effects';

import { sagas as gamesSagas } from 'Stores/GamesStore';
import { sagas as sessionsSagas } from 'Stores/SessionsStore';
import { sagas as userSagas } from 'Stores/User';

const sagas = [gamesSagas, sessionsSagas, ...userSagas];

export default function* root() {
  yield all(sagas.map((saga) => fork(saga)));
}
