<template>
  <div class="mine-wrapper">
    <!--头部-->
    <x-header class="header" :left-options="{showBack:false}">
        <router-link class="left-link" to="/mine/onlineService"></router-link>
      {{title}}
      <router-link class="right-link" to="/mine/setting"></router-link>
    </x-header>
    <!--第三方滑动内容块-->
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <!--头部区域-->
        <div class="top-area">
          <div class="lef">
            <div>账户：meiyoumima </div>
            <div>昵称：mayun</div>
            <div>ID：5555</div>
            <div class="user-level">
              <i class="icon-person"></i>
              <span class="u-l">一般用户</span>
            </div>
          </div>
          <div class="rif">
            <span class="zhye">账户余额</span>
            <span class="zhye_money">￥30000000.00</span>
          </div>
        </div>
        <!--内容块-->
        <div class="row1">
          <div class="row-item">
            <router-link to="">
              <i class="icon icon-cz"></i>
              充值
            </router-link>
          </div>
          <div class="row-item">
            <router-link to="">
              <i class="icon icon-tx"></i>
              提现
            </router-link>
          </div>
        </div>
        <div class="row2">
          <div class="r_w">
            <div class="row-item">
              <router-link to="">
                <i class="icon icon-yxjl"></i>
                <div class="txt-w">
                  <div class="t-g">游戏记录</div>
                  <div class="t-s">查看所参与的游戏记录</div>
                </div>
              </router-link>
            </div>
            <div class="row-item">
              <router-link to="">
                <i class="icon icon-aqzx"></i>
                <div class="txt-w">
                  <div class="t-g">安全中心 <span class="t-warn">低</span></div>
                  <div class="t-s">保护您的账户安全</div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="r_w">
            <div class="row-item">
              <router-link to="">
                <i class="icon icon-zhmx"></i>
                <div class="txt-w">
                  <div class="t-g">账户明细</div>
                  <div class="t-s">查看账户资金变动明细</div>
                </div>
              </router-link>
            </div>
            <div class="row-item">
              <router-link to="">
                <i class="icon icon-czjl"></i>
                <div class="txt-w">
                  <div class="t-g">充值记录</div>
                  <div class="t-s">查看所有充值订单</div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="r_w">
            <div class="row-item">
              <router-link to="">
                <i class="icon icon-tjhy"></i>
                <div class="txt-w">
                  <div class="t-g">推荐好友</div>
                  <div class="t-s">赢取现金奖励</div>
                </div>
              </router-link>
            </div>
            <div class="row-item">
              <router-link to="">
                <i class="icon icon-qbgl"></i>
                <div class="txt-w">
                  <div class="t-g">钱包管理</div>
                  <div class="t-s">用户的资金账户管理</div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="row3">
          <div class="r_w">
            <div class="row-item">
              <router-link to="">
                <i class="icon icon-xxzx"></i>
                <div class="txt-w">
                  <div class="t-g">消息中心</div>
                  <div class="t-s">查看历史消息内容</div>
                </div>
              </router-link>
            </div>
            <div class="row-item">
              <router-link to="">
                <i class="icon icon-yjyfk"></i>
                <div class="txt-w">
                  <div class="t-g">意见与反馈</div>
                  <div class="t-s">解答各种问题</div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="r_w">
            <div class="row-item">
              <router-link to="">
                <i class="icon icon-fxlj"></i>
                <div class="txt-w">
                  <div class="t-g">分享礼金</div>
                  <div class="t-s">查看奖励金额</div>
                </div>
              </router-link>
            </div>
            <div class="row-item">
              <router-link to="/mine/onlineService">
                <i class="icon icon-xxkf"></i>
                <div class="txt-w">
                  <div class="t-g">联系客服</div>
                  <div class="t-s">解答各种问题</div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部导航-->
    <tabbar class="footer-bar">
      <tabbar-item link="/">
        <span slot="label">购彩大厅</span>
        <img slot="icon" src="/static/images/lottery/icon-home.png"/>
        <img slot="icon-active" src="/static/images/lottery/icon-home-active.png"/>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">开奖记录</span>
        <img slot="icon" src="/static/images/lottery/icon-lotteryRecord.png"/>
        <img slot="icon-active" src="/static/images/lottery/icon-lotteryRecord-active.png"/>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">投注记录</span>
        <img slot="icon" src="/static/images/lottery/icon-orderRecord.png"/>
        <img slot="icon-active" src="/static/images/lottery/icon-orderRecord-active.png"/>
      </tabbar-item>
      <tabbar-item selected>
        <span slot="label">会员中心</span>
        <img slot="icon" src="/static/images/lottery/icon-mine.png"/>
        <img slot="icon-active" src="/static/images/lottery/icon-mine-active.png"/>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {XHeader, Tabbar, TabbarItem} from 'vux'
  import BScroll from 'better-scroll'

  export default{
    components: {
      XHeader,
      Tabbar,
      TabbarItem
    },
    data () {
      return {
        title: '我的'
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
  @import '~themes/mine/mine';
</style>
