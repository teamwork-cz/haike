// import * as types from './mutation-types'
// export const setToken = ({ dispatch }, token) => {
//   dispatch(types.SET_TOKEN, token)
// }

// index actions
export const changePrice = makeAction('CHANGE_PRICE')
export const changeStyle = makeAction('CHANGE_STYLE')
export const addItem = makeAction('ADD_ITEM')
export const removeItem = makeAction('REMOVE_ITEM')

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}


// export const CHANGE_PRICE = 'CHANGE_PRICE'
// export const CHANGE_STYLE = 'CHANGE_STYLE'
// export const ADD_ITEM = 'ADD_ITEM'
// export const REMOVE_ITEM = 'REMOVE_ITEM'
