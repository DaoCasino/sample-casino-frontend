export const loginRequest = (state, action) => {
  return state.merge({
    isLogged: false,
    error: null,
    accountInfo: state.accountInfo,
    loading: true,
  });
};

export const logoutRequest = (state, action) => {
  return state.merge({
    loading: true,
  });
};

export const loginRequestSuccess = (state, action) => {
  const { accountInfo } = action;
  return state.merge({
    isLogged: true,
    error: null,
    accountInfo,
    loading: false,
  });
};

export const loginRequestFailure = (state, action) => {
  const { error } = action;
  return state.merge({
    isLogged: false,
    error,
    accountInfo: null,
    loading: false,
  });
};

export const logoutRequestFailure = (state, action) => {
  const { error } = action;
  return state.merge({
    error,
    loading: false,
  });
};

export const loginSetTokens = (state, { tokens }) => state.merge({ tokens });

export const loginRequestBalance = (state) => {
  return state.merge({
    error: null,
    accountInfo: state.accountInfo,
  });
};

export const loginRequestBalanceSuccess = (state, action) => {
  const { accountInfo } = action;
  return state.merge({ error: null, accountInfo });
};

export const loginRequestBalanceFailure = (state, action) => {
  const { error } = action;
  return state.merge({ error });
};

export const loginRequestDisconnect = (state) =>
  state.merge({
    isLogged: false,
    error: null,
    accountInfo: null,
    loading: false,
  });

export const logoutRequestSuccess = loginRequestDisconnect;
