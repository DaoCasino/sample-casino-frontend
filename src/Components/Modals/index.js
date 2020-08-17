import React from 'react';
import WalletDisclaimer from './WalletDisclaimer';
import NotLogged from './NotLogged';
import NotWhitelisted from './NotWhitelisted';

function Modals() {
  return (
    <>
      <WalletDisclaimer />
      <NotLogged />
      <NotWhitelisted />
    </>
  );
}

export default Modals;
