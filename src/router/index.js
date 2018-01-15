import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home/index.vue')
    },

    {
      path: '/contact/message',
      component: () => import(/* webpackChunkName: "contact" */ '@/pages/contact/message/index.vue')
    },

    {
      path: '/news/list',
      component: () => import(/* webpackChunkName: "contact" */ '@/pages/news/list/index.vue')
    },
    {
      path: '/news/detail',
      component: () => import(/* webpackChunkName: "contact" */ '@/pages/news/detail/index.vue')
    },

    {
      path: '/demo',
      component: () => import(/* webpackChunkName: "demo" */ '@/pages/demo/index.vue')
    },
  ]
})
