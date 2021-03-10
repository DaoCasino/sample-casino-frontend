import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const LABELS = {
  hot: {
    label: 'Hot',
    background: 'linear-gradient(180deg, #E91E63 0%, #C81753 100%);',
  },
  popular: {
    label: 'Most Popular',
    background: 'linear-gradient(180deg, #30BF70 0%, #1D9753 100%);',
  },
  new: {
    label: 'New',
    background: 'linear-gradient(180deg, #2196F3 0%, #1A82D3 100%);',
  },
};

const getLabelText = (state) => LABELS[state].label;
const getLabelBackground = (state) => LABELS[state].background;

const from = '-400%';
const move = keyframes`
  from {
    transform: translateX(${from});
  }

  to {
    transform: translateX(100%);
  }
`;

const LabelWrapper = styled.div`
  top: 24px;
  left: 24px;
  position: absolute;
`;

const randomAnimationDelay = (max) => Math.floor(Math.random() * max) + 'ms';

const Label = styled.div`
  border-radius: 12px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #fff;
  padding: 4px 10px;
  background: ${({ state }) => getLabelBackground(state)};

  position: relative;
  overflow: hidden;

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    background: linear-gradient(
      266.19deg,
      rgba(255, 255, 255, 0) 7.29%,
      #ffffff 50.17%,
      rgba(255, 255, 255, 0) 93.75%
    );
    opacity: 0.5;
    animation: ${move} 3s cubic-bezier(0.11, 0, 0.5, 0) infinite;
    animation-delay: ${(props) => props.delay};
  }
`;

const getRandomState = () => {
  const labelKeys = Object.keys(LABELS);
  return labelKeys[Math.floor(Math.random() * labelKeys.length)];
};

function GameCardLabel({ state, index }) {
  if (state === 'random') {
    state = getRandomState();
  }
  return (
    <LabelWrapper>
      <Label state={state} delay={randomAnimationDelay(index * 500)}>
        {getLabelText(state)}
      </Label>
    </LabelWrapper>
  );
}

GameCardLabel.propTypes = {
  state: PropTypes.oneOf(['hot', 'new', 'popular', 'random']).isRequired,
};

export default GameCardLabel;
