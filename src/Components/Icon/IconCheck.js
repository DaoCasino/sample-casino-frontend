import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 12 12';
const DEFAULT_FILL = '#30BF70';

const Icon = () => (
  <path
    d='M6 11.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm0-1a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM4.702 5.776l.673.734 1.923-2.098a.5.5 0 11.737.676l-2.291 2.5a.5.5 0 01-.738 0L3.965 6.45a.5.5 0 01.737-.675z'
    fill={DEFAULT_FILL}
    fillRule='nonzero'
  />
);

export const IconCheck = ({ size }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} />
);
