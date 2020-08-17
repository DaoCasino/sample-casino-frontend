import React from 'react';
import styled from 'styled-components';

const GameCardWrapper = styled.div`
  border-radius: 6px;
  backdrop-filter: blur(3px);
  border: solid 1px rgba(0, 0, 0, 0.04);
  background-color: rgba(19, 22, 27, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 0;
  visibility: hidden;
  transition: 0.55s opacity, 0.55s visibility;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  padding: 20px;
`;

const emptyImage = `linear-gradient(
  256deg,
  rgba(255, 255, 255, 0) 1%,
  rgba(255, 255, 255, 0.05) 47%,
  rgba(255, 255, 255, 0) 92%
),
linear-gradient(to bottom, #1c212b, #1c212b);`;

const getBackground = ({ icons, url }, type) => {
  if (icons && type in icons) {
    return `url(${url + icons[type]})`;
  }
  return emptyImage;
};

export const GameCardItem = styled.div`
  height: 238px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.32) 0px 2px 8px 0px;
  background-position: center center;
  background-size: cover;
  background-color: #1c212b;
  background-image: ${(props) => getBackground(props, 'small')};
  position: relative;

  &:hover {
    ${GameCardWrapper} {
      opacity: 1;
      visibility: visible;
    }
  }

  ${({ theme: { media } }) => media.greaterThan('xs_gt')`
    height: 222px;

    &.extended {
      height: 160px;
      background-image: ${(props) => getBackground(props, 'big')};
    }
  `}

  ${({ theme: { media } }) => media.greaterThan('sm_gt')`
    background-image: ${(props) => getBackground(props, 'big')};

    &.extended {
      height: 222px;
    }
  `}
`;

const GameCardTitle = styled.div`
  font-family: Gilroy;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #ffffff;
  text-align: center;
`;

const GameCardContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GameCardFooter = styled.div`
  opacity: 0.5;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #ffffff;
  text-align: center;
`;

const GameCardButton = styled.div`
  border-radius: 6px;
  background-color: #30bf70;
  text-transform: uppercase;
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: 1px;
  color: #ffffff;
  padding: 16px 0;
  text-align: center;
  width: 60%;
`;

const GameCardShield = styled.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.3;
  text-align: center;
  width: 100%;
`;

function GameCard(props) {
  const { game, info } = props;
  return (
    <GameCardItem
      icons={game.icons}
      url={game.url}
      className={info ? 'extended' : ''}
    >
      <GameCardShield>DAOGames</GameCardShield>
      <GameCardWrapper>
        <GameCardTitle>{game.name}</GameCardTitle>
        <GameCardContent>
          <GameCardButton>Play</GameCardButton>
        </GameCardContent>
        <GameCardFooter>DAOBet</GameCardFooter>
      </GameCardWrapper>
    </GameCardItem>
  );
}

export default GameCard;
