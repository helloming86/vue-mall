<template>
  <div class="ali-pay">
    <loading v-if="loading"/>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from 'components/Loading'
export default {
  name: 'Alipay',
  components: {
    Loading
  },
  data () {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true
    }
  },
  mounted () {
    this.paySubmit()
  },
  methods: {
    paySubmit () {
      this.axios.post('/pay', {
        orderId: this.orderId,
        orderName: 'Vue高仿小米商城',
        amount: 0.01,
        payType: 1
      }).then((res) => {
        this.content = res.content
        setTimeout(() => {
          document.forms[0].submit()
        })
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
