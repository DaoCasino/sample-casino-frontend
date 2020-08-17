import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import configureStore from './CreateStore';

import rootSaga from './RootSaga';
import ReduxPersist from 'Config/ReduxPersist';

import { reducers as userReducers } from './User';

export const reducers = combineReducers({
  games: require('./GamesStore').reducers,
  sessions: require('./SessionsStore').reducers,
  game: require('./GameStore').reducers,
  modal: require('./ModalStore').reducers,
  ...userReducers,
});

export default () => {
  let finalReducers = reducers;

  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(
    finalReducers,
    rootSaga
  );
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require('./RootSaga').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
};
