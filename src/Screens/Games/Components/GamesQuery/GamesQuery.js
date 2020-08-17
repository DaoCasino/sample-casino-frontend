import React, { useEffect } from 'react';
import ErrorSnackbar from 'Components/ErrorSnackbar';
import GamesList from '../GamesList';

import GamesListLoader from '../GamesListLoader';

function GamesQuery(props) {
  const { loading, error, games, getGames } = props;
  useEffect(() => {
    getGames(true);
  }, [getGames]);

  if (loading) return <GamesListLoader />;
  if (error) return <ErrorSnackbar error={error} />;
  return <GamesList games={games} />;
}

export default GamesQuery;
