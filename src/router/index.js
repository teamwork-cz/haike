import VueRouter from 'vue-router'

import Home from './../views/Home' // 首页
import proLists from './../views/proLists' // 商品列表——嗨选

import ProInfo from './../views/ProInfo' // 商品详情页面
import Box from './../views/box' // 衣箱
import Cart from './../views/Cart'
import OrderBox from './../views/OrderBox' //包月订单
import OrderLf from './../views/OrderLf' //礼服订单
import Bpay from './../views/bpay' //包月付款页面
import Lpay from './../views/lpay' //包月付款页面
import CinemaDetail from './../views/CinemaDetail'
import Me from './../views/Me'
import NoData from './../views/NoData'
import NotFound from './../components/404'
import {Rent, RentDetail, RentOrder, Login, Reg} from './views'
import Address from './../views/Address'
import AddAddress from './../views/AddAdress'
import orderLists from './../views/orderLists'


const routes = [
  {//首页
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
  {//嗨选首页
    path: '/hiselect',
    name: 'hiSelect',
    component: proLists
  },
  {
    path: '/orderBox',
    name:'orderBox',
    component: OrderBox
  },
   {
    path: '/orderLf',
    name:'orderLf',
    component: OrderLf
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
    name:'me',
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
  {//购物袋
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
    name: 'address',
    path: '/address',
    component: Address
  },
   {
    name: 'addaddress',
    path: '/addaddress',
    component: AddAddress
  },
  {
    name: 'orders',
    path: '/orders/:id',
    component: orderLists
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
