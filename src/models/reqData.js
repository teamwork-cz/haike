import axios from 'axios'
import _ from 'lodash'
import test from './testData'
import axiosConfig from './axiosConfig.js'
let $ajax = axios.create(axiosConfig)
const requestApi = {
  // 首页活动
  login: {
    url: '/login',
    method: 'post'
  },
  reg: {
    url: '/reg',
    method: 'post'
  }
}

function getReqObj (p) {
  var req_obj = requestApi[p.apiName]
  req_obj = _.merge({}, req_obj, p)
  if (req_obj.method === 'post') {
    req_obj.data = _.merge({}, req_obj.data, req_obj.params)
    delete req_obj.params
  }
  return req_obj
}

export default {
  req: function (p) {
    const req_obj = getReqObj(p)
    // if (__STAGE__ === 'dev') {
    //   req_obj.apiName = p.apiName
    //   return test(req_obj)
    // }
    delete req_obj.apiName
    return $ajax(req_obj)
  },

  all: function (ps, cb) {
    const prs = []
    for (let i = 0; i < ps.length; i++) {
      prs.push(this.req(ps[i]))
    }
    return axios.all(prs).then(axios.spread(cb))
  }
}

export function updateConfig (opts) {
  _.merge($ajax.defaults, opts)
}
