import React from 'react';
import { GameListWrapper, GameListItemWrapper } from '../GamesList/GamesList';
import { GameCardItem } from '../GameCard/GameCard';

const DEFAULT_CARDS_NUMBER = 7;
const games = [];
for (let i = 0; i < DEFAULT_CARDS_NUMBER; i++) {
  games.push({
    id: i,
    name: 'Loading...',
    icons: {},
  });
}

const renderItems = (game, index) => {
  const extended = index < 3;
  return (
    <GameListItemWrapper
      key={`game-${game.id}`}
      data-test={`game-${game.name}`}
      className={extended ? 'extended' : ''}
    >
      <GameCardItem className={extended ? 'extended' : ''} />
    </GameListItemWrapper>
  );
};

function GamesListLoader() {
  console.log('render GamesListLoader');
  return (
    <GameListWrapper data-test='games-list'>
      {games.map(renderItems)}
    </GameListWrapper>
  );
}

export default GamesListLoader;
