import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GameCard from '../GameCard';

function GamesListItem(props) {
  const { isLogged, game, login, index } = props;

  const info = index < 3;

  if (isLogged) {
    return (
      <Link
        to={`/game/${game.id}`}
        style={{ textDecoration: 'none' }}
        title={game.name}
      >
        <GameCard game={game} info={info} />
      </Link>
    );
  }

  return (
    <div onClick={login} style={{ cursor: 'pointer' }} title={game.name}>
      <GameCard game={game} info={info} />
    </div>
  );
}

GamesListItem.propTypes = {
  game: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

export default GamesListItem;
