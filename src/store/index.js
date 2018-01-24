import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    header: []
  },
  actions,
  modules: {
  },
})
