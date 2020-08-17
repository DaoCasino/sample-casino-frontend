import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';

const styles = (theme) => ({
  error: {
    backgroundColor: '#e0940e',
    borderRadius: '4px',
    padding: '0 18px',
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.43',
    letterSpacing: 'normal',
  },
});

function ErrorSnackbar(props) {
  const { vertical, horizontal, classes, error } = props;
  const [open, setOpen] = React.useState(true);

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
    >
      <SnackbarContent
        className={classes.error}
        message={
          <span id='client-snackbar' className={classes.message}>
            <ErrorIcon
              className={classNames(classes.icon, classes.iconVariant)}
            />
            {error.message}
          </span>
        }
        action={[
          <IconButton
            key='close'
            aria-label='Close'
            color='inherit'
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
}

ErrorSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
};

ErrorSnackbar.defaultProps = {
  vertical: 'bottom',
  horizontal: 'left',
};

export default withStyles(styles)(ErrorSnackbar);
