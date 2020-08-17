import SessionsQuery from './SessionsQuery';
import { connect } from 'react-redux';
import SessionsActions from 'Stores/SessionsStore';
import {
  getSessionsItems,
  getSessionsLoading,
  getSessionsError,
} from 'Stores/SessionsStore/Selectors';

const mapStateToProps = (state) => ({
  loading: getSessionsLoading(state),
  error: getSessionsError(state),
  sessions: getSessionsItems(state),
});
const mapDispatchToProps = (dispatch) => ({
  getSessions: () => dispatch(SessionsActions.sessionsRequest()),
});
export default connect(mapStateToProps, mapDispatchToProps)(SessionsQuery);
