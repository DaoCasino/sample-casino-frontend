import {
  Games,
  Game,
  Faq,
  SamplePage,
} from 'Screens';

const routes = [
  {
    path: '/',
    exact: true,
    component: Games,
  },
  {
    path: '/game/:id',
    exact: false,
    component: Game,
  },
  {
    path: '/faq/:id?',
    exact: false,
    component: Faq,
  },
  {
    path: '/sample',
    exact: false,
    component: SamplePage,
  },
];

export default routes;
