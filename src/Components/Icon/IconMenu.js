import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 20 14';
const DEFAULT_STROKE = '#7E83A4';

const Icon = () => (
  <g
    fill='none'
    fillRule='evenodd'
    stroke={DEFAULT_STROKE}
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
  >
    <path d='M1 7h18M1 1h18M1 13h18' />
  </g>
);

export const IconMenu = ({ size, ...props }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} {...props} />
);
