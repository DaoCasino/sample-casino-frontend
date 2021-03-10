import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  modalOpen: ['name'],
  modalClose: ['name'],
});

export const GamesTypes = Types;
export default Creators;

const MODAL_INITIAL_STATE = {
  'wallet-disclaimer': false,
  'not-logged': false,
  'not-whitelisted': false,
  'insufficient-balance': false,
  'delete-account': false,
  'dependence-webgl': false,
  'demo-mode': false,
  claim: false,
};

const INITIAL_STATE = Immutable(MODAL_INITIAL_STATE);

const modalOpen = (state, action) => {
  const { name } = action;
  const s = {};
  s[name] = true;

  return state.merge({ ...state, ...s });
};

const modalClose = (state, action) => {
  const { name } = action;
  const s = {};
  s[name] = false;

  return state.merge({ ...state, ...s });
};

export const reducers = createReducer(INITIAL_STATE, {
  [Types.MODAL_OPEN]: modalOpen,
  [Types.MODAL_CLOSE]: modalClose,
});
