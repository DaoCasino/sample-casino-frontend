import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { styles } from './AccountCardStyles';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import AccountCardMenu from '../AccountCardMenu';

import styled from 'styled-components';
import { Icon } from 'Components/Icon';

import config from 'Config/AppConfig';

const getFirstChar = (str) => str.charAt(0).toUpperCase();

const AccountCardWrapper = styled.div`
  padding: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const AccountIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-image: linear-gradient(315deg, #f12711, #f5af19 99%);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AcccountInfo = styled.div`
  flex-grow: 1;
  padding: 0 12px;
  align-self: stretch;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DaoBetIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AccountBalance = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
  white-space: nowrap;
`;

const AccountName = styled.div`
  font-family: Roboto;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: right;
  color: rgba(255, 255, 255, 0.5);
  white-space: nowrap;
`;

function FreeBetLink(props) {
  const { classes } = props;
  const { isDev } = config;
  if (!isDev) {
    return <React.Fragment />;
  }
  return (
    <Hidden xsDown>
      <Link
        className={classes.freeBet}
        href='https://t.me/DAO_testnet_bot'
        color='inherit'
        rel='noopener noreferrer'
        target='_blank'
      >
        <Button color='inherit'>Free BET</Button>
      </Link>
    </Hidden>
  );
}

function AccountCard({ classes, balance, name }) {
  console.log('render AccountCard');
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const prevOpen = React.useRef(open);

  function handleToggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <React.Fragment>
      <FreeBetLink classes={classes} />
      <AccountCardWrapper
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
      >
        <DaoBetIconWrapper>
          <Icon icon='dao-bet' size='20' />
        </DaoBetIconWrapper>
        <AcccountInfo data-test='account-info'>
          <AccountBalance data-test='balance'>{balance}</AccountBalance>
          <AccountName data-test='account'>{name}</AccountName>
        </AcccountInfo>
        <AccountIcon>{getFirstChar(name)}</AccountIcon>
      </AccountCardWrapper>
      <AccountCardMenu
        open={open}
        handleClose={handleClose}
        handleListKeyDown={handleListKeyDown}
        anchorRef={anchorRef}
      />
    </React.Fragment>
  );
}

AccountCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountCard);
