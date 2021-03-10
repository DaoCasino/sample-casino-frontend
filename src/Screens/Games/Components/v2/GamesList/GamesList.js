import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, Item } from './GamesList.styled';
import GamesListItem from '../GamesListItem';
import ComingSoon from '../ComingSoon';

const renderItems = (game, index) => {
  return (
    <Item key={`game-${game.id}`} data-test={`game-${game.name}`}>
      <GamesListItem game={game} index={index} />
    </Item>
  );
};

function getSoonArray(length, width) {
  let columns = 0;
  let n;

  if (width > 450) {
    columns = 2;
    n = length % columns;
  }

  if (width > 769) {
    columns = 3;
    n = length % columns;
  }

  if (columns > 0 && n > 0) {
    return new Array(columns - n).fill(0);
  }

  return [];
}

const RenderComingSoon = ({ length }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const soon = getSoonArray(length, width);
  function updateWindowDimensions() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, [width]);

  console.log('RenderComingSoon', length, soon.length);

  return soon.map((_, index) => (
    <Item key={`comingSoon:${index}`}>
      <ComingSoon />
    </Item>
  ));
};

function GamesList({ games }) {
  return (
    <List>
      {games.map(renderItems)}
      <RenderComingSoon length={games.length} />
    </List>
  );
}

GamesList.propTypes = {
  items: PropTypes.array,
};

export default GamesList;
