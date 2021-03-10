import { connect } from 'react-redux';
import GamesActions from 'Stores/GamesStore';
import GameQuery from './GameQuery';

import { getGamesItems } from 'Stores/GamesStore/Selectors';

const mapStateToProps = (state) => ({
  games: getGamesItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  getGames: (useCache = true) => dispatch(GamesActions.gamesRequest(useCache)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameQuery);
