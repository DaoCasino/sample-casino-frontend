import { takeLatest, all } from 'redux-saga/effects';
import { sessionsRequest } from './SessionsRequest';
import { SessionsTypes } from '../SessionsRedux';

function* sagas() {
  yield all([takeLatest(SessionsTypes.SESSIONS_REQUEST, sessionsRequest)]);
}

export default sagas;
export * from './SessionsRequest';
