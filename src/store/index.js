import Vue from 'vue'
import Vuex from 'vuex'
import videoMutations from './video/mutations'
import loadingMutations from './loading/mutations'
import cityMutations from './city/mutations'
import cityAcions from './city/actions'
import comingMutations from './coming/mutations'
import areaMutations from './cinema/mutations'
import cartMutations from './cart/mutations'
import clothesBox from './clothesBox'
import address from './address.js'

Vue.use(Vuex)

// 该模块的初始状态
const cart = {
  mutations: cartMutations
}

const videoGetters = {
  showMask: state => state.playStatus
}
const video = {
  state: {
    url: '',
    cover: '',
    playStatus: false
  },
  mutations: videoMutations,
  getters: videoGetters
}

const loading = {
  state: {
    stack: []
  },
  mutations: loadingMutations
}

const cityGetters = {
  hotLists: state => state.data,
  cityName: state => state.name
}
const city = {
  state: {
    name: '北京',
    show: false,
    rN: 'bj',
    data: []
  },
  actions: cityAcions,
  mutations: cityMutations,
  getters: cityGetters
}

const coming = {
  state: {
    lists: []
  },
  mutations: comingMutations
}

const cinema = {
  state: {
    area: []
  },
  mutations: areaMutations
}

export default new Vuex.Store({
  modules: {
    video,
    loading,
    city,
    coming,
    cinema,
    cart,
    clothesBox,
    address
  }
})
