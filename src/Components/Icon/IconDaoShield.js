import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 21 24';

const Icon = () => (
  <React.Fragment>
    <defs>
      <linearGradient
        x1='88.1610509%'
        y1='99.8430053%'
        x2='13.0875896%'
        y2='1.78787207%'
        id='linearGradient-1'
      >
        <stop stopColor='#2FBADC' offset='0%'></stop>
        <stop stopColor='#24DC41' offset='100%'></stop>
      </linearGradient>
    </defs>
    <g
      id='main-page'
      stroke='none'
      strokeWidth='1'
      fill='none'
      fillRule='evenodd'
    >
      <g
        id='sample_icons-(in-progress)'
        transform='translate(-298.000000, -54.000000)'
      >
        <g id='icon/shield' transform='translate(298.000000, 54.000000)'>
          <g id='shield-(5)'>
            <path
              d='M0,3 L0,16.1206114 C0,17.3496154 0.671524,18.4846629 1.760255,19.0956 L7.56375818,22.352297 C9.38748986,23.3757032 11.6125101,23.3757032 13.4362418,22.352297 L19.239745,19.0956 C20.3284742,18.484656 21,17.3496171 21,16.1206114 L21,3 C21,1.34314575 19.6568542,-7.48448398e-16 18,-4.4408921e-16 L3,0 C1.34314575,3.04359188e-16 -2.02906125e-16,1.34314575 0,3 Z'
              id='Path'
              fill='url(#linearGradient-1)'
            ></path>
            <path
              d='M12,12.55 C13.4083261,12.55 14.55,11.4083261 14.55,10 C14.55,8.59167389 13.4083261,7.45 12,7.45 L4.55,7.45 L4.55,4.55 L12,4.55 C15.0099519,4.55 17.45,6.99004811 17.45,10 C17.45,13.0099519 15.0099519,15.45 12,15.45 L4.55,15.45 L4.55,9.55 L7.45,9.55 L7.45,12.55 L12,12.55 Z'
              id='Path'
              fill='#FFFFFF'
              fillRule='nonzero'
            ></path>
          </g>
        </g>
      </g>
    </g>
  </React.Fragment>
);

export const IconDaoShield = ({ size }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} />
);
