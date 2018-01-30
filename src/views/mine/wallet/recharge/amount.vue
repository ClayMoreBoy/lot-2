<!--充值金额-->
<template>
  <div class="amount-wrapper">
    <!--头部-->
    <x-header class="header"  :left-options="{backText:' '}">
      {{title}}
    </x-header>
    <!--第三方滑动内容块-->
    <div class="wrapper pay-list" ref="wrapper">
      <div class="content">
        <!-- 支付渠道： -->
        <div class="way">
          <h1>支付渠道</h1>
          <div class="box">
            <img src="/static/images/mine/pay-wechat.png" alt="微信支付">
            <p><span>微信支付</span>跳转到微信支付，快速转账</p>
          </div>
        </div>
        <!-- 充值金额： -->
        <div class="recharge">
          <h1>充值金额</h1>
          <input type="number" placeholder="最低可充100元，最高可充50000元">
          <checker   default-item-class="item" selected-item-class="item-selected">
            <checker-item value="1">100元</checker-item>
            <checker-item value="2">200元</checker-item>
            <checker-item value="3">300元</checker-item>
            <checker-item value="4">500元</checker-item>
            <checker-item value="5">1000元</checker-item>
            <checker-item value="6">5000元</checker-item>
            <checker-item value="7">10000元</checker-item>
            <checker-item value="8">50000元</checker-item>
          </checker>
        </div>
        <button class="next">下一步</button>
        <!-- 温馨提示i: -->
        <div class="warning">
          <h2>温馨提示</h2>
          <ul>
            <li>1、点击下一步将跳转至支付宝页面完成后续充值操作；</li>
            <li>2、充值完成后，重新登录app查看余额</li>
            <li>3、请在15分钟内完成充值操作</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { XHeader, Panel, Checker, CheckerItem } from 'vux'
  import BScroll from 'better-scroll'

  export default{
    components: {
      XHeader, Panel, Checker, CheckerItem
    },
    data () {
      return {
        title: '充值'
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
