export const getUser = (state) => state.user;
export const getUserIsLogged = (state) => getUser(state).isLogged;
export const getUserLoading = (state) => getUser(state).loading;
export const getCasinoName = (state) => getUser(state).casinoName;
export const getUserAccountInfo = (state) => getUser(state).accountInfo;

const formatBet = (str, digits) =>
  parseFloat(str.replace(/\s+BET$/, '')).toFixed(digits);

export const getUserBalance = (state) => {
  const accountInfo = getUserAccountInfo(state);
  if (accountInfo && 'balance' in accountInfo) {
    return formatBet(accountInfo.balance, 2);
  }
  return null;
};

export const getUserName = (state) => {
  const accountInfo = getUserAccountInfo(state);
  if (accountInfo && 'accountName' in accountInfo) {
    return accountInfo.accountName;
  }
  return null;
};

export const getUserError = (state) => getUser(state).error;
