<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">
        {{propTitle}}
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductParam',
  props: {
    propTitle: String
  },
  data () {
    return {
      isFixed: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.initHeight)
  },
  destroyed () {
    window.removeEventListener('scroll', this.initHeight, false)
  },
  methods: {
    initHeight () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > 152
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/mixin.scss";
  @import "~@/assets/scss/config.scss";
  .nav-bar{
    height: 70px;
    line-height: 70px;
    border: 1px solid $colorH;
    background-color: $colorG;
    z-index: 10;
    &.is_fixed{
      position: fixed;
      top: 0;
      width: 100%;
      box-shadow: 0 5px 5px $colorE;
    }
    .container{
      @include flex();
      .pro-title {
        font-size: $fontH;
        color: $colorB;
        font-weight: bold;
      }
      .pro-param {
        font-size: $fontJ;
        span{
          margin: 0 10px;
        }
        a{
          color: $colorC;
        }

      }
    }
  }
</style>
