import types from './mutation-types'

export default  {
  [types.SET_HEADER]: (state, val) => {
    state.header = val
  }
}
