import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'videos-ad'
  },
  {
    path: '/videos-ad',
    component: () => import('@/views/Home')
  },
  { path: '*', redirect: '/404' },
  { path: '/404', component: () => import('@/views/PageNotFound') },
  { path: '/500', component: () => import('@/views/PageAPIError') },
  { path: '/501', component: () => import('@/views/PageError') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
