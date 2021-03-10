import React, { useEffect } from 'react';
import ErrorSnackbar from 'Components/ErrorSnackbar';
import GamesList from '../GamesList';

import defaultGames from './default';

function GamesQuery(props) {
  const { loading, error, games, getGames } = props;
  useEffect(() => {
    getGames(true);
  }, [getGames]);

  if (error) return <ErrorSnackbar error={error} />;
  if (loading) return <GamesList games={defaultGames} />;

  return <GamesList games={games} />;
}

export default GamesQuery;
