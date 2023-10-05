import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入视图组件
const Home = () => import('@/views/Layout.vue')
const ArticleList = () => import('@/views/ArticleList.vue')
const Column = () => import('@/views/ColumnView.vue')
const Socket = () => import('@/views/SocketView.vue')
const User = () => import('@/views/UserView.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: Home,
    children: [
      {path: '/index', name: 'index', component: ArticleList},
      {path: '/column', name: 'column', component: Column},
      {path: '/socket', name: 'socket', component: Socket},
      {path: '/user', name: 'user', component: User},
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
