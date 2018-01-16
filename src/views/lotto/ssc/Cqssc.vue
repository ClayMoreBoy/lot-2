<template>
  <div>
    <x-header class="header" :left-options="{backText:''}">
      <div slot="default" class="topDropdown" @click="showDropdown">
        <span class="betType">官</span><span class="t1">五星</span><span class="t2">直选复式</span>
      </div>
      <!--<div class="xiaozhushou" slot="right">
        <popover placement="bottom" style="position: relative;">
          <div slot="content" class="popContent">
            那就好收到了好
          </div>
          <div slot="default">
            <i class="icon-xiaozhushou"></i>小助手
          </div>
        </popover>
      </div>-->
    </x-header>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <!--投注页面头部-->
        <div class="bet-top">
          <div class="left-p">
            <div class="qishu"><span class="l-name">重庆时时彩</span>第<span class="l-qs">20179984</span>期<router-link class="icon-ques1" to="/"></router-link></div>
            <div class="bet-num"><span class="ssc_n1">1</span><span class="ssc_n2">2</span><span class="ssc_n3">3</span><span class="ssc_n4">4</span><span class="ssc_n5">5</span></div>
          </div>
          <div class="right-p">
            <div class="qishu">第<span class="l-qs">23265445</span>期</div>
            <div>截止</div>
            <div class="count-down">
              <span class="cd_n0">0</span>
              <span class="cd_n8">8</span>
              <span class="cd_dot">:</span>
              <span class="cd_n2">2</span>
              <span class="cd_n0">0</span>
            </div>
          </div>
        </div>
        <!--开奖记录-->
        <div class="bet-record">
          <div class="wrapper" ref="betRecordWrapper">
            <div class="content">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
            </div>
          </div>
        </div>
        <div class="bet-record-switch" @click="toggleBetRecord">
          <div class="arrow"></div>
        </div>
      </div>
    </div>
    <popup class="betTypePopup" position="bottom" v-model="showPopup" :show-mask="showMask">
      <tab class="betTypeTab">
        <tab-item selected class="betTypeTabItem" @on-item-click="handleTabItemClick"><span class="icon-check"></span>官方玩法</tab-item>
        <tab-item class="betTypeTabItem" @on-item-click="handleTabItemClick"><span class="icon-check"></span>信用玩法</tab-item>
      </tab>
      <div class="wrapper" ref="bteTypePopupWrapper">
        <div class="content">
          <div class="betTypeTabContent">
            <div class="bttc active">
                <div class="betType">
                  <div class="betBigType">五星(官方玩法)</div>
                    <div class="betExtType">
                      <div class="betTit">五星直选</div>
                      <div class="betExt">
                        <router-link class="cur"  to="/">单式</router-link>
                        <router-link  to="/">复式</router-link>
                      </div>
                    </div>
                  <div class="betExtType">
                    <div class="betTit">五星直选</div>
                    <div class="betExt">
                      <router-link  to="/">组选120</router-link>
                      <router-link  to="/">组选60</router-link>
                      <router-link  to="/">组选30</router-link>
                      <router-link  to="/">组选20</router-link>
                      <router-link  to="/">组选10</router-link>
                      <router-link  to="/">组选5</router-link>
                    </div>
                  </div>
                </div>
            </div>
            <div class="bttc">
              <div class="betType">
                <div class="betBigType">五星(信用玩法)</div>
                <div class="betExtType">
                  <div class="betTit">五星直选</div>
                  <div class="betExt">
                    <router-link class="cur"  to="/">单式</router-link>
                    <router-link  to="/">复式</router-link>
                  </div>
                </div>
                <div class="betExtType">
                  <div class="betTit">五星直选</div>
                  <div class="betExt">
                    <router-link  to="/">组选120</router-link>
                    <router-link  to="/">组选60</router-link>
                    <router-link  to="/">组选30</router-link>
                    <router-link  to="/">组选20</router-link>
                    <router-link  to="/">组选10</router-link>
                    <router-link  to="/">组选5</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </popup>
  </div>
</template>
<script>
import {XHeader,Popup, Tab, TabItem,} from 'vux'
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
    },
    toggleBetRecord: function (e) {
      $('.bet-record').toggleClass('active')
      $('.bet-record-switch').toggleClass('active')
      this.scrollBetSroll = new BScroll(this.$refs.betRecordWrapper, {})
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
