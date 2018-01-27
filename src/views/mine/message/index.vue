<template>
  <div class="message-wrapper">
    <!--头部-->
    <x-header class="header" :left-options="{backText:' '}">
      <tab class="header-tab">
        <tab-item selected @on-item-click="handler">公告</tab-item>
        <tab-item @on-item-click="handler">站内信</tab-item>
      </tab>
      <router-link slot="right" to="/mine/onlineService" class="link-service"></router-link>
    </x-header>
    <!--第三方滑动内容块-->
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="content-message active">
          <card class="message-item">
            <div slot="header">
              <div class="mes-hea">官网无开奖
                <span class="tag">NEW</span>
              </div>
            </div>
            <router-link to="/mine/messageDetail" slot="content" class="mes-con">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
              <div class="ext-info">公告时间：2017年12月20日 </div>
            </router-link>
          </card>
          <card class="message-item">
            <div slot="header">
              <div class="mes-hea">官网无开奖
                <span class="tag">NEW</span>
              </div>
            </div>
            <router-link to="/mine/messageDetail" slot="content" class="mes-con">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
              <div class="ext-info">公告时间：2017年12月20日 </div>
            </router-link>
          </card>
        </div>
        <div class="content-message">
          <card class="message-item">
            <div slot="header">
              <div class="mes-hea">官网无开奖(站内信)
                <span class="tag">NEW</span>
              </div>
            </div>
            <router-link to="/mine/messageDetail" slot="content" class="mes-con">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
              <div class="ext-info">公告时间：2017年12月20日 </div>
            </router-link>
          </card>
          <card class="message-item">
            <div slot="header">
              <div class="mes-hea">官网无开奖
                <span class="tag">NEW</span>
              </div>
            </div>
            <router-link to="/mine/messageDetail" slot="content" class="mes-con">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
              <div class="ext-info">公告时间：2017年12月20日 </div>
            </router-link>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {XHeader, Tab, TabItem, Card} from 'vux'
  import BScroll from 'better-scroll'
  import $ from 'jquery'
  export default{
    components: {
      XHeader,
      Tab,
      TabItem,
      Card
    },
    data () {
      return {
      }
    },
    methods: {
      handler: function (e) {
        $('.content-message').removeClass('active')
        $('.content-message').eq(e).addClass('active')
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {})
      })
    }
  }
</script>

<style lang="scss">
  @import '~themes/mine/message/message';
</style>
