import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

// 根据前端的跨域方式进行调整 CORS JsonP 接口代理
// 接口代理方式
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
// 拦截器设置：响应拦截，错误处理
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/login'
  } else {
    alert(res.msg)
  }
})

// 注册插件，将axios挂载到VueAxios上，通过this.axios进行调用
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
