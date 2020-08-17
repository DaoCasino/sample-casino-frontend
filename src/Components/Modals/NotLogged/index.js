import NotLogged from './NotLogged';
import { connect } from 'react-redux';
import { getModalOpenState } from 'Stores/ModalStore/Selectors';

import ModalActions from 'Stores/ModalStore';

const name = 'not-logged';

const mapStateToProps = (state) => ({
  open: getModalOpenState(state, { name }),
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(ModalActions.modalOpen('wallet-disclaimer')),
    close: () => dispatch(ModalActions.modalClose(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotLogged);
