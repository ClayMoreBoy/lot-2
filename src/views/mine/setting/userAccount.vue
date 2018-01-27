<template>
  <div class="userAccount-wrapper">
    <!--头部-->
    <x-header class="header" :left-options="{backText:' '}">
      {{title}}
    </x-header>
    <!--第三方滑动内容块-->
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <group class="setting-group">
          <cell title="头像"  is-link>
            <span class="head"><img src="/static/cssImages/mine/icon-person.png"></span>
          </cell>
          <cell title="昵称"  is-link value="mayun"></cell>
          <cell title="账号"  value="meiyoumima"></cell>
          <cell title="ID"  value="5555"></cell>
        </group>
        <group class="setting-group">
          <cell title="修改密码"  is-link></cell>
          <cell title="资金密码"  is-link value="设置"></cell>
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
        title: '账号资料'
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
