import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入视图组件
const Home = () => import('@/views/Layout.vue')
const ArticleList = () => import('@/views/ArticleList.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: Home,
    children: [
      {path: '/index', name: 'index', component: ArticleList}
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
