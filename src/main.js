// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引用vuex
import store from '@/store'

// 引用过滤器
import * as filters from '@/services/filter'
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})



// 引用第三方UI框架
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// 将Promise抛出为全局对象  解决ie10无法打开问题
window.Promise = Promise


// 引用第三方ajax插件
import axios from 'axios'
import qs from 'qs';
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://api.sianmed.com/web';
window.axios = axios

// axios 全局拦截器
// 降级取消option请求
axios.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  if(config.method === 'post') {
    config.data = qs.stringify( {
      ...config.data
    })
  }
  return config;
}, function (error) {
  return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {
  // Do something with response data
  if(response.data.code && response.data.code == '000'){
    return response.data.msg;
  } else {
    return Promise.reject(response);
  }
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


// 引用自己的全局样式
import '@/assets/style/index.less'


// 绑定全局对象Util
import Util from '@/services/Util.js'
window.util = new Util();



// 引用自己全局组建 components
import * as components from '@/components'
for (let plugin in components) {
  let currentPlugin = components[plugin];
  Vue.component(currentPlugin.name, currentPlugin)
}

// 引入多色字体图标
// require('@/assets/iconfont/iconfont.js');

import iconfont from '@/assets/iconfont/iconfont.js';


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


