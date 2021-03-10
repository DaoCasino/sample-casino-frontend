import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GameCard from '../GameCard';
import WalletLink from 'Components/WalletLink';

const isInsufficientBalance = (balance) => balance === 0;

function ItemLogic({
  children,
  isLogged,
  balance,
  showNotice,
  name,
  isSupportDemoMode,
  rewrite,
}) {
  const gameLink = `/game/${rewrite}`;
  if (isLogged && isInsufficientBalance(balance)) {
    return (
      <div onClick={showNotice} style={{ cursor: 'pointer' }} title={name}>
        {children}
      </div>
    );
  }

  if (isLogged || isSupportDemoMode === true) {
    return (
      <Link to={gameLink} style={{ textDecoration: 'none' }} title={name}>
        {children}
      </Link>
    );
  }

  return (
    <WalletLink style={{ cursor: 'pointer' }} title={name}>
      {children}
    </WalletLink>
  );
}

function GamesListItem(props) {
  const { isSupportDemoMode, game, index } = props;
  return (
    <ItemLogic {...props}>
      <GameCard game={game} demo={isSupportDemoMode} index={index} />
    </ItemLogic>
  );
}

GamesListItem.propTypes = {
  game: PropTypes.object.isRequired,
};

export default GamesListItem;
