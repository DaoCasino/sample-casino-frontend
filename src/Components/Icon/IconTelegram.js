import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 17 16';
const DEFAULT_FILL = '#00B3FF';

const Icon = () => {
  return (
    <path
      fill={DEFAULT_FILL}
      d='M16.537.67l-2.285 13.714a.563.563 0 0 1-.286.402.548.548 0 0 1-.491.026L9.43 13.161l-2.16 2.634a.526.526 0 0 1-.438.205.483.483 0 0 1-.196-.036.56.56 0 0 1-.273-.21.557.557 0 0 1-.102-.326v-3.116l7.714-9.455-9.545 8.259L.904 9.67c-.22-.084-.34-.247-.358-.491a.53.53 0 0 1 .286-.527L15.69.08a.554.554 0 0 1 .607.018.558.558 0 0 1 .241.57z'
      opacity='.8'
    />
  );
};

export const IconTelegram = ({ size }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} />
);
