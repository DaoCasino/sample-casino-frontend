import { connect } from 'react-redux';
import GameIframeLoader from './GameIframeLoader';
import { getCurrentGameIframeLoading } from 'Stores/GameStore/Selectors';

const mapStateToProps = (state) => ({
  loading: getCurrentGameIframeLoading(state),
});

export default connect(mapStateToProps, null)(GameIframeLoader);
