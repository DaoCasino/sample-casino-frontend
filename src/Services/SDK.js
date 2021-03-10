import config from 'Config/AppConfig';
import { connect, TokenExpiredError } from '@daocasino/platform-back-js-lib';
import { eventChannel } from 'redux-saga';

let apiInstance;
let apiInstanceError;
let isFirst = true;

const connectionParams = {
  secure: true,
  autoRefresh: true,
};

export const connectionChannel = eventChannel((emit) => {
  connectionParams.onClose = (e) => emit(e);
  return () => {
    connectionParams.onClose = null;
  };
});

export const newAPI = () => {
  isFirst = true;
  apiInstance = null;
  apiInstanceError = null;
  return getAPI();
};

export const getAPI = async () => {
  // console.log('getAPI', { isFirst });
  if (!apiInstance && isFirst) {
    isFirst = false;
    try {
      apiInstance = await connect(config.backendAdrr, connectionParams);
      return apiInstance;
    } catch (e) {
      apiInstanceError = e;
      throw new Error(e.message);
    }
  }

  return new Promise((resolve, reject) => {
    if (apiInstanceError) {
      reject(apiInstanceError);
      return;
    }
    if (apiInstance) {
      resolve(apiInstance);
      return;
    }

    const timer = setInterval(() => {
      console.log('timer interval');
      if (apiInstance) {
        clearInterval(timer);
        resolve(apiInstance);
        return;
      }
      if (apiInstanceError) {
        clearInterval(timer);
        reject(apiInstanceError);
        return;
      }
    }, 100);
  });
};

export const accountInfo = async () => {
  const api = await getAPI();
  return api.accountInfo();
};

export const fetchGamesInCasino = async (casinoId) => {
  const api = await getAPI();
  return api.fetchGamesInCasino(casinoId);
};

export const fetchGames = async () => {
  const api = await getAPI();
  return api.fetchGames();
};

export const getToken = async (userName) => {
  const api = await getAPI();
  return api.getToken(userName);
};

export const auth = async (tokens) => {
  const api = await getAPI();
  return api.auth(tokens);
};

export const fetchCasinoSessions = async (
  filter = 'wins',
  casinoId = config.casinoId
) => {
  const api = await getAPI();
  return api.fetchCasinoSessions(filter, casinoId);
};

export const subscribe = async () => {
  const api = await getAPI();
  return api.subscribe();
};

export const logout = async (tokens) => {
  console.log('SDK logout');
  const api = await getAPI();
  return api.logout(tokens);
};

export const optout = async (tokens) => {
  console.log('SDK optout');
  const api = await getAPI();
  return api.optout(tokens);
};

export const setEthAddress = async (tokens, ethAddress) => {
  console.log('SDK setEthAddress');
  const api = await getAPI();
  return api.setEthAddress(tokens, ethAddress);
};

export { TokenExpiredError };
