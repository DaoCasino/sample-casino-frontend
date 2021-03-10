import React from 'react';
import styled from 'styled-components';

import Image from '../GameCardImage';
import Label from '../GameCardLabel';
import { Icon } from 'Components/Icon';
import MoveAnimation from '../MoveAnimation';

const Wrapper = styled.div`
  height: 312px;
  background: linear-gradient(180deg, #242e42 0%, #1c222f 100%);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
`;

const TextShield = styled.div`
  position: absolute;
  bottom: 24px;
  left: 0;

  width: 100%;
  text-align: center;

  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  letter-spacing: 1px;
  text-transform: uppercase;

  color: #ffffff;
`;

const IconShield = styled.div`
  width: 32px;
  height: 32px;
  right: 10px;
  bottom: 10px;
  position: absolute;
  overflow: hidden;
  border-radius: 8px;
  background: #242e42;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function GameCard(props) {
  const { index, game } = props;
  return (
    <MoveAnimation>
      <Wrapper>
        <Image {...props} />
        {game.label && <Label state={game.label} index={index} />}
        {game.isDAOGame && (
          <>
            <TextShield>DAOGames</TextShield>
            <IconShield>
              <Icon icon='dao-shield' size={16} />
            </IconShield>
          </>
        )}
      </Wrapper>
    </MoveAnimation>
  );
}

export default GameCard;
