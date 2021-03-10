import WalletDisclaimer from './WalletDisclaimer';
import { connect } from 'react-redux';
import { getModalOpenState } from 'Stores/ModalStore/Selectors';

import ModalActions from 'Stores/ModalStore';

const name = 'wallet-disclaimer';

const mapStateToProps = (state) => ({
  open: getModalOpenState(state, { name }),
});

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => dispatch(ModalActions.modalClose(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletDisclaimer);
