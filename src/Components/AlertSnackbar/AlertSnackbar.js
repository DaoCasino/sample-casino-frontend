import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

function AlertSnackbar(props) {
  const {
    open,
    onClose,
    autoHideDuration,
    vertical,
    horizontal,
    severity,
    msg,
  } = props;
  return (
    <Snackbar
      autoHideDuration={autoHideDuration}
      open={open}
      anchorOrigin={{ vertical, horizontal }}
      onClose={onClose}
    >
      <Alert severity={severity}>{msg}</Alert>
    </Snackbar>
  );
}

AlertSnackbar.defaultProps = {
  vertical: 'bottom',
  horizontal: 'left',
  autoHideDuration: 3000,
};

export default AlertSnackbar;
