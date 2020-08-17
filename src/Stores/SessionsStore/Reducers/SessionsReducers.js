export const sessionsRequest = (state, action) => {
  return state.merge({ loading: true, error: null, items: state.items });
};

export const sessionsRequestSuccess = (state, action) => {
  const { items } = action;
  return state.merge({ loading: false, error: null, items });
};

export const sessionsRequestFailure = (state, action) => {
  const { error } = action;
  return state.merge({ loading: false, error, items: [] });
};
