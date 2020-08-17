import SessionList from './SessionList';

import { connect } from 'react-redux';
import { getGamesItems } from 'Stores/GamesStore/Selectors';

const mapStateToProps = (state) => ({
  games: getGamesItems(state),
});
export default connect(mapStateToProps, null)(SessionList);
