<template>
  <div>
    <order-header :title="title">
      <template v-slot:tip>
        <span>{{tip}}</span>
      </template>
    </order-header>
    <router-view/>
    <service-bar/>
    <order-footer/>
  </div>
</template>

<script>
import OrderHeader from 'components/OrderHeader'
import ServiceBar from 'components/ServiceBar'
import OrderFooter from '@/components/OrderFooter'

export default {
  name: 'Order',
  components: {
    OrderHeader,
    ServiceBar,
    OrderFooter
  },
  data () {
    return {
      title: '',
      tip: ''
    }
  },
  mounted () {
    let path = this.$route.path
    if (path === '/order/confirm') {
      this.title = '订单确认'
      this.tip = '请填写正切的收货地址信息'
    } else if (path === '/order/list') {
      this.title = '订单列表'
      this.tip = '谨防钓鱼'
    } else if (path === '/order/pay') {
      this.title = '订单支付'
      this.tip = '请谨防钓鱼链接或诈骗电话，了解更多'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
