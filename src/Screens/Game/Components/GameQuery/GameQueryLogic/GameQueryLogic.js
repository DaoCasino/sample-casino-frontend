import React, { useEffect } from 'react';
import GameFullIframe from '../../GameFullIframe';
import { webglSupport } from 'Services/WebGL';

const isNotLogeed = (loading, isLogged) => !loading && isLogged === false;

function GameQueryLogic({
  game,
  loading,
  isLogged,
  showNotLogged,
  isSupportDemoMode,
  isDependingWebGL,
  showDependenceWebGL,
  showDemoMode,
}) {
  useEffect(() => {
    if (isDependingWebGL && !webglSupport) {
      showDependenceWebGL();
    }

    if (isSupportDemoMode === false) {
      if (isNotLogeed(loading, isLogged)) {
        showNotLogged();
      }
    }
  });

  useEffect(() => {
    if (loading === false && isLogged === false && isSupportDemoMode) {
      showDemoMode();
    }
  }, [loading, isLogged, isSupportDemoMode, showDemoMode]);

  if (game && isDependingWebGL && !webglSupport) {
    return <React.Fragment />;
  }

  if (game && !loading && isLogged === true) {
    return <GameFullIframe game={game} demo={false} />;
  }

  if (game && isSupportDemoMode === true) {
    return <GameFullIframe game={game} demo={true} />;
  }

  return <React.Fragment />;
}

export default GameQueryLogic;
