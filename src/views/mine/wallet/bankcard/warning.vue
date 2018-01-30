<template>
  <div class="warning-wrapper">
    <!--头部-->
    <x-header class="header"  :left-options="{backText:' '}">
      {{title}}
    </x-header>
    <div class="content">
      <img src="/static/images/mine/warn-wallet.png" alt="钱包" class="bag">
      <p>您还没绑定用于提现的银行卡</p>
      <router-link class="bind" to="addBankcard">立即绑定</router-link>
    </div>

  </div>
</template>

<script>
  import { XHeader } from 'vux'

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
    }
  }
</script>

<style lang="scss">
  @import '~themes/mine/wallet/bankcard/warning'
</style>
