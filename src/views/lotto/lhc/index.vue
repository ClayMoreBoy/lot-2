<!--六合彩投注页 -->
<template>
  <div class=" xin-wrapper lhc-wrapper">
    <x-header class="header" :left-options="{backText:''}">
        <span class="t1">六合彩</span>
      <div class="xiaozhushou" slot="right">
        <popover placement="bottom" style="position: relative;">
          <div slot="content" class="popContent">
            <ul>
              <li><a href="javascript:void(0);"><i class="icon-person"></i>Admin</a></li>
              <li><a href="javascript:void(0);"><i class="icon-wallet"></i><span class="themes-color">0.00</span></a></li>
              <li><a href="javascript:void(0);"><i class="icon-trophy"></i>近期开奖</a></li>
              <li><a href="javascript:void(0);"><i class="icon-ball1"></i>我的投注</a></li>
              <li><a href="javascript:void(0);"><i class="icon-ball2"></i>我的追号</a></li>
              <li><a href="javascript:void(0);"><i class="icon-magic"></i>玩法说明</a></li>
              <li><a href="javascript:void(0);"><i class="icon-cart"></i>购物车 <x-switch  title="" v-model="sCart"></x-switch></a></li>
              <li><a href="javascript:void(0);"><i class="icon-ggl"></i>刮刮乐 <x-switch  title="" v-model="sGgl"></x-switch></a></li>
              <li><a href="javascript:void(0);"><i class="icon-linep1"></i>走势图</a></li>
              <li><a href="javascript:void(0);"><i class="icon-linep2"></i>路纸图</a></li>
              <li><a href="javascript:void(0);"><i class="icon-linep3"></i>问路图</a></li>
            </ul>
          </div>
          <div slot="default">
            <i class="icon-xiaozhushou"></i>小助手
          </div>
        </popover>
      </div>
    </x-header>

      <div class="content">
        <!--头部-->
        <div class="bet-top">
          <div class="left-p">
            <div class="qishu"><span class="l-name">六合彩</span>第<span class="l-qs">2017984</span>期<router-link class="icon-ques1" to="/"></router-link></div>
            <div class="bet-num">
               <div class="num">
                 <span class="chip-red">35</span><span class="chip-green">28</span><span class="chip-blue">42</span><span class="chip-red">35</span><span class="chip-green">28</span><span class="chip-blue">42</span><font class="jia">+</font><span class="chip-red">45</span>
               </div>
               <div class="word">
                  <span>猪</span><span>马</span><span>龙</span><span>虎</span><span>羊</span><span>羊</span><span class="right">牛</span>
               </div>
            </div>
          </div>
          <div class="right-p">
            <div class="qishu">第<span class="l-qs">232655</span>期</div>
            <div>截止</div>
            <div class="count-down">
              <span class="cd_n0">0</span>
              <span class="cd_n8">8</span>
              <span class="cd_dot">:</span>
              <span class="cd_n2">2</span>
              <span class="cd_n0">0</span>
              <span class="cd_dot">:</span>
              <span class="cd_n3">3</span>
              <span class="cd_n5">5</span>
            </div>

            <!--问路弹框：-->
            <ask-road :isShow="askRoadDialogShow" @on-result-change="onResultChangeAR" @dialogHandler="askRoadDialogShow = !askRoadDialogShow"></ask-road>
            <p class="ask-road" @click='askRoadDialogShowHandler'>问路</p>
          </div>
        </div>
        <!--开奖记录-->
        <div class="bet-record">
          <div class="wrapper" ref="betRecordWrapper">
            <div class="content">
              <x-table class="betRecordTable" :cell-bordered="false" :content-bordered="false">
                <thead>
                <tr>
                  <th class="col">期号</th>
                  <th>开奖结果</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>68期 <span class="dot-line"></span></td>
                  <td class="bet-num">
                      <div class="num">
                        <span class="chip-red">35</span><span class="chip-green">28</span><span class="chip-blue">42</span><span class="chip-red">35</span><span class="chip-green">28</span><span class="chip-blue">42</span><font class="jia">+</font><span class="chip-red">45</span>
                      </div>
                      <div class="word">
                        <span>猪</span><span>马</span><span>龙</span><span>虎</span><span>羊</span><span>羊</span><span class="last">牛</span>
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>68期 <span class="dot-line"></span></td>
                  <td class="bet-num">
                    <div class="num">
                      <span class="chip-red">35</span><span class="chip-green">28</span><span class="chip-blue">42</span><span class="chip-red">35</span><span class="chip-green">28</span><span class="chip-blue">42</span><font class="jia">+</font><span class="chip-red">45</span>
                    </div>
                    <div class="word">
                      <span>猪</span><span>马</span><span>龙</span><span>虎</span><span>羊</span><span>羊</span><span class="last">牛</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>68期 <span class="dot-line"></span></td>
                  <td class="bet-num">
                    <div class="num">
                      <span class="chip-red">35</span><span class="chip-green">28</span><span class="chip-blue">42</span><span class="chip-red">35</span><span class="chip-green">28</span><span class="chip-blue">42</span><font class="jia">+</font><span class="chip-red">45</span>
                    </div>
                    <div class="word">
                      <span>猪</span><span>马</span><span>龙</span><span>虎</span><span>羊</span><span>羊</span><span class="last">牛</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>68期 <span class="dot-line"></span></td>
                  <td class="bet-num">
                    <div class="num">
                      <span class="chip-red">35</span><span class="chip-green">28</span><span class="chip-blue">42</span><span class="chip-red">35</span><span class="chip-green">28</span><span class="chip-blue">42</span><font class="jia">+</font><span class="chip-red">45</span>
                    </div>
                    <div class="word">
                      <span>猪</span><span>马</span><span>龙</span><span>虎</span><span>羊</span><span>羊</span><span class="last">牛</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>68期 <span class="dot-line"></span></td>
                  <td class="bet-num">
                    <div class="num">
                      <span class="chip-red">35</span><span class="chip-green">28</span><span class="chip-blue">42</span><span class="chip-red">35</span><span class="chip-green">28</span><span class="chip-blue">42</span><font class="jia">+</font><span class="chip-red">45</span>
                    </div>
                    <div class="word">
                      <span>猪</span><span>马</span><span>龙</span><span>虎</span><span>羊</span><span>羊</span><span class="last">牛</span>
                    </div>
                  </td>
                </tr>
                </tbody>
              </x-table>
              <div class="table-tips">最多可查看120期数据</div>
            </div>
          </div>
        </div>
        <div class="bet-record-switch" @click="toggleBetRecord">
          <div class="arrow"></div>
        </div>
        <!--冷热遗漏区域-->
        <div class="bet-data-switch-tab">
          <div class="wallet">193.00</div>
          <tab class="data-switch-tab">
            <tab-item active-class="cur" selected class="tab-btn">冷热</tab-item>
            <tab-item active-class="cur" class="tab-btn">遗漏</tab-item>
            <div class="btn-random"></div>
          </tab>
        </div>
        <!--投注区域-->
        <div class="xin-bet-box" :class="{ 'beShort' : showBetbox }">
            <!--左侧tab切换-->
            <div class="leftBox wrapper" ref="leftWrapper">
                <div class="content">
                    <tab>
                      <tab-item selected @on-item-click="onItemClick"><i></i>半波</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>特码</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>正码</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>正码特</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>正码1-6</tab-item>
                    </tab>
                </div>
            </div>
            <div class="rightBox " ref="rightWrapper">
                <div class="content">
                  <!-- 半波：-->
                  <div class="cont banbo" v-if='activeTab == 0'>
                    <button-tab>
                      <button-tab-item selected>全尾</button-tab-item>
                      <button-tab-item>半尾</button-tab-item>
                    </button-tab>
                    <div class="dingwei">全尾<i class="icon-bet-help" @click="betHelpDialogHandler"></i></div>
                    <!--彩票内容区域：-->
                    <div class="pour-box">
                      <checker type="checkbox" default-item-class="item" selected-item-class="item-selected" id="betCheck">
                        <checker-item @on-item-click="isSelected" :value="1">
                          <p><span>0尾</span>36</p>
                          <div class="bet-num">
                            <div class="num">
                              <span class="chip-red">35</span> <span class="chip-green">42</span><span class="chip-green">45</span><span class="chip-blue">45</span><span class="chip-blue">45</span>
                            </div>
                          </div>
                          <font class="top">36</font>
                        </checker-item>
                        <checker-item @on-item-click="isSelected" :value="2">
                          <p><span>1尾</span>36</p>
                          <div class="bet-num">
                            <div class="num">
                              <span class="chip-red">35</span> <span class="chip-green">42</span><span class="chip-green">45</span><span class="chip-blue">45</span><span class="chip-blue">45</span>
                            </div>
                          </div>
                          <font class="top">36</font>
                        </checker-item>
                      </checker>
                    </div>
                  </div>
                  <!-- 特码： -->
                  <div class="cont tema" v-else-if='activeTab == 1'>
                    <button-tab>
                      <button-tab-item selected>特码A</button-tab-item>
                      <button-tab-item>特码B</button-tab-item>
                    </button-tab>
                    <div class="dingwei">特码B<i class="icon-bet-help" @click="betHelpDialogHandler"></i></div>
                    <!--彩票内容区域：-->
                    <div class="pour-box">
                      <checker type="checkbox" default-item-class="item" selected-item-class="item-selected" id="betCheck">
                        <checker-item @on-item-click="isSelected" :value="1"><p><span class="num chip-red">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="2"><p><span class="num chip-red">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="3"><p><span class="num chip-green">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="4"><p><span class="num chip-green">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="5"><p><span class="num chip-blue">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="6"><p><span class="num chip-blue">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="7"><p><span class="num chip-red">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="8"><p><span class="num chip-red">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="9"><p><span class="num chip-green">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="10"><p><span class="num chip-green">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="11"><p><span class="num chip-blue">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="12"><p><span class="num chip-blue">1</span>36</p><font class="top">36</font></checker-item>
                      </checker>
                    </div>
                  </div>
                  <!-- 正吗：-->
                  <div class="cont zhengma" v-else-if='activeTab == 2'>
                    <button-tab>
                      <button-tab-item selected>正码A</button-tab-item>
                      <button-tab-item>正码B</button-tab-item>
                    </button-tab>
                    <div class="dingwei">正码B<i class="icon-bet-help" @click="betHelpDialogHandler"></i></div>
                    <!--彩票内容区域：-->
                    <div class="pour-box">
                      <checker type="checkbox" default-item-class="item" selected-item-class="item-selected" id="betCheck">
                        <checker-item @on-item-click="isSelected" :value="1"><p><span class="num chip-red">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="2"><p><span class="num chip-red">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="3"><p><span class="num chip-green">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="4"><p><span class="num chip-green">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="5"><p><span class="num chip-blue">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="6"><p><span class="num chip-blue">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="7"><p><span class="num chip-red">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="8"><p><span class="num chip-red">1</span>36</p><font class="top">36</font></checker-item>
                      </checker>
                    </div>
                  </div>
                  <!--  正特码 ： -->
                  <div class="cont zhengtama" v-else-if='activeTab == 3'>
                    <button-tab>
                      <button-tab-item selected>正特码A</button-tab-item>
                      <button-tab-item>正特码B</button-tab-item>
                    </button-tab>
                    <div class="dingwei">正特码B<i class="icon-bet-help" @click="betHelpDialogHandler"></i></div>
                    <!--彩票内容区域：-->
                    <div class="pour-box">
                      <checker type="checkbox" default-item-class="item" selected-item-class="item-selected" id="betCheck">
                        <checker-item @on-item-click="isSelected" :value="1"><p><span class="num chip-red">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="2"><p><span class="num chip-red">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="3"><p><span class="num chip-green">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="4"><p><span class="num chip-green">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="5"><p><span class="num chip-blue">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="6"><p><span class="num chip-blue">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="7"><p><span class="num chip-red">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="8"><p><span class="num chip-red">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="9"><p><span class="num chip-green">1</span>36</p><font class="top">36</font></checker-item>
                        <checker-item @on-item-click="isSelected" :value="10"><p><span class="num chip-green">1</span>36</p><font class="top">36</font></checker-item>
                      </checker>
                    </div>
                  </div>
                  <!-- 正码 1-6 -->
                  <div class="cont zhengma-1-6" v-else-if='activeTab == 4'>
                    <div class="dingwei">特码一<i class="icon-bet-help" @click="betHelpDialogHandler"></i></div>
                    <!--彩票内容区域：-->
                    <div class="pour-box">
                      <checker type="checkbox" default-item-class="item" selected-item-class="item-selected" id="betCheck">
                        <checker-item class="col-2-1" @on-item-click="isSelected" :value="1"><p><span>单</span>36</p><font class="top">36</font></checker-item>
                        <checker-item class="col-2-1" @on-item-click="isSelected" :value="2"><p><span>双</span>36</p><font class="top">36</font></checker-item>
                        <checker-item class="col-2-1" @on-item-click="isSelected" :value="3"><p><span>大</span>36</p><font class="top">36</font></checker-item>
                        <checker-item class="col-2-1" @on-item-click="isSelected" :value="4"><p><span>小</span>36</p><font class="top">36</font></checker-item>
                        <checker-item class="col-2-1" @on-item-click="isSelected" :value="5"><p><span>尾大</span>36</p><font class="top">36</font></checker-item>
                        <checker-item class="col-2-1" @on-item-click="isSelected" :value="6"><p><span>尾小</span>36</p><font class="top">36</font></checker-item>
                        <checker-item class="col-3-1" @on-item-click="isSelected" :value="7"><p><span>红波</span>36</p><font class="top">36</font></checker-item>
                        <checker-item class="col-3-1" @on-item-click="isSelected" :value="8"><p><span>蓝波</span>36</p><font class="top">36</font></checker-item>
                        <checker-item class="col-3-1" @on-item-click="isSelected" :value="9"><p><span>绿波</span>36</p><font class="top">36</font></checker-item>
                      </checker>
                    </div>
                  </div>
                </div>
            </div>
        </div>

      </div>

    <!--定位弹窗-->
    <my-dialog :isShow="betHelpDialogShow" @on-result-change="onResultChange1" @dialogHandler="betHelpDialogHandler" >
      <div slot="title">玩法说明</div>
      <div slot="content">
        <div style="padding-bottom: 15px;border-bottom: 1px solid #e2e2e2;margin-bottom: 15px;">从百位、十位、个位至少各选1个号码组成一注，所选号码与开奖号码中3位相同，且顺序 一致，即为中奖。</div>
        <div style="font-size: 17px;color: #fa6200;margin-bottom: 9px;">投注示例：</div>
        <div style="font-size: 15px;color: #333;margin-bottom: 15px;">投注方案：03 04 05</div>
        <div style="font-size: 17px;color: #fa6200;margin-bottom: 9px;">投注示例：</div>
        <div style="font-size: 15px;color: #333;margin-bottom: 15px;">开奖号码：后三位03 04 05，即中后三位直选。</div>
      </div>
    </my-dialog>

    <!--底部下注窗口：-->
    <div class="" :class="{ 'bottomBetbox' : true , 'active' : showBetbox }">
        <div class="top">共20注  699999金币  <span class="right">可中奖15676846金币</span></div>
        <div class="mid">
            <div class="btn-1">
              <x-switch title=" " :value="true" ></x-switch>
              <input type="number" placeholder="手动输入" class="num">
              <button class="clear">清</button>
            </div>
            <button class="btn-2">投 注</button>
            <button class="btn-3">重 置</button>
        </div>
        <div class="bot">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <span class="num-2">1</span>
                <span class="num-2">5</span>
                <span class="num-2">10</span>
                <span class="num-2">50</span>
                <span class="num-3">100</span>
                <span class="num-3">500</span>
              </div>
              <div class="swiper-slide">
                <span class="num-4">1000</span>
                <span class="num-4">5000</span>
                <span class="num-5">10000</span>
                <span class="num-5">50000</span>
              </div>
            </div>
            <div class="swiper-button-prev turn"><span></span></div>
            <div class="swiper-button-next turn"><span></span></div>
          </div>
        </div>
    </div>

  </div>
