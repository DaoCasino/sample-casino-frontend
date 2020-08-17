import { connect } from 'react-redux';
import { getGame } from 'Stores/GamesStore/Selectors';
import GamesActions from 'Stores/GamesStore';
import ModalActions from 'Stores/ModalStore';

import {
  getUserIsLogged,
  getUserLoading,
} from 'Stores/User/UserStore/Selectors';
import GameQuery from './GameQuery';

const mapStateToProps = (state) => ({
  game: getGame(state),
  isLogged: getUserIsLogged(state),
  loading: getUserLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  selectGame: (id) => dispatch(GamesActions.gamesSelectGame(id)),
  getGames: (useCache = true) => dispatch(GamesActions.gamesRequest(useCache)),
  showModal: () => dispatch(ModalActions.modalOpen('not-logged')),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameQuery);
