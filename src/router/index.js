import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Index from '@/views/Index'
import Product from '@/views/Product'
import Detail from '@/views/Detail'
import Cart from '@/views/Cart'
import Order from '@/views/Order'
import OrderList from '@/views/OrderList'
import OrderPay from '@/views/OrderPay'
import OrderConfirm from '@/views/OrderConfirm'
import Alipay from '@/views/Alipay'

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
        component: Product
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: OrderList
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: OrderPay
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: OrderConfirm
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: Alipay
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
