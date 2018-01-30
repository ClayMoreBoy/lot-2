<template>
  <div class="bankcard-wrapper">
    <!--头部-->
    <x-header class="header"  :left-options="{backText:' '}">
      {{title}}
    </x-header>
    <!--第三方滑动内容块-->
    <div class="wrapper pay-list" ref="wrapper">
      <div class="content">

        <div class="card">
          <div class="left">
            <div class="top">
              <img src="/static/images/mine/boc.png" alt="中国银行">
              <p>中国银行 <font>储蓄卡</font></p>
              <span class="name">赵四</span>
            </div>
            <p class="num">123 ***  *** *** 5589</p>
          </div>
          <button class="off">解绑</button>
        </div>

        <div class="addcard">
          <router-link to="addBankcard">
            <span>+</span>添加银行卡
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { XHeader } from 'vux'
  import BScroll from 'better-scroll'

  export default{
    components: {
      XHeader
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
  @import '~themes/mine/wallet/bankcard/bankcard'
</style>
