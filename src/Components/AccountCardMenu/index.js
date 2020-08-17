import AccountCardMenu from './AccountCardMenu';
import { connect } from 'react-redux';

import UserActions from 'Stores/User/UserStore';

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(UserActions.logoutRequest()),
  };
};

export default connect(null, mapDispatchToProps)(AccountCardMenu);
