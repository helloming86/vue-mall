<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"/>
        </div>
        <div class="modal-body">
          <slot name="body"/>
        </div>
        <div class="modal-footer">
          <a href="javascript:;" class="btn" v-if="btnType === '1'" v-on:click="$emit('submit')">{{sureText}}</a>
          <a href="javascript:;" class="btn" v-if="btnType === '2'" v-on:click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-group" v-if="btnType === '3'">
            <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn btn-default" v-on:click="$emit('cancel')">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    // 弹框类型：大large 中middle 小small 表单form
    modalType: {
      type: String,
      default: 'form'
    },
    // 弹框标题
    title: String,
    // 按钮类型 1. 只有确认 2. 只有取消 3.都有
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/config.scss";
  @import "~@/assets/scss/mixin.scss";
  @import "~@/assets/scss/modal.scss";
</style>
