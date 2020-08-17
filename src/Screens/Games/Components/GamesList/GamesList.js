import React from 'react';
import GamesListItem from '../GamesListItem';
import styled from 'styled-components';

export const GameListWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
`;

export const GameListItemWrapper = styled.div`
  grid-column: auto / span 6;

  ${({ theme: { media } }) => media.greaterThan('xs_gt')`
    grid-column: auto / span 3;

    &.extended {
      grid-column: auto / span 4;
    }
  `}
`;

const renderItems = (game, index) => {
  const extended = index < 3;
  return (
    <GameListItemWrapper
      key={`game-${game.id}`}
      data-test={`game-${game.name}`}
      className={extended ? 'extended' : ''}
    >
      <GamesListItem game={game} index={index} />
    </GameListItemWrapper>
  );
};

function GamesList(props) {
  console.log('render GamesList');
  const { games } = props;
  return (
    <GameListWrapper data-test='games-list'>
      {games.map(renderItems)}
    </GameListWrapper>
  );
}

export default GamesList;
