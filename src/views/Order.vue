<template>
  <div>
    <router-view/>
    <service-bar/>
    <order-footer/>
  </div>
</template>

<script>
import ServiceBar from 'components/ServiceBar'
import OrderFooter from '@/components/OrderFooter'
export default {
  name: 'Order',
  components: {
    ServiceBar,
    OrderFooter
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
