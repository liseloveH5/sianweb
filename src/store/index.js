import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    header: []
  },
  mutations,
  actions,
  modules: {
  },
})
