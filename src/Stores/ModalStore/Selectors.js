import { createSelector } from 'reselect';

const getModals = (state) => state.modal;
const getModalName = (_, props) => props && props.name;

export const getModalOpenState = createSelector(
  [getModals, getModalName],
  (modals, name) => (name in modals ? modals[name] : false)
);
