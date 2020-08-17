import GamesQuery from './GamesQuery';
import { connect } from 'react-redux';
import GamesActions from 'Stores/GamesStore';
import {
  getGamesItems,
  getGamesLoading,
  getGamesError,
} from 'Stores/GamesStore/Selectors';

const mapStateToProps = (state) => ({
  loading: getGamesLoading(state),
  error: getGamesError(state),
  games: getGamesItems(state),
});
const mapDispatchToProps = (dispatch) => ({
  getGames: (useCache = false) => dispatch(GamesActions.gamesRequest(useCache)),
});
export default connect(mapStateToProps, mapDispatchToProps)(GamesQuery);
