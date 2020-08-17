import GamesListItem from './GamesListItem';
import { connect } from 'react-redux';
import { getUserIsLogged } from 'Stores/User/UserStore/Selectors';
import ModalActions from 'Stores/ModalStore';

const mapStateToProps = (state) => ({
  isLogged: getUserIsLogged(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(ModalActions.modalOpen('wallet-disclaimer')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesListItem);
