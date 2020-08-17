import userSagas from './UserStore/Sagas';

import { reducers as auth } from './AuthStore/AuthRedux';
import { reducers as user } from './UserStore/UserRedux';

// for Root saga
export const sagas = [userSagas];

// for combineReducers
export const reducers = {
  auth,
  user,
};
