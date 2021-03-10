import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GameQueryLogic from './GameQueryLogic';

function GameQuery({ getGames, games }) {
  const { rewrite } = useParams();
  const [id, setId] = useState(null);
  useEffect(() => {
    getGames(true);
  }, [getGames]);

  useEffect(() => {
    const item = games.find(
      (game) => game.rewrite === rewrite || game.id.toString() === rewrite
    );
    if (item) {
      setId(item.id);
    }
  }, [games, rewrite]);

  if (id) {
    return <GameQueryLogic id={id} />;
  }
  return <></>;
}

export default GameQuery;
