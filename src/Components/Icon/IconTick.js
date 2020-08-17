import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 12 9';
const DEFAULT_FILL = '#ffffff';

const Icon = () => {
  return (
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L4.83211 8.58211C4.44158 8.97263 3.80842 8.97263 3.41789 8.58211L0.292893 5.45711C-0.0976311 5.06658 -0.0976311 4.43342 0.292893 4.04289C0.683417 3.65237 1.31658 3.65237 1.70711 4.04289L4.125 6.46079L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893Z'
      fill={DEFAULT_FILL}
    />
  );
};

export const IconTick = ({ size, ...props }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} {...props} />
);