</template>
<script>
  import {XHeader, Popup, Tab, TabItem, XTable, ButtonTab, ButtonTabItem, Checker, CheckerItem, Range, XSwitch, XButton, Popover} from 'vux'
  import MyDialog from '@/components/MyDialog'
  import AskRoad from '@/components/AskRoad'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import $ from 'jquery'

  export default {
    components: {
      XHeader,
      Popup,
      Tab,
      TabItem,
      XTable,
      MyDialog,
      ButtonTab,
      ButtonTabItem,
      Checker,
      CheckerItem,
      Range,
      XSwitch,
      XButton,
      AskRoad,
      Popover
    },
    data () {
      return {
        showBetbox: false,
        showPopup: false,
        showMask: false,
        betHelpDialogShow: false,
        yuanjiaoDialogShow: false,
        askRoadDialogShow: false,
        betTime: 0,
        betTip: true,
        index: 0,
        activeTab: [],
        sCart: 0,
        showAskRoad: false,
        sGgl: 0
      }
    },
    methods: {
      isSelected (event) {
        if ($('#betCheck .item').hasClass('item-selected')) {
          this.showBetbox = false
        } else {
          this.showBetbox = true
        }
      },
      askRoadDialogShowHandler: function () {
        this.askRoadDialogShow = !this.askRoadDialogShow
      },
      onItemClick (index) {
        this.activeTab = index
      },
      showDropdown: function () {
        this.showPopup = !this.showPopup
        this.betPopupScroll = new BScroll(this.$refs.betTypePopupWrapper, {})
      },
      handleTabItemClick: function (index) {
        $('.betTypeTabContent .bttc').removeClass('active')
        $('.betTypeTabContent .bttc').eq(index).addClass('active')
      },
      onResultChange1: function (val) {
        this.betHelpDialogShow = val
      },
      toggleBetRecord: function (e) {
        $('.bet-record').toggleClass('active')
        $('.xin-bet-box').toggleClass('addTop')
        if ($('.xin-bet-box').hasClass('addTop')) {
          $('.xin-bet-box').animate({top: '411px'}, 250)
        } else {
          $('.xin-bet-box').animate({top: '202px'}, 200)
        }
        $('.bet-record-switch').toggleClass('active')
      },
      betHelpDialogHandler: function () {
        this.betHelpDialogShow = !this.betHelpDialogShow
      },
      yuanjiaoDialogHandler: function () {
        this.yuanjiaoDialogShow = !this.yuanjiaoDialogShow
        this.betTime = 50
      },
      onResultChangeAR: function (val) {
        this.askRoadDialogShow = val
      }
    },
    mounted () {
      this.betRecordScroll = new BScroll(this.$refs.betRecordWrapper, {})
      this.betRecordScroll = new BScroll(this.$refs.leftWrapper, {})
      this.betRecordScroll = new BScroll(this.$refs.rightWrapper, {})
      //      底部投注区域：
      this.mySwiper = new Swiper('.swiper-container', {
        freeMode: true,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    }
  }
</script>
<style lang="scss">
  @import '~themes/lotto/lottery';
  @import '~themes/lotto/lhc/lhc';
</style>

