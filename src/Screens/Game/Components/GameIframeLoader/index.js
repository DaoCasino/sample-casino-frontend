import { connect } from 'react-redux';
import GameIframeLoader from './GameIframeLoader';
import { getCurrentGameIframeLoading } from 'Stores/GameStore/Selectors';

const mapStateToProps = (state, props) => ({
  loading: getCurrentGameIframeLoading(state, props),
});

export default connect(mapStateToProps, null)(GameIframeLoader);
