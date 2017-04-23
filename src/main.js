import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import store from './store'
import router from './router'
import reqData from './models/reqData'
import VueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import 'assets/css/common.css'
import 'assets/css/swiper.min.css'
import LazyLoad from './components/lazyload'

import App from './App'
Vue.config.keyCodes = {
  enter: 13
}
Vue.use(LazyLoad)
Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(VueResource)

router.beforeEach((to, from, next) => {
  // store._mutations.pushLoadStack[0]()
  next()
})
Vue.mixin({
  created () {
    this.$reqData = reqData
  }
})
router.afterEach(route => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  window.onscroll = null
})

var app = new Vue({
  el: '#app',
  router,
  store,
  ...App
})
