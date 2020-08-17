import AccountCard from './AccountCard';
import { connect } from 'react-redux';

import { getUserName, getUserBalance } from 'Stores/User/UserStore/Selectors';

const mapStateToProps = (state) => ({
  name: getUserName(state),
  balance: getUserBalance(state),
});

export default connect(mapStateToProps, null)(AccountCard);
