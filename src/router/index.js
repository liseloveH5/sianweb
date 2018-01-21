import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    //首页
    {
      path: '/',
      component: () => import('@/pages/home/index.vue')
    },
    //走进思安
    {
      path: '/introduce/aboutus',
      component: () => import(/* webpackChunkName: "contact" */ '@/pages/introduce/aboutus/index.vue')
    },
    {
      path: '/introduce/leaderMessage',
      component: () => import(/* webpackChunkName: "contact" */ '@/pages/introduce/leaderMessage/index.vue')
    },
    {
      path: '/introduce/development',
      component: () => import(/* webpackChunkName: "contact" */ '@/pages/introduce/development/index.vue')
    },
    {
      path: '/introduce/cultrue',
      component: () => import(/* webpackChunkName: "contact" */ '@/pages/introduce/cultrue/index.vue')
    },
    //新闻中心
    {
      path: '/news/list',
      component: () => import(/* webpackChunkName: "contact" */ '@/pages/news/list/index.vue')
    },
    //产品中心
    {
      path: '/product/list',
      component: () => import(/* webpackChunkName: "contact" */ '@/pages/product/list/index.vue')
    },
    // 联系我们
    {
      path: '/contact/message',
      component: () => import(/* webpackChunkName: "contact" */ '@/pages/contact/message/index.vue')
    },
    //demo
    {
      path: '/demo',
      component: () => import(/* webpackChunkName: "demo" */ '@/pages/demo/index.vue')
    }
  ]
})
