<template>
  <div class="recharge-wrapper">
    <!--头部-->
    <x-header class="header"  :left-options="{backText:' '}">
      {{title}}
    </x-header>
    <!--第三方滑动内容块-->
    <div class="wrapper pay-list" ref="wrapper">
      <div class="content">
        <panel :list="payList" :type="type" ></panel>

      </div>
    </div>

  </div>
</template>

<script>
  import { XHeader, Panel } from 'vux'
  import BScroll from 'better-scroll'

  export default{
    components: {
      XHeader, Panel
    },
    data () {
      return {
        title: '充值',
        type: '1',
        payList: [
          { src: '/static/images/mine/pay-wechat.png', title: '微信支付', desc: '跳转到微信支付，快速到帐' },
          { src: '/static/images/mine/pay-zhifubao.png', title: '支付宝', desc: '跳转到支付宝支付，快速到帐' },
          { src: '/static/images/mine/pay-qq-wallet.png', title: 'QQ钱包', desc: '跳转到QQ钱包支付，快速到帐' }
        ]
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
  @import '~themes/mine/wallet/recharge/recharge'
</style>
