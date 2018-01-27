<template>
  <div class="setting-wrapper">
    <!--头部-->
    <x-header class="header" :left-options="{backText:' '}">
      {{title}}
    </x-header>
    <!--第三方滑动内容块-->
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <group class="setting-group">
          <cell title="账号资料"  is-link link="/mine/setting/userAccount"></cell>
          <cell title="推送和提醒"  is-link></cell>
          <cell title="声音"><span><x-switch title="" v-model="sound"></x-switch></span></cell>
          <cell title="中奖动画" ><span><x-switch title="" v-model="winAnimation"></x-switch></span></cell>
        </group>
        <div class="btn-wrap">
          <button class="btn-logout">退出登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {XHeader, Group, Cell, XSwitch} from 'vux'
  import BScroll from 'better-scroll'

  export default{
    components: {
      XHeader,
      Group,
      Cell,
      XSwitch
    },
    data () {
      return {
        title: '设置',
        sound: false,
        winAnimation: false
      }
    },
    methods: {
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {})
      })
    }
  }
</script>

<style lang="scss">
  @import '~themes/mine/setting/setting';
</style>
