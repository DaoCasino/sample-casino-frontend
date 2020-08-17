import React, { useEffect } from 'react';
// import GameIframe from '../GameIframe';
import { useParams } from 'react-router-dom';
// import GameIframeWindow from '../GameIframe/GameIframeWindow';
import GameFullIframe from '../GameFullIframe';

// function handleExpandedClickMock() {}

function GameQuery(props) {
  const { id } = useParams();
  const { selectGame, getGames, isLogged, game, loading, showModal } = props;

  useEffect(() => {
    if (isLogged) {
      getGames(true);
      selectGame(id);
    }

    if (!loading && isLogged === false) {
      showModal();
    }
  }, [id, getGames, selectGame, isLogged, loading, showModal]);

  // if (!game) { // TODO: DPM-347 remove iframe window
  //   return (
  //     <GameIframeWindow
  //       name=''
  //       onExpand={handleExpandedClickMock}
  //     ></GameIframeWindow>
  //   );
  // }
  //
  // return <GameIframe game={game} />;

  if (!game) {
    return <React.Fragment />;
  }

  return <GameFullIframe game={game} />;
}

export default GameQuery;
