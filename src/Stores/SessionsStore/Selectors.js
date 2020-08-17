export const getSessions = (state) => state.sessions;
export const getSessionsLoading = (state) => getSessions(state).loading;
export const getSessionsError = (state) => getSessions(state).error;
export const getSessionsItems = (state) => getSessions(state).items;
