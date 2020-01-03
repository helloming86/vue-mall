<template>
  <div class="order-confirm">
    <order-header title="确认订单">
      <template v-slot:tip>
        <span>温馨提示：确认订单</span>
      </template>
    </order-header>
  </div>
</template>

<script>
import OrderHeader from '@/components/OrderHeader'

export default {
  name: 'OrderConfirm',
  components: {
    OrderHeader
  }
}
</script>

<style scoped lang="scss">
</style>
