<template>
  <div>
    <div v-transfer-dom>
      <x-dialog v-model="MyIshow" class="my-dialog" hide-on-blur >
        <div class="diaTitle">{{title}}</div>
        <div class="diaContent" v-html="content"></div>
        <span class="close-btn" @click="clickHandler"></span>
      </x-dialog>
    </div>
  </div>
</template>
<script>
import {TransferDomDirective as TransferDom, XDialog} from 'vux'
export default {
  directives: {
    TransferDom
  },
  props: ['isShow', 'title', 'content'], // 传进来的props属性
  components: {
    XDialog
  },
  methods: {
    clickHandler: function () {
      this.$emit('dialogHandler')
    }
  },
  data: function () {
    return {
      MyIshow: this.isShow
    }
  },
  watch: { // prop属性的双向绑定
    isShow (val) {
      this.MyIshow = val
    },
    MyIshow (val) {
      this.$emit('on-result-change', val)
    }
  }
}
</script>
<style lang="scss">
@import '~themes/myDialog'
</style>
