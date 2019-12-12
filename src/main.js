import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from '../env.config'

// 根据前端的跨域方式进行调整 a.CORS b.JsonP c.接口代理 配置不同
// 下面通过 接口代理方式 进行跨域处理
// 1. 配置 axios.defaults.baseURL 为 /api 2. vue.config.js 配置proxy
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

// 根据环境变量获取不同的请求地址 CORS JsonP跨域
// axios.defaults.baseURL = env.baseURL

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
