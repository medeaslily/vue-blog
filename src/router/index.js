import Vue from 'vue'
import VueRouter from 'vue-router'
import Column from "@/views/Column/index.vue";
import Article from "@/views/Article/index.vue";
import ArticleList from "@/views/ArticleList/index.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout.vue'),
    children: [
      { path: '/', redirect: '/article/list' },
      { path: '/column', component: Column },
      { path: '/article/:id', component: Article },
      { path: '/article/list', component: ArticleList }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
