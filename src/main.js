// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引用第三方UI框架
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// 引用第三方ajax插件
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://47.96.153.197';


// axios 全局拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});




// 引用自己的全局样式
import '@/assets/style/index.less'


// 引用自己全局组建 components
import * as components from '@/components'
for (let plugin in components) {
  let currentPlugin = components[plugin];
  Vue.component(currentPlugin.name, currentPlugin)
}


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
