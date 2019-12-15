import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
// import env from '../env.config'

// mockjs通过拦截请求和数据的形式实现模拟返回，实际并没有真正成功的请求
// mockjs配置
// 开关
const mock = false
if (mock) {
  // import 是预编译加载，编译的时候导入的文件就会被加载写入内存
  // require 是从上到下执行到的时候才会加载，当mock为false时就不会加载
  require('@/mock/api')
}

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

// 图片懒加载
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
