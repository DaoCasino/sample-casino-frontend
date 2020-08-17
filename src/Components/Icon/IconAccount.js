import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 22 22';
const DEFAULT_FILL = '#30BF70';

const Icon = () => (
  <path
    fill={DEFAULT_FILL}
    fillRule='evenodd'
    stroke='#1B1F26'
    strokeWidth='.5'
    d='M11 1a10 10 0 0 0-7.35 16.76 10 10 0 0 0 14.7 0A10 10 0 0 0 11 1zm0 18a8 8 0 0 1-5.55-2.25 6 6 0 0 1 11.1 0A8 8 0 0 1 11 19zM9 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm8.91 6A8 8 0 0 0 14 11.62a4 4 0 1 0-6 0A8 8 0 0 0 4.09 15 7.92 7.92 0 0 1 3 11a8 8 0 1 1 16 0 7.92 7.92 0 0 1-1.09 4z'
  />
);

export const IconAccount = ({ size }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} />
);
