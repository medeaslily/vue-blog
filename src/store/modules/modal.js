export default {
  namespaced: true,
  state: {
    isShow: false,
    type: ''
  },
  mutations: {
    OPEN(state) {
      state.isShow = true
    },
    CLOSE(state) {
      state.isShow = false
    },
    CHANGE_TYPE(state, payload) {
      state.type = payload.type
    }
  },
  actions: {
    open({ commit }, type) {
      commit('CHANGE_TYPE', { type })
      commit('OPEN')
    },
    close({ commit }) {
      commit('CLOSE')
    }
  }
}