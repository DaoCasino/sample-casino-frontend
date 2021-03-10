import React from 'react';
import WalletDisclaimer from './v2/WalletDisclaimer';
import NotLogged from './NotLogged';
import NotWhitelisted from './NotWhitelisted';
import DependenceWebGL from './DependenceWebGL';
import DemoMode from './DemoMode';

function Modals() {
  return (
    <>
      <WalletDisclaimer />
      <NotLogged />
      <NotWhitelisted />
      <DependenceWebGL />
      <DemoMode />
    </>
  );
}

export default Modals;
