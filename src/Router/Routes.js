import React from 'react';

import Games from 'Screens/Games';
import Game from 'Screens/Game';

const routes = [
  {
    path: '/',
    exact: true,
    component: Games,
  },
  {
    path: '/game/:rewrite',
    exact: false,
    component: Game,
  },
  {
    path: '/faq',
    exact: false,
    component: React.lazy(() => import('../Screens/Faq')),
  },
  {
    path: '/sample',
    exact: false,
    component: React.lazy(() => import('../Screens/SamplePage')),
  },
];

export default routes;
