import WalletLink from './WalletLink';
import { connect } from 'react-redux';
import {
  getIsShowModal,
  getUserIsLogged,
} from 'Stores/User/UserStore/Selectors';
import ModalActions from 'Stores/ModalStore';

const mapStateToProps = (state) => ({
  isShowModal: getIsShowModal(state),
  isLogged: getUserIsLogged(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => dispatch(ModalActions.modalOpen('wallet-disclaimer')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletLink);
