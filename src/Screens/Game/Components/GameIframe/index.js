import { connect } from 'react-redux';
import GameActions from 'Stores/GameStore';

import GameIframe from './GameIframe';

const mapDispatchToProps = (dispatch) => ({
  setLoading: (id, status) => {
    let loading = {};
    loading[id] = status;
    dispatch(GameActions.gameIframeLoading(loading));
  },
});

export default connect(null, mapDispatchToProps)(GameIframe);
