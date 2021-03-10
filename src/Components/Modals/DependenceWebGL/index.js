import DependenceWebGL from './DependenceWebGL';
import { connect } from 'react-redux';
import { getModalOpenState } from 'Stores/ModalStore/Selectors';

import ModalActions from 'Stores/ModalStore';

const name = 'dependence-webgl';

const mapStateToProps = (state) => ({
  open: getModalOpenState(state, { name }),
});

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => dispatch(ModalActions.modalClose(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DependenceWebGL);
