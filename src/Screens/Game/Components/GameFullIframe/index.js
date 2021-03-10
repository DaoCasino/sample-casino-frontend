import { connect } from 'react-redux';
import GameActions from 'Stores/GameStore';
import ModalActions from 'Stores/ModalStore';
import GameFullIframe from './GameFullIframe';

const mapDispatchToProps = (dispatch) => ({
  setLoading: (id, status) => {
    let loading = {};
    loading[id] = status;
    dispatch(GameActions.gameIframeLoading(loading));
  },

  showInsufficientBalance: () =>
    dispatch(ModalActions.modalOpen('insufficient-balance')),
});

export default connect(null, mapDispatchToProps)(GameFullIframe);
