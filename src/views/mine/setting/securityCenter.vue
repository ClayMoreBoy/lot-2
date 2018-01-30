<!-- 安全中心-->
<template>
  <div class="safeCenter-wrapper">
    <!--头部-->
    <x-header class="header" :left-options="{backText:' '}">
      {{title}}
    </x-header>
    <!--第三方滑动内容块-->
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="showSafe">
          <img src="/static/cssImages/mine/safe.png" alt="">
          <p>bigboss0055,<br/>您的帐号信息，正在享受全面的安全防护</p>
        </div>
        <group class="setting-group">
          <cell title="修改密码"  is-link link="/mine/setting/userAccount">修改</cell>
          <cell title="资金密码"  is-link>设置</cell>
          <cell title="锁屏手势"  is-link>设置</cell>
          <cell title="设备锁"><span><x-switch title="" checked v-model="sound"></x-switch></span></cell>
        </group>
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
        title: '安全中心',
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
