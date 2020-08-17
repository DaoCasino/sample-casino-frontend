import AccountInfo from './AccountInfo';
import { connect } from 'react-redux';

import UserActions from 'Stores/User/UserStore';
import ModalActions from 'Stores/ModalStore';

import {
  getUserIsLogged,
  getUserError,
  getUserLoading,
} from 'Stores/User/UserStore/Selectors';

const mapStateToProps = (state) => ({
  loading: getUserLoading(state),
  isLogged: getUserIsLogged(state),
  error: getUserError(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(ModalActions.modalOpen('wallet-disclaimer')),
    updateBalance: () => dispatch(UserActions.loginRequestBalance()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
