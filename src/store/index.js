import Vue from 'vue'
import Vuex from 'vuex'
import modal from "@/store/modules/modal"
import router from '@/router'
import http from '@/api/http'
import store from 'store'
import base from '@/config/base.config'
import isMobile from '@/util/isMobile'

Vue.use(Vuex)
const { TOKEN_NAME } = base

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: {},
    live2dDis: false
  },
  getters: {
    userInfo (state) {
      if (state.token) {
        return state.userInfo
      }
    }
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
    },
    REMOVE_TOKEN (state) {
      state.token = ''
      store.remove(TOKEN_NAME)
    },
    SET_USERINFO (state, userInfo) {
      state.userInfo = userInfo
    },
    REMOVE_USERINFO (state) {
      state.userInfo = ''
    }
  },
  actions: {
    /**
     * 设置token
     * 设置userInfo
     * @param dispatch
     * @param commit
     */
    login ({ dispatch, commit }) {
      commit('SET_TOKEN')
      dispatch('getUserInfo')
    },
    async getUserInfo ({ commit }) {
      try {
        let userInfo = await http({ type: 'getUserInfo' })
        commit('SET_USERINFO', userInfo)
        // 手机环境
        if (!isMobile()) {
          Vue.prototype.$notify({
            title: '登录成功',
            message: `欢迎来访 ${ userInfo.nikname }`,
            type: 'success'
          })
          // router.app._route.name 当前路由
          if (router.app._route.name !== 'index') {
            router.push('/index')
          }
        }
      } catch (err) {
        console.log('err', err)
      }

    },
    outside ({ commit }) {
      commit('REMOVE_TOKEN')
      commit('REMOVE_USERINFO')
    }
  },
  modules: {
    modal
  }
})
