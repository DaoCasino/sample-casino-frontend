import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 32 32';
const DEFAULT_FILL = '#393E57';

const getCircleSize = (size) => size / 2;

export const Icon = ({ size }) => {
  const circleSize = getCircleSize(size);
  return (
    <g fill='none' fillRule='evenodd'>
      <path d='M0 0h32v32H0z' />
      <circle
        cx={circleSize}
        cy={circleSize}
        r={circleSize}
        fill={DEFAULT_FILL}
      />
      <rect width={size} height={size} fill={DEFAULT_FILL} rx='4' />
      <path
        fill='#FFF'
        d='M23.273 18.592v-5.184s0-2.499-2.507-2.499h-9.533s-2.506 0-2.506 2.499v5.184s0 2.499 2.506 2.499h9.533s2.507 0 2.507-2.499m-4.45-2.585l-4.76 2.788v-5.576l4.76 2.788'
      />
    </g>
  );
};

export const IconYoutube = ({ size }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} />
);
