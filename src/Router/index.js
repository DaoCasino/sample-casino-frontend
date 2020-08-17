import { connect } from 'react-redux';
import UserActions from 'Stores/User/UserStore';
import Router from './Router';

import { getAuthTokens } from 'Stores/User/AuthStore/Selectors';

const mapStateToProps = (state) => ({
  tokens: getAuthTokens(state),
});

const mapDispatchToProps = (dispatch) => ({
  checkWalletToken: () => dispatch(UserActions.checkWalletToken()),
  auth: (tokens) => dispatch(UserActions.loginRequestWithTokens(tokens)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
