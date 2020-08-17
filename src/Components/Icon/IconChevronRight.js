import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 10 6';

const Icon = () => (
  <g fill='none' fillRule='evenodd'>
    <path fill='#FFF' fillOpacity='0' d='M17 15V-9H-7v24z' />
    <path
      stroke='#30BF70'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M1 5l4-4 4 4'
    />
  </g>
);

export const IconChevronRight = ({ size }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} />
);
