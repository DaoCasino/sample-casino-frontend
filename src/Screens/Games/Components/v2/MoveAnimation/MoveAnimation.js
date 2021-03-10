import React, { useEffect } from 'react';
import styled from 'styled-components';

const VARIATION = 12;
const SCALE = {
  default: 1,
  move: 1.045,
  down: 0.95,
  up: 1.02,
};

const objToStyle = (obj) => {
  const params = [];
  for (var key in obj) {
    params.push(key + '(' + obj[key] + ')');
  }

  return params.join(' ');
};

const getTransformStyle = (scale, rotateX = 0, rotateY = 0) => {
  const transform = {
    perspective: '500px',
    scale: scale || SCALE.default,
    rotateX: rotateX + 'deg',
    rotateY: rotateY + 'deg',
  };

  return objToStyle(transform);
};

const Card = styled.div`
  transition: all ease 0.5s;

  &:hover {
    transition: all ease 0.1s;
  }
`;
const getRandomString = () => Math.random().toString(36).substring(7);

const setCardStyle = (id) => {
  console.log('add mouse lisnters by', id);
  const card = document.getElementById(id);
  const cardWidth = card.clientWidth;
  const cardHeight = card.clientHeight;

  const handleMove = (e) => {
    const mouseLayerX = e.layerX;
    const mouseLayerY = e.layerY;
    const rotateX = -VARIATION * ((mouseLayerY - cardHeight / 2) / cardHeight);
    const rotateY = VARIATION * ((mouseLayerX - cardWidth / 2) / cardWidth);

    card.style.transform = getTransformStyle(SCALE.move, rotateX, rotateY);
  };

  const handleOut = () =>
    (card.style.transform = getTransformStyle(SCALE.default));
  const handleDown = () => {
    card.style.transform = getTransformStyle(SCALE.down);
  };
  const handleUp = () => {
    card.style.transform = getTransformStyle(SCALE.up);
  };

  card.addEventListener('mouseout', handleOut);
  card.addEventListener('mousemove', handleMove);
  card.addEventListener('mousedown', handleDown);
  card.addEventListener('mouseup', handleUp);

  return () => {
    console.log('remove mouse lisnters by', id);
    card.removeEventListener('mouseout', handleOut);
    card.removeEventListener('mousemove', handleMove);
    card.removeEventListener('mousedown', handleDown);
    card.removeEventListener('mouseup', handleUp);
  };
};

function MoveAnimation({ children }) {
  const id = getRandomString();
  console.log('render MoveAnimation', id);
  useEffect(() => {
    return setCardStyle(id);
  }, [id]);
  return <Card id={id}>{children}</Card>;
}

export default MoveAnimation;
