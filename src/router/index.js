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
    //新闻中心
    {
      path: '/news/list/:id',
      component: () => import(/* webpackChunkName: "contact" */ '@/pages/news/list/index.vue')
    },
    {
      path: '/news/detail/:id',
      component: () => import(/* webpackChunkName: "contact" */ '@/pages/news/detail/index.vue')
    },
    // 联系我们
    {
      path: '/contact/application',
      component: () => import(/* webpackChunkName: "contact" */ '@/pages/contact/application/index.vue')
    },
    //公共单页
    {
      path: '/common/:id',
      component: () => import(/* webpackChunkName: "contact" */ '@/pages/common/index.vue')
    },
    //demo
    {
      path: '/demo',
      component: () => import(/* webpackChunkName: "demo" */ '@/pages/demo/index.vue')
    }
  ]
})
