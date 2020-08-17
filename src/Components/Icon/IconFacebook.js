import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 32 32';
const DEFAULT_FILL = '#393E57';

const Icon = ({ size }) => (
  <g fill='none' fillRule='evenodd'>
    <path d='M0 0h32v32H0z' />
    <circle cx='16' cy='16' r='16' fill={DEFAULT_FILL} />
    <rect width={size} height={size} fill={DEFAULT_FILL} rx='4' />
    <path
      fill='#FFF'
      d='M16.956 25.455H13.41V17.09h-1.773v-2.882h1.773v-1.73c0-2.352 1-3.75 3.844-3.75h2.367v2.883h-1.48c-1.106 0-1.18.402-1.18 1.154l-.004 1.443h2.68l-.313 2.882h-2.367v8.365z'
    />
  </g>
);

export const IconFacebook = ({ size }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} />
);
