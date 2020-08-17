import React from 'react';
import { IconBase } from './IconBase';

const VIEW_BOX = '0 0 13 20';
const DEFAULT_FILL = '#21252E';

const Icon = () => (
  <React.Fragment>
    <defs>
      <linearGradient id='a' x1='0%' y1='50%' y2='50%'>
        <stop offset='0%' stopColor='#597AE8' />
        <stop offset='100%' stopColor='#2B5EE2' />
      </linearGradient>
    </defs>
    <path
      fill={DEFAULT_FILL}
      fillRule='nonzero'
      d='M10.913 10.571c.178.21.34.433.485.67.992 1.69.992 4.035-.003 5.73a5.246 5.246 0 0 1-2.057 1.92 6.08 6.08 0 0 1-2.9.69H.55V12.27h2.569v4.674H6.45c.79.027 1.558-.26 2.131-.8.54-.516.855-1.306.83-2.096v-.016c.026-.787-.291-1.582-.827-2.095a2.967 2.967 0 0 0-.035-.032 7.274 7.274 0 0 0 1.088-.46c.461-.239.89-.533 1.276-.873zM3.12 4.827V8.63h3.078a3.027 3.027 0 0 0 2.178-.816 2.761 2.761 0 0 0 .849-2.08v-.017a2.753 2.753 0 0 0-.847-2.076 3.029 3.029 0 0 0-2.18-.819H.55V.439h5.635c1-.014 1.988.22 2.873.683a5.188 5.188 0 0 1 2.036 1.902 5.348 5.348 0 0 1-.002 5.416 5.184 5.184 0 0 1-2.033 1.897 6.018 6.018 0 0 1-2.87.683H.55V4.827h2.569z'
    />
  </React.Fragment>
);

export const IconDaoBet = ({ size }) => (
  <IconBase size={size} viewBox={VIEW_BOX} Icon={Icon} />
);
