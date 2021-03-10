import GamesListItem from './GamesListItem';
import { connect } from 'react-redux';
import {
  getUserIsLogged,
  getUserBalance,
} from 'Stores/User/UserStore/Selectors';
import ModalActions from 'Stores/ModalStore';

import {
  getGameId,
  getGameName,
  getGameRewrite,
  getGameSupportDemoMode,
} from 'Stores/GamesStore/Selectors';

const mapStateToProps = (state, props) => ({
  id: getGameId(state, props),
  name: getGameName(state, props),
  rewrite: getGameRewrite(state, props),
  isSupportDemoMode: getGameSupportDemoMode(state, props),
  isLogged: getUserIsLogged(state),
  balance: getUserBalance(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    showNotice: () => dispatch(ModalActions.modalOpen('insufficient-balance')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesListItem);
