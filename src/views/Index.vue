<template>
  <div>
    Main Index
  </div>
</template>

<script>
// import storage from '@/storage/index' 等同于
import storage from '@/storage'
export default {
  name: 'Index',
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    storage.setItem('aaa', 'sss')
    storage.setItem('sex', 'male', 'user')
    storage.clear('abc')
    // Mock实现：使用静态json文件，public/mock
    this.axios.get('/user/login.json').then((res) => {
      this.res = res
      console.log(res)
    })
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">

</style>
