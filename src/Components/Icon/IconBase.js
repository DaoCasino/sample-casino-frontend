import React from 'react';

const DEFAULT_SIZE = 32;

export const IconBase = ({ size = DEFAULT_SIZE, viewBox, Icon, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox={viewBox}
      {...props}
    >
      <Icon size={size} />
    </svg>
  );
};
