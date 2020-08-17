export const gamesRequest = (state, action) => {
  return state.merge({ loading: true, error: null, items: state.items });
};

export const gamesRequestSuccess = (state, action) => {
  const { items } = action;
  return state.merge({ loading: false, error: null, items });
};

export const gamesRequestFinish = (state, action) => {
  return state.merge({ loading: false, error: null });
};

export const gamesRequestFailure = (state, action) => {
  const { error } = action;
  return state.merge({ loading: false, error, items: [] });
};

export const gamesSelectGame = (state, action) => {
  const { id } = action;
  return state.merge({ selected: id });
};
