<template>
  <div>
    <x-header class="header" :left-options="{backText:''}">
      <div slot="default" class="topDropdown" @click="showDropdown"><span class="betType">官</span>标题</div>
    </x-header>
    <popup position="top" v-model="showPopup">测试弹出层</popup>
  </div>
</template>
<script>
import {XHeader, Popup} from 'vux'
export default {
  components: {
    XHeader,
    Popup
  },
  data () {
    return {
      showPopup: false
    }
  },
  methods: {
    showDropdown: function () {
      this.showPopup = true
    }
  }
}
</script>
<style lang="scss">
 @import '~themes/lotto/lottery';
</style>
