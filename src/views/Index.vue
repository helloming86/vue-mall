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
  mounted () {
    storage.setItem('aaa', 'sss')
    storage.setItem('sex', 'male', 'user')
    storage.clear('aaa')
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">

</style>
