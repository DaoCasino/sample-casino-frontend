import React from 'react';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Icon } from 'Components/Icon';

import styled from 'styled-components';
import config from 'Config/AppConfig';

const AccountMenuWrapper = styled.div`
  background: #16191f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-sizing: border-box;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.5);
  border-radius: 4px;

  .MuiList-padding {
    padding: 0;
  }

  .MuiMenuItem-root {
    font-family: Gilroy;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    padding-top: 12px;
    padding-bottom: 12px;

    &:hover {
      background-color: #0d0e12;
    }
  }
`;

const LogoutItem = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #ff5500;

  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const WalletItem = styled.a`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  color: #fff;

  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

function AccountCardMenu({
  open,
  handleClose,
  handleListKeyDown,
  anchorRef,
  logout,
}) {
  // TODO: create map items and common handle
  function handleLogout(event) {
    logout();
    handleClose(event);
  }

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom' ? 'center top' : 'center bottom',
          }}
        >
          <AccountMenuWrapper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id='menu-list-grow'
                onKeyDown={handleListKeyDown}
              >
                <MenuItem>
                  <WalletItem
                    href={config.walletUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Icon icon='wallet-menu' size='16' />
                    <div>DAOWallet</div>
                  </WalletItem>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <LogoutItem>
                    <Icon icon='logout' size='16' />
                    <div>Logout</div>
                  </LogoutItem>
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </AccountMenuWrapper>
        </Grow>
      )}
    </Popper>
  );
}

export default AccountCardMenu;
