import React, { useEffect } from 'react';
import Header from 'Components/Header';
import GameQuery from './Components/GameQuery';
import Modals from 'Components/Modals';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;

  main {
    position: relative;

    display: grid;
    grid-template-rows: 1fr;
  }
`;

function hideIntercom() {
  if ('Intercom' in window) {
    window.Intercom('update', { hide_default_launcher: true });
    return () => {
      window.Intercom('update', { hide_default_launcher: false });
    };
  }
}

function Game() {
  useEffect(() => {
    return hideIntercom();
  });
  return (
    <React.Fragment>
      <Wrapper>
        <Header />
        <main>
          <GameQuery />
        </main>
      </Wrapper>
      <Modals />
    </React.Fragment>
  );
}

export default Game;
