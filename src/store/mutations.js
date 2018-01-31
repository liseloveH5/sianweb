import types from './mutation-types'

export default  {
  [types.SET_HEADER]: (state, val) => {
    state.header = val.header;
  },
  [types.SET_LANG]: (state, val) => {
    state.lang = val.lang;
  },
  [types.SET_FOOTER]: (state, val) => {
    state.footer = val.footer;
  }
}
