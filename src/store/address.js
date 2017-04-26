const UPDATE_ADDRESSES = 'UPDATE_ADDRESSES'
const INIT_ADDRESS = 'INIT_ADDRESS'
const state = {
  address_is_init: false,
  addresses: []
}
const actions = {
  initAddresses ({commit, state}) {
    const data = {
      address_is_init: true,
      addresses: [
        {
          defaultFlag: true,
          userId: '402882d05b7c76d1015b7c7b25d20000',
          address: '\u822a\u7a7a100\u53f7',
          tel: '18501789483',
          name: '\u6768',
          id: '1',
          regionCode: '533633',
          region: '\u6e56\u5317\u7701 \u8944\u9633\u5e02 \u5e02\u8f96\u533a'
        },
        {
          defaultFlag: false,
          userId: '402882d05b7c76d1015b7c7b25d20000',
          address: '\u822a\u7a7a101\u53f7',
          tel: '17136715843',
          name: '\u5b59',
          id: '2',
          regionCode: '333333',
          region: '\u6e56\u5317\u7701 \u8944\u9633\u5e02 \u5e02\u8f96\u533a1'
        }
      ]
    }
    commit(INIT_ADDRESS, data)
  },
  updateaddresses ({commit, state}, addresses) {
    commit(UPDATE_ADDRESSES, addresses)
  }
}
const mutations = {
  [UPDATE_ADDRESSES] (state, {type, index, address}) {
    if (type === 'del') {
      state.addresses.splice(index, 1)
    }
    if (type === 'add') {
      state.addresses.splice(1, 0, address)
    }
    if (type === 'default') {
      const temp = state.addresses[index]
      state.addresses.splice(index, 1)
      state.addresses[0].defaultFlag = false
      temp.defaultFlag = true
      state.addresses.unshift(temp)
    }
  },
  [INIT_ADDRESS] (state, data) {
    state.count = data.count
    state.addresses = data.addresses
  }
}
const getters = {
  defaultAddress: state => {
    return state.addresses.find(function (addr) {
      return addr.defaultFlag
    })
  },
  getAddresses: state => {
    return state.addresses
  }
}
export default {
  state: state,
  actions: actions,
  mutations: mutations,
  getters
}
