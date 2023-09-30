import Vue from 'vue'
import Vuex from 'vuex'
import modal from "@/store/modules/modal"
import store from 'store'
import base from '@/config/base.config'

Vue.use(Vuex)
const { TOKEN_NAME } = base

export default new Vuex.Store({
  state: {
    token: store.get(TOKEN_NAME) || '',
    live2dDis: false
  },
  getters: {
  },
  mutations: {
    RIGHT_LIVE2D_DIS (state) {
      state.live2dDis = true
    },
    LEFT_LIVE2D_DIS (state) {
      state.live2dDis = false
    },
    SET_TOKEN (state) {
      state.token = store.get(TOKEN_NAME)
    }
  },
  actions: {
    login ({ commit }) {
      commit('SET_TOKEN')
    }
  },
  modules: {
    modal
  }
})
