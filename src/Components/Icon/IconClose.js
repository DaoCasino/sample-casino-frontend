import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 14 14';
const DEFAULT_FILL = '#7687A6';

const Icon = () => (
  <g fill='none' fillRule='evenodd'>
    <path fill='#FFF' fillOpacity='0' d='M-5-5h24v24H-5z' />
    <g
      stroke={DEFAULT_FILL}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <path d='M13 1L1 13M1 1l12 12' />
    </g>
  </g>
);

export const IconClose = ({ size }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} />
);
