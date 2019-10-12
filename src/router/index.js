import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRouterMap = [
  { path: '/login', name: 'login', component: () => import('@/view/login/login'), hidden: true },
  { path: '/start', name: 'start', component: () => import('@/view/srtart/start'), hidden: true },
  { path: '/home',
    name: 'home',
    component: () => import('@/view/home/home'),
    hidden: true,
    children: [
      { path: '/video', component: resolve => require(['@/view/video/index'], resolve), hidden: true }
    ] },
  { path: '/404', component: resolve => require(['@/view/404/404'], resolve), hidden: true },

  { path: '/', redirect: '/login', hidden: true },

  { path: '*', redirect: '/404', hidden: true }
]
export default new Router({
  mode: 'hash', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
