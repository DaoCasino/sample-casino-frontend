import { connect } from 'react-redux';
import {
  getGameById,
  getGameSupportDemoModeById,
  getGameDependsWebGLById,
} from 'Stores/GamesStore/Selectors';
import ModalActions from 'Stores/ModalStore';

import {
  getUserIsLogged,
  getUserLoading,
} from 'Stores/User/UserStore/Selectors';
import GameQueryLogic from './GameQueryLogic';

const mapStateToProps = (state, props) => ({
  game: getGameById(state, props),
  isSupportDemoMode: getGameSupportDemoModeById(state, props),
  isDependingWebGL: getGameDependsWebGLById(state, props),
  isLogged: getUserIsLogged(state),
  loading: getUserLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  showNotLogged: () => dispatch(ModalActions.modalOpen('not-logged')),
  showDependenceWebGL: () =>
    dispatch(ModalActions.modalOpen('dependence-webgl')),
  showDemoMode: () => dispatch(ModalActions.modalOpen('demo-mode')),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameQueryLogic);
