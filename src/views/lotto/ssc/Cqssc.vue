<template>
  <div>
    <x-header class="header" :left-options="{backText:''}">
      <div slot="default" class="topDropdown" @click="showDropdown">
        <span class="betType">官</span><span class="t1">五星</span><span class="t2">直选复式</span>
      </div>
    </x-header>
    <popup class="betTypePopup" position="bottom" v-model="showPopup" :show-mask="showMask">
      <tab class="betTypeTab">
        <tab-item selected class="betTypeTabItem" @on-item-click="handleTabItemClick"><span class="icon-check"></span>官方玩法</tab-item>
        <tab-item class="betTypeTabItem" @on-item-click="handleTabItemClick"><span class="icon-check"></span>信用玩法</tab-item>
      </tab>
      <div class="wrapper" ref="bteTypePopupWrapper">
        <div class="content">
          <div class="betTypeTabContent">
            <div class="bttc active">官方玩法</div>
            <div class="bttc">信用玩法</div>
          </div>
        </div>
      </div>
    </popup>
  </div>
</template>
<script>
import {XHeader,Popup, Tab, TabItem} from 'vux'
import BScroll from 'better-scroll'
import $ from 'jquery'
export default {
  components: {
    XHeader,
    Popup,
    Tab,
    TabItem
  },
  data () {
    return {
      showPopup: false,
      showMask: false
    }
  },
  methods: {
    showDropdown: function () {
      this.showPopup = !this.showPopup
    },
    handleTabItemClick: function (index) {
      $('.betTypeTabContent .bttc').removeClass('active')
      $('.betTypeTabContent .bttc').eq(index).addClass('active')
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.bteTypePopupWrapper, {})
  })
  }
}
</script>
<style lang="scss">
 @import '~themes/lotto/lottery';
</style>
