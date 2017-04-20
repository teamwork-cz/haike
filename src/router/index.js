import VueRouter from 'vue-router'

import Home from './../views/Home' // 首页
import proLists from './../views/proLists' // 商品列表——嗨选

import ProInfo from './../views/ProInfo' // 商品详情页面
import Box from './../views/box' // 衣箱
import Cart from './../views/Cart'
import Order from './../views/Order' //订单
import Bpay from './../views/bpay' //包月付款页面
import Lpay from './../views/lpay' //包月付款页面
import CinemaDetail from './../views/CinemaDetail'
import Me from './../views/Me'
import NoData from './../views/NoData'
import NotFound from './../components/404'
import {Rent, RentDetail, RentOrder, Login, Reg} from './views'

const routes = [
  {
    name: 'index',
    path: '/',
    component: Home
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'reg',
    path: '/reg',
    component: Reg
  },
  {
    path: '/mv',
    component: Home
  },
  {
    path: '/hiselect',
    name: 'hiSelect',
    component: proLists
  },
  {
    path: '/order',
    name:'orderBox',
    component: Order
  },
  {
    path: '/Bpay',
    name:'bpay',
    component: Bpay
  },
   {
    path: '/Lpay',
    name:'lpay',
    component: Lpay
  },
  {
    path: '/cinema/detail/:id',
    name: 'cdetail',
    component: CinemaDetail
  },
  {
    path: '/me',
    component: Me
  },
  {
    path: '/no',
    component: NoData
  },

  {
    path: '/proInfo/:id',
    name: 'proInfo',
    component: ProInfo
  },
  {
    path: '/box',
    name: 'box',
    component: Box
  },
  {
    name: 'rent',
    path: '/rent',
    component: Rent
  },
  {
    name: 'rentDetail',
    path: '/rent-detail',
    component: RentDetail
  },
  {
    name: 'rentOrder',
    path: '/rent-order',
    component: RentOrder
  },
  {
    // 购物车页面
    name: 'cart',
    path: '/cart',
    component: Cart
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  // mode: 'history',  history模式
  routes
})
export default router
