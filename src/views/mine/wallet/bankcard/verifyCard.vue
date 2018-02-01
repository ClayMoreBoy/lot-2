<template>
  <div class="verifyCard-wrapper">
    <!--头部-->
    <x-header class="header"  :left-options="{backText:' '}">
      {{title}}
    </x-header>
    <!--第三方滑动内容块-->
    <div class="wrapper pay-list" ref="wrapper">
      <div class="content">

        <div class="card">
          <h1>请确认银行卡信息，进行验证操作</h1>
          <div class="box">
            <div class="top">
              <img src="/static/images/mine/boc.png" alt="中国银行">
              <p>中国银行 <font>储蓄卡</font></p>
              <span class="name">赵四</span>
            </div>
            <p class="num">123 ***  *** *** 5589</p>
          </div>
        </div>
        <div class="btn-box">
          <button class="btn next">立即验证</button>
          <button class="btn next change">修改信息</button>
        </div>
        <!-- 温馨提示i: -->
        <div class="warning">
          <h2>温馨提示</h2>
          <ul>
            <li>1、您只能绑定同一个户名的银行卡，一个账号只能绑定一张银行卡；</li>
            <li>2、系统将会向您的银行卡内汇入一笔金额进行验证操作，请您确保填写的信息无误；</li>
            <li>3、您第天只能进行3 次验证操作；</li>
          </ul>
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
  @import '~themes/mine/mine';
  @import '~themes/mine/wallet/bankcard/bankcard'
</style>
