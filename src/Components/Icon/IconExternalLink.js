import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 14 14';

const Icon = () => (
  <>
    <path
      d='M13 10V11.4C13 12.2837 12.2837 13 11.4 13H2.6C1.71634 13 1 12.2837 1 11.4V2.6C1 1.71634 1.71634 1 2.6 1H4'
      stroke='#30BF70'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.2002 1H13.0002V5.8'
      stroke='#30BF70'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.40039 6.6L13.0004 1'
      stroke='#30BF70'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </>
);

export const IconExternalLink = ({ size }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} />
);
