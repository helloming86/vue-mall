<template>
  <div class="no-data">
    <img src="/imgs/icon-no-data.png" alt="">
    <p>暂无记录</p>
  </div>
</template>

<script>
export default {
  name: 'NoData'
}
</script>

<style scoped lang="scss">
  .no-data {
    text-align: center;
    font-size: 20px;
    color: #999999;
    margin: 50px 0;
    img {
      width: 240px;
      height: 180px;
      margin-bottom: 30px;
    }
  }
</style>
