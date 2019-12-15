<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://google.com.hk" target="_blank">谷歌</a><span>|</span>
      <a href="https://imooc.com" target="_blank">慕课网</a><span>|</span>
      <a href="https://time.geekbang.org" target="_blank">极客时间</a>
    </div>
    <div class="copyright">CopyRight @2019 <span class="domain">mi.future.com</span> All Rights Reserved</div>
  </div>
</template>

<script>
export default {
  name: 'NavFooter'
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/config.scss";
  .footer{
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB ;
    color: $colorD;
    font-size: $fontI;
    text-align: center;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img {
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link{
      a{
        color: $colorD;
        display: inline-block;
      }
      span{
        margin: 0 10px;
      }
      margin-bottom: 13px;
    }
    .copyright{
      .domain{
        color: $colorA;
      }
    }
  }
</style>
