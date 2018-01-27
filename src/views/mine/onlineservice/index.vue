<template>
  <div class="onlineService-wrapper">
    <!--头部-->
    <x-header class="header" :left-options="{backText:' '}">
      {{title}}
    </x-header>
    <!--第三方滑动内容块-->
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="service-link-wrap">
          <router-link class="link-weichat" to="">微信客服</router-link>
          <router-link class="link-qq" to="">      QQ客服</router-link>
          <router-link class="link-service" to="">客服1</router-link>
        </div>
        <div class="qcode-wrap">
          <div class="qcode">
            <img src="/static/images/mine/qcode.png">
          </div>
          <div class="txt">扫一扫，加微信</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {XHeader} from 'vux'
  import BScroll from 'better-scroll'

  export default{
    components: {
      XHeader
    },
    data () {
      return {
        title: '客服'
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

<style lang="scss" scoped>
  @import '~themes/mine/onlineservice/onlineservice';
</style>
