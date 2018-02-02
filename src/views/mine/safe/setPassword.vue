<template>
  <div class="setPassword-wrapper">
    <!--头部-->
    <x-header class="header"  :left-options="{backText:' '}">
      {{title}}
    </x-header>
    <!--第三方滑动内容块-->
      <div class="content">
        <p class="title"></p>
        <keyBoard></keyBoard>

    </div>

  </div>
</template>

<script>
  import { XHeader } from 'vux'
  import keyBoard from '@/components/keyBoard'

  export default{
    components: {
      XHeader, keyBoard
    },
    data () {
      return {
        title: '资金密码设置'
      }
    },
    methods: {
    },
    mounted () {
    }
  }
</script>

<style lang="scss">
  @import '~themes/mine/safe/safe'
</style>
