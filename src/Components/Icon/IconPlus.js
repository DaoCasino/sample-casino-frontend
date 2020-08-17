import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 24 24';
const DEFAULT_FILL = '#7E83A4';

const Icon = () => (
  <path
    fill={DEFAULT_FILL}
    fillRule='evenodd'
    d='M13 11V7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4zM4 0h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z'
  />
);

export const IconPlus = ({ size }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} />
);
