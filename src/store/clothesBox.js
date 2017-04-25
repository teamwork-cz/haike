const UPDATE_CLOTHES = 'UPDATE_CLOTHES'
const INIT = 'INIT'
const state = {
  count: 0,
  clothes: []
}
const actions = {
  initClothBox ({commit, state}) {
    const data = {
      count: 2,
      clothes: [
        {
          title: '李维斯(Levi’s)女士休闲群装 #Medium Stonewash',
          color: '黄色',
          size: 'S'
        },
        {
          title: '李维斯(Levi’s)女士休闲群装 #Medium Stonewash',
          color: '黄色',
          size: 'S'
        }
      ]
    }
    commit(INIT, data)
  },
  updateClothes ({commit, state}, clothes) {
    commit(UPDATE_CLOTHES, clothes)
  }
}
const mutations = {
  [UPDATE_CLOTHES] (state, {type, index, cloth}) {
    if (type === 'del') {
      state.clothes.splice(index, 1)
      --state.count
    }
    if (type === 'add') {
      ++state.count
      state.clothes.push(cloth)
    }
    if (type === 'update') {
      state.clothes[index] = cloth
    }
  },
  [INIT] (state, data) {
    state.count = data.count
    state.clothes = data.clothes
  }
}
const getters = {
  clothesCount: state => {
    return state.count
  },
  boxClothes: state => {
    return state.clothes
  }
}
export default {
  state: state,
  actions: actions,
  mutations: mutations,
  getters
}
