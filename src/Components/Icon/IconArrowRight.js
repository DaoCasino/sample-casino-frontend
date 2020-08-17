import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 6 10';

const Icon = () => (
  <g fill='none' fillRule='evenodd'>
    <path fill='#FFF' fillOpacity='0' d='M-9-7h24v24H-9z' />
    <path
      stroke='#FFF'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M1 9l4-4-4-4'
    />
  </g>
);

export const IconArrowRight = ({ size }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} />
);
