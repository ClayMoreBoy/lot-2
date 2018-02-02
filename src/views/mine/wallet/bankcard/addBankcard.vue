<!--充值金额-->
<template>
  <div class="addcard-wrapper">
    <!--头部-->
    <x-header class="header"  :left-options="{backText:' '}">
      {{title}}
    </x-header>
      <div class="content">
        <!-- 支付渠道： -->
        <div class="infobox">
          <h1>为了您的资金安全，请添加属于您个人的银行卡号</h1>
          <div class="box">
            <div class="choose"><span>持卡银行</span><p><img src="/static/images/mine/bank/pay-cmb-1.png" alt="招商银行"> <x-switch v-model="showBanklist" title=""></x-switch></p></div>
            <group>
              <x-input title="持卡人" placeholder="请输入您的姓名" :show-clear="false" ></x-input>
              <x-input title="银行卡号" placeholder="请输入您的卡号" :show-clear="false" ></x-input>
            </group>

          </div>
        </div>

        <x-button class="btn next" @click.native="confirmDialog = true" >立即绑定</x-button>

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


      <!--银行列表-->
      <x-dialog v-model="showBanklist" class="banklist" hide-on-blur>
        <div class="wrapper" ref="wrapper">
          <div class="content">
            <ul class="list">
              <li><img src="/static/images/mine/bank/bank-abc.png" alt="农业银行">农业银行</li>
              <li><img src="/static/images/mine/bank/bank-bcm.png" alt="交通银行">交通银行</li>
              <li><img src="/static/images/mine/bank/bank-boc.png" alt="中国银行">中国银行</li>
              <li><img src="/static/images/mine/bank/bank-ccb.png" alt="中信银行">中信银行</li>
              <li><img src="/static/images/mine/bank/bank-ceb.png" alt="光大银行">光大银行</li>
              <li><img src="/static/images/mine/bank/bank-cib.png" alt="兴业银行">兴业银行</li>
              <li><img src="/static/images/mine/bank/bank-cmb.png" alt="招商银行">招商银行</li>
              <li><img src="/static/images/mine/bank/bank-cmbc.png" alt="民生银行">民生银行</li>
              <li><img src="/static/images/mine/bank/bank-gdb.png" alt="广发银行">广发银行</li>
              <li><img src="/static/images/mine/bank/bank-icbc.png" alt="工商银行">工商银行</li>
              <li><img src="/static/images/mine/bank/bank-pab.png" alt="平安银行">平安银行</li>
              <li><img src="/static/images/mine/bank/bank-psbc.png" alt="邮政储蓄">邮政储蓄</li>
            </ul>
          </div>
        </div>
        </x-dialog>

        <!--  确认绑定银行卡弹框 -->
        <div class="confirmBox">
          <confirm v-model="confirmDialog" title="温馨提示" @on-cancel="onCancel" @on-confirm="onConfirm">
            <p style="text-align:center;">一个帐号只能绑定同一个户名的银行卡号，确定绑定户名为[李莲杰]的卡号吗？</p>
          </confirm>
        </div>

        <!-- 绑定成功弹框： -->
        <div class="successBox">
          <x-dialog v-model="successDialog" hide-on-blur>
            <p class="txt">恭喜绑定银行卡成功！</p>
            <div class="close" @click="successDialog = false"></div>
          </x-dialog>
        </div>

  </div>
</template>

<script>
  import { Confirm, XHeader, Group, PopupRadio, XInput, XDialog, XSwitch, XButton, TransferDomDirective as TransferDom } from 'vux'
  import BScroll from 'better-scroll'

  export default{
    directives: {
      TransferDom
    },
    components: {
      Confirm, XHeader, Group, PopupRadio, XInput, XDialog, XSwitch, XButton
    },
    data () {
      return {
        title: '绑定银行卡',
        showBanklist: false,
        confirmDialog: false,
        successDialog: false,
        a: true,
        bank: [
          { value: '工商银行', imgSrc: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000' },
          { value: '中国银行', imgSrc: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000' },
          { value: '农业银行', imgSrc: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000' }
        ]
      }
    },
    methods: {
      onCancel () {
        console.log('on cancel')
      },
      onConfirm (msg) {
        console.log('on confirm')
        this.successDialog = true
      }

    },
    watch:{
      showBanklist: function (nV,oV) {
        if(nV){
          this.scroll = new BScroll(this.$refs.wrapper, {})
        }
      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss">
  @import '~themes/mine/mine';
  @import '~themes/mine/wallet/bankcard/bankcard'
</style>
