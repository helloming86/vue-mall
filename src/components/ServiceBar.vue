<template>
    <div class="service">
      <div class="container">
        <ul>
          <li><span class="icon-setting"/>预约维修服务</li>
          <li><span class="icon-7day"/>7天无理由退货</li>
          <li><span class="icon-15day"/>15天免费换货</li>
          <li><span class="icon-post"/>满150元包邮</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ServiceBar'
}
</script>

<style lang="scss">
  @import "~@/assets/scss/config.scss";
  @import "~@/assets/scss/mixin.scss";
  .service{
    padding: 33px 0;
    color: $colorC;
    font-size: $fontI;
    li{
      display: inline-block;
      width: 24.9%;
      text-align: center;
      border-right: 1px solid $colorH;
      span{
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 8px;
      }
      .icon-setting{
        @include bgImg(20px,20px,"/imgs/icon-setting.png",contain)
      }
      .icon-7day{
        @include bgImg(20px,20px,"/imgs/icon-7day.png",contain)
      }
      .icon-15day{
        @include bgImg(20px,20px,"/imgs/icon-15day.png",contain)
      }
      .icon-post{
        @include bgImg(20px,20px,"/imgs/icon-post.png",contain)
      }
    }
  }
</style>
