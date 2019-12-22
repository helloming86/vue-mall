<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    console.log('Hello')
    console.log(this.$cookie.get('userId'))
    console.log('World')
    if (this.$cookie.get('userId')) {
      this.getUser()
      this.getCartCount()
    }
  },
  methods: {
    // 获取用户信息
    getUser () {
      this.axios.get('/user').then((res) => {
        this.$store.dispatch('saveUsername', res.username)
      }
      )
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res) => {
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}
</script>

<!-- 在Vue文件中的style标签上有一个特殊的属性，scoped。
  当一个style标签拥有scoped属性时候，它的css样式只能用于当前的Vue组件，可以使组件的样式不相互污染。
  reset需要是全局的，所以这里不能用scoped -->
<style lang="scss">
  @import "~@/assets/scss/reset.scss";
  @import "~@/assets/scss/config.scss";
  @import "~@/assets/scss/base.scss";
  @import "~@/assets/scss/button.scss";
</style>
