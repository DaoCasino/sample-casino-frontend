import { put } from 'redux-saga/effects';
import UserActions from '../UserRedux';

const key = 'walletDisclaimerIsClosed';
export const getValue = (initialValue) => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.log(error);
    return initialValue;
  }
};
const setValue = (value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export function* loginRequestWithModalSuccess() {
  console.log('saga loginRequestWithModalSuccess');
  setValue(true);
  yield put(UserActions.updateStore({ isShowModal: true }));
}
