import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import {
  sessionsRequest,
  sessionsRequestSuccess,
  sessionsRequestFailure,
} from './Reducers';

const { Types, Creators } = createActions({
  sessionsRequest: null,
  sessionsRequestSuccess: ['items'],
  sessionsRequestFailure: ['error'],
});

export const SessionsTypes = Types;
export default Creators;

export const SESSIONS_INITIAL_STATE = {
  loading: false,
  error: null,
  items: [],
};

export const INITIAL_STATE = Immutable(SESSIONS_INITIAL_STATE);

export const reducers = createReducer(INITIAL_STATE, {
  [Types.SESSIONS_REQUEST]: sessionsRequest,
  [Types.SESSIONS_REQUEST_SUCCESS]: sessionsRequestSuccess,
  [Types.SESSIONS_REQUEST_FAILURE]: sessionsRequestFailure,
});
