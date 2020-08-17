import FooterPlayLink from './FooterPlayLink';
import { connect } from 'react-redux';

import ModalActions from 'Stores/ModalStore';

import { getUserIsLogged } from 'Stores/User/UserStore/Selectors';

const mapStateToProps = (state) => ({
  isLogged: getUserIsLogged(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(ModalActions.modalOpen('wallet-disclaimer')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterPlayLink);
