import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 16 16';
const DEFAULT_FILL = '#7687A6';

const Icon = () => (
  <g fill='none' fillRule='evenodd'>
    <path fill='#FFF' fillOpacity='0' d='M-4-4h24v24H-4z' />
    <path
      stroke={DEFAULT_FILL}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M4.889 1H2.556C1.696 1 1 1.696 1 2.556v2.333m14 0V2.556C15 1.696 14.304 1 13.444 1h-2.333m0 14h2.333c.86 0 1.556-.696 1.556-1.556v-2.333m-14 0v2.333C1 14.304 1.696 15 2.556 15h2.333'
    />
  </g>
);

export const IconExpand = ({ size }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} />
);
