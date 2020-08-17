import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 32 32';
const DEFAULT_FILL = '#393E57';

const getCircleSize = (size) => size / 2;

const Icon = ({ size }) => {
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
        d='M22.2 12.251a3.28 3.28 0 0 0 1.378-1.827 6.076 6.076 0 0 1-1.99.802 3.05 3.05 0 0 0-2.287-1.044c-1.73 0-3.132 1.48-3.132 3.304 0 .26.026.512.08.753-2.604-.138-4.912-1.452-6.459-3.453a3.436 3.436 0 0 0-.424 1.662c0 1.146.554 2.158 1.394 2.751a3.021 3.021 0 0 1-1.42-.413v.04c0 1.603 1.08 2.938 2.515 3.241-.264.078-.54.116-.827.116-.201 0-.398-.02-.589-.058.399 1.312 1.556 2.269 2.927 2.294a6.083 6.083 0 0 1-4.639 1.37 8.544 8.544 0 0 0 4.803 1.484c5.765 0 8.915-5.036 8.915-9.403 0-.144-.002-.286-.008-.427A6.55 6.55 0 0 0 24 11.73a6.005 6.005 0 0 1-1.8.52z'
      />
    </g>
  );
};

export const IconTwitter = ({ size }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} />
);
