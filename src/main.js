import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import api from '@/plugins/http'
import '@/assets/style/element-variables.scss'
import '@/assets/style/reset.css'
import store from './store'
import router from './router'
import _ from 'lodash'

Vue.config.productionTip = false
Vue.prototype._ = _
Vue.use(api)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
