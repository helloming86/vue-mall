import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Index from '@/views/Index'
// import Login from 'views/Login'
// import Product from '@/views/Product'
// import Detail from '@/views/Detail'
// import Cart from '@/views/Cart'
// import Order from '@/views/Order'
// import OrderList from '@/views/OrderList'
// import OrderPay from '@/views/OrderPay'
// import OrderConfirm from '@/views/OrderConfirm'
// import Alipay from '@/views/Alipay'
// import Login from 'views/Login'

Vue.use(VueRouter)

// 注意：Home的子路由的path最前面带“/” Oder的子路由的path最前面不带“/”
// 如果配置时order的子路由的path最前面带"/"，比如"/list"，则 order/list 不能正常显示
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    // 首页包含的子路由: index主页、产品页
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/product/:id',
        name: 'product',
        component: resolve => require(['@/views/Product.vue'], resolve)
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: resolve => require(['@/views/Detail.vue'], resolve)
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/views/Order'),
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: () => import('@/views/OrderList')
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () => import('@/views/OrderPay')
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: () => import('@/views/OrderConfirm')
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: () => import('@/views/Alipay')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
