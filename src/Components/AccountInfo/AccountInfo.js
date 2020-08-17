import React, { useEffect } from 'react';

import styled from 'styled-components';

import ErrorSnackbar from 'Components/ErrorSnackbar';
import AccountCard from 'Components/AccountCard';
import AccountCardLoading from 'Components/AccountCardLoading';

import config from 'Config/AppConfig';

let timer;

const PlayButton = styled.div`
  width: 140px;
  align-self: stretch;

  margin-right: -16px;
  @media (min-width: 600px) {
    margin-right: -24px;
  }

  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: 1px;
  text-align: center;
  color: #ffffff;
  background-color: #30bf70;

  display: flex;

  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
`;

function AccountInfo(props) {
  console.log('render AccountInfo');
  const { isLogged, login, error, updateBalance, loading } = props;

  useEffect(() => {
    const cleanup = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    if (isLogged && !timer) {
      timer = setInterval(() => {
        // console.log('timer update balance');
        updateBalance();
      }, config.updateBalanceTimeout);
    }

    if ((timer && error) || (timer && !isLogged)) {
      cleanup();
    }

    return cleanup;
  }, [isLogged, updateBalance, error]);

  return (
    <React.Fragment>
      {error && <ErrorSnackbar error={error} />}
      {loading ? (
        <AccountCardLoading />
      ) : isLogged ? (
        <AccountCard />
      ) : (
        <PlayButton data-test='login-btn' onClick={login} color='inherit'>
          <span>Play</span>
        </PlayButton>
      )}
    </React.Fragment>
  );
}

export default AccountInfo;
