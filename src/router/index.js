import VueRouter from 'vue-router'

import Home from './../views/Home';
import proLists from './../views/proLists';

import ProInfo from './../views/ProInfo';
import Cart from './../views/Cart';
import Order from './../views/Order';
import CinemaDetail from './../views/CinemaDetail';
import Me from './../views/Me';
import NoData from './../views/NoData';
import NotFound from './../components/404';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/mv',
    component: Home,
  },
  {
    path: '/movie/detail/:id',
    name: 'detail',
    component: proLists,
  },
  {
    path: '/order',
    component: Order,
  },
  {
    path: '/cinema/detail/:id',
    name: 'cdetail',
    component: CinemaDetail,
  },
  {
    path: '/me',
    component: Me,
  },
  {
    path: '/no',
    component: NoData,
  },

  {
    path: '/proInfo/:id',
    name: 'proInfo',
    component: ProInfo,
  },
  {name:'cart',
    path: '/cart',
    component: Cart,
  },
    {
    path: '*',
    component: NotFound,
  }
];

const router = new VueRouter({
  // mode: 'history',  history模式
  routes,
});
export default router;
