<!--时时彩信用玩法-->
<template>
  <div class="sscXin-wrapper">
    <x-header class="header" :left-options="{backText:''}">
      <div slot="default" class="topDropdown" @click="showDropdown">
        <span class="betType">信</span><span class="t1">重庆时时彩</span>
      </div>
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
            <div class="qishu"><span class="l-name">重庆时时彩</span>第<span class="l-qs">20179984</span>期<router-link class="icon-ques1" to="/"></router-link></div>
            <div class="bet-num">
                <span><font>1</font></span>
                <span><font>2</font></span>
                <span><font>3</font></span>
                <span><font>4</font></span>
                <span><font>5</font></span>
            </div>
            <p class="bet-tig">大 小 龙 虎</p>
          </div>
          <div class="right-p">
            <div class="qishu">第<span class="l-qs">23265445</span>期</div>
            <div>截止</div>
            <div class="count-down">
              <span class="cd_n0">0</span>
              <span class="cd_n8">8</span>
              <span class="cd_dot">:</span>
              <span class="cd_n2">2</span>
              <span class="cd_n0">0</span>
            </div>
            <p class="ask-road">问路</p>
          </div>
        </div>
        <!--开奖记录-->
        <div class="bet-record">
          <div class="wrapper" ref="betRecordWrapper">
            <div class="content">
              <x-table class="betRecordTable" :cell-bordered="false" :content-bordered="false">
                <thead>
                <tr>
                  <th>期号</th>
                  <th>开奖结果</th>
                  <th>十位</th>
                  <th>个位</th>
                  <th>形态</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>68期 <span class="dot-line"></span></td>
                  <td class="le-2">08<span class="theme-color">579</span></td>
                  <td>大单</td>
                  <td>大单</td>
                  <td>组三</td>
                </tr>
                <tr>
                  <td>68期 <span class="dot-line"></span></td>
                  <td class="le-2">08<span class="theme-color">579</span></td>
                  <td>大单</td>
                  <td>大单</td>
                  <td>组三</td>
                </tr>
                <tr>
                  <td>68期 <span class="dot-line"></span></td>
                  <td class="le-2">08<span class="theme-color">579</span></td>
                  <td>大单</td>
                  <td>大单</td>
                  <td>组三</td>
                </tr>
                <tr>
                  <td>68期 <span class="dot-line"></span></td>
                  <td class="le-2">08<span class="theme-color">579</span></td>
                  <td>大单</td>
                  <td>大单</td>
                  <td>组三</td>
                </tr>
                <tr>
                  <td>68期 <span class="dot-line"></span></td>
                  <td class="le-2">08<span class="theme-color">579</span></td>
                  <td>大单</td>
                  <td>大单</td>
                  <td>组三</td>
                </tr>
                <tr>
                  <td>68期 <span class="dot-line"></span></td>
                  <td class="le-2">08<span class="theme-color">579</span></td>
                  <td>大单</td>
                  <td>大单</td>
                  <td>组三</td>
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
        <div class="bet-box">
            <!--左侧tab切换-->
            <div class="leftBox wrapper" ref="leftWrapper">
                <div class="content">
                    <tab>
                      <tab-item selected @on-item-click="onItemClick"><i></i>数字盘<font class="chip"></font></tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>双面</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>一字定位</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>二字定位</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>二字定位</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>二字定位</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>二字定位</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>二字定位</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>二字定位</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>二字定位</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>二字定位</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>二字定位</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>二字定位</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>二字定位</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>二字定位</tab-item>
                      <tab-item @on-item-click="onItemClick"><i></i>二字定位</tab-item>
                    </tab>
                </div>
            </div>
            <div class="rightBox " ref="rightWrapper">
                <div class="content">
                    <div class="cont-1" v-if='activeTab == 0'>
                        <button-tab>
                          <button-tab-item selected>万定位</button-tab-item>
                          <button-tab-item>千定位</button-tab-item>
                          <button-tab-item>百定位</button-tab-item>
                          <button-tab-item>十定位</button-tab-item>
                          <button-tab-item>个定位</button-tab-item>
                        </button-tab>
                        <div class="dingwei">千定位<i class="icon-bet-help" @click="betHelpDialogHandler"></i></div>
                        <!--彩票内容区域：-->
                        <div class="pour-box">
                            <checker type="checkbox" default-item-class="item" selected-item-class="item-selected">
                                <checker-item :value="1"><p><span class="num">1</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                                <checker-item :value="2"><p><span class="num">1</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                                <checker-item :value="3"><p><span class="num">1</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                                <checker-item :value="4"><p><span class="num">1</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                                <checker-item :value="5"><p><span class="num">1</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                                <checker-item :value="6"><p><span class="num">1</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                                <checker-item :value="7"><p><span class="num">1</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                                <checker-item :value="8"><p><span class="num">1</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                                <checker-item :value="9"><p><span class="num">1</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                                <checker-item :value="10"><p><span class="num">1</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                                <checker-item :value="11"><p><span class="num">1</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                                <checker-item :value="12"><p><span class="">大</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                                <checker-item :value="13"><p><span class="">小</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                                <checker-item :value="14"><p><span class="num">1</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                                <checker-item :value="15"><p><span class="num">1</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                                <checker-item :value="16"><p><span class="num">1</span>36</p><font class="top">36</font><font class="bot red">99999</font></checker-item>
                            </checker>
                        </div>
                    </div>
                    <div class="cont-2" v-else-if='activeTab == 1'>
                        双面
                    </div>
                    <div class="cont-3" v-else-if='activeTab == 2'>
                        一字定位
                    </div>
                    <div class="cont-4" v-else-if='activeTab == 3'>
                        二字定位
                    </div>
                </div>
            </div>
        </div>

      </div>

    <!-- 顶部切换窗口：-->
    <popup class="betTypePopup" position="bottom" v-model="showPopup" :show-mask="showMask">
      <tab class="betTypeTab">
        <tab-item selected class="betTypeTabItem" @on-item-click="handleTabItemClick"><span class="icon-check"></span>官方玩法</tab-item>
        <tab-item class="betTypeTabItem" @on-item-click="handleTabItemClick"><span class="icon-check"></span>信用玩法</tab-item>
      </tab>
      <div class="wrapper" ref="betTypePopupWrapper">
        <div class="content">
          <div class="betTypeTabContent">
            <div class="bttc active"> <!--官方玩法-->
              <div class="betType">
                <div class="betBigType">定位胆</div>
                <div class="betExtType">
                  <div class="betTit">定位胆</div>
                  <div class="betExt">
                    <router-link class="cur"  to="/">定位胆</router-link>
                  </div>
                </div>
              </div>
              <div class="betType">
                <div class="betBigType">五星</div>
                <div class="betExtType">
                  <div class="betTit">五星</div>
                  <div class="betExt">
                    <router-link to="/">直选复式</router-link>
                  </div>
                </div>
              </div>
              <div class="betType">
                <div class="betBigType">四星</div>
                <div class="betExtType">
                  <div class="betTit">四星</div>
                  <div class="betExt">
                    <router-link to="/">直选复式</router-link>
                  </div>
                </div>
              </div>
              <div class="betType">
                <div class="betBigType">后三</div>
                <div class="betExtType">
                  <div class="betTit">后三</div>
                  <div class="betExt">
                    <router-link  to="/">直选复式</router-link>
                    <router-link  to="/">直选和值</router-link>
                    <router-link  to="/">直选跨度</router-link>
                    <router-link  to="/">后三组合</router-link>
                    <router-link  to="/">组三复式</router-link>
                    <router-link  to="/">组六复式</router-link>
                    <router-link  to="/">组选和值</router-link>
                    <router-link  to="/">组选包胆</router-link>
                    <router-link  to="/">和值尾数</router-link>
                    <router-link  to="/">特殊号</router-link>
                  </div>
                </div>
              </div>
              <div class="betType">
                <div class="betBigType">前三</div>
                <div class="betExtType">
                  <div class="betTit">前三</div>
                  <div class="betExt">
                    <router-link  to="/">直选复式</router-link>
                    <router-link  to="/">直选和值</router-link>
                    <router-link  to="/">直选跨度</router-link>
                    <router-link  to="/">前三组合</router-link>
                    <router-link  to="/">组三复式</router-link>
                    <router-link  to="/">组六复式</router-link>
                    <router-link  to="/">组选和值</router-link>
                    <router-link  to="/">组选包胆</router-link>
                    <router-link  to="/">和值尾数</router-link>
                    <router-link  to="/">特殊号</router-link>
                  </div>
                </div>
              </div>
              <div class="betType">
                <div class="betBigType">前二</div>
                <div class="betExtType">
                  <div class="betTit">前二</div>
                  <div class="betExt">
                    <router-link  to="/">直选复式</router-link>
                    <router-link  to="/">直选和值</router-link>
                    <router-link  to="/">直选跨度</router-link>
                    <router-link  to="/">组选复式</router-link>
                    <router-link  to="/">组选和值</router-link>
                    <router-link  to="/">组选包胆</router-link>
                  </div>
                </div>
              </div>
              <div class="betType">
                <div class="betBigType">不定位</div>
                <div class="betExtType">
                  <div class="betTit">不定位</div>
                  <div class="betExt">
                    <router-link  to="/">前三一码</router-link>
                    <router-link  to="/">前三二码</router-link>
                    <router-link  to="/">后三一码</router-link>
                    <router-link  to="/">后三二码</router-link>
                    <router-link  to="/">前四一码</router-link>
                    <router-link  to="/">前四二码</router-link>
                    <router-link  to="/">后四一码</router-link>
                    <router-link  to="/">后四二码</router-link>
                    <router-link  to="/">五星二码</router-link>
                    <router-link  to="/">五星三码</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="bttc">
              <div class="betType">
                <div class="betBigType">数字盘</div>
                <div class="betExtType">
                  <div class="betTit">数字盘</div>
                  <div class="betExt">
                    <router-link to="/">数字盘</router-link>
                  </div>
                </div>
              </div>
              <div class="betType">
                <div class="betBigType">双面</div>
                <div class="betExtType">
                  <div class="betTit">双面</div>
                  <div class="betExt">
                    <router-link to="/">双面</router-link>
                  </div>
                </div>
              </div>
              <div class="betType">
                <div class="betBigType">一字定位</div>
                <div class="betExtType">
                  <div class="betTit">一字定位</div>
                  <div class="betExt">
                    <router-link to="/">万定位</router-link>
                    <router-link to="/">千定位</router-link>
                    <router-link to="/">百定位</router-link>
                    <router-link to="/">十定位</router-link>
                    <router-link to="/">个定位</router-link>
                  </div>
                </div>
              </div>
              <div class="betType">
                <div class="betBigType">二字定位</div>
                <div class="betExtType">
                  <div class="betTit">二字定位</div>
                  <div class="betExt">
                    <router-link to="/">万千</router-link>
                    <router-link to="/">万百</router-link>
                    <router-link to="/">万十</router-link>
                    <router-link to="/">万个</router-link>
                    <router-link to="/">千百</router-link>
                    <router-link to="/">千十</router-link>
                    <router-link to="/">千个</router-link>
                    <router-link to="/">百十</router-link>
                    <router-link to="/">百个</router-link>
                    <router-link to="/">十个</router-link>
                  </div>
                </div>
              </div>
              <div class="betType">
                <div class="betBigType">三字定位</div>
                <div class="betExtType">
                  <div class="betTit">三字定位</div>
                  <div class="betExt">
                    <router-link to="/">万千百</router-link>
                    <router-link to="/">万千十</router-link>
                    <router-link to="/">万千个</router-link>
                    <router-link to="/">万百十</router-link>
                    <router-link to="/">万百个</router-link>
                    <router-link to="/">万十个</router-link>
                    <router-link to="/">千百十</router-link>
                    <router-link to="/">千百个</router-link>
                    <router-link to="/">千十个</router-link>
                    <router-link to="/">百十个</router-link>
                  </div>
                </div>
              </div>
              <div class="betType">
                <div class="betBigType">一字组合</div>
                <div class="betExtType">
                  <div class="betTit">一字组合</div>
                  <div class="betExt">
                    <router-link to="/">全五一字</router-link>
                    <router-link to="/">前三一字组合</router-link>
                    <router-link to="/">中三一字组合</router-link>
                    <router-link to="/">后三一字组合</router-link>
                  </div>
                </div>
              </div>
              <div class="betType">
                <div class="betBigType">组选三</div>
                <div class="betExtType">
                  <div class="betTit">组选三</div>
                  <div class="betExt">
                    <router-link to="/">前三组选三</router-link>
                    <router-link to="/">中三组选三</router-link>
                    <router-link to="/">后三组选三</router-link>
                  </div>
                </div>
              </div>
              <div class="betType">
                <div class="betBigType">组选六</div>
                <div class="betExtType">
                  <div class="betTit">组选六</div>
                  <div class="betExt">
                    <router-link to="/">前三组选六</router-link>
                    <router-link to="/">中三组选六</router-link>
                    <router-link to="/">后三组选六</router-link>
                  </div>
                </div>
              </div>
              <div class="betType">
                <div class="betBigType">跨度</div>
                <div class="betExtType">
                  <div class="betTit">跨度</div>
                  <div class="betExt">
                    <router-link to="/">前三跨度</router-link>
                    <router-link to="/">中三跨度</router-link>
                    <router-link to="/">后三跨度</router-link>
                  </div>
                </div>
              </div>
              <div class="betType">
                <div class="betBigType">龙虎</div>
                <div class="betExtType">
                  <div class="betTit">龙虎</div>
                  <div class="betExt">
                    <router-link to="/">龙虎</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </popup>

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
    <div class="confirmBet">
        <div class="top">共20注  699999金币  <span class="right">可中奖15676846金币</span></div>
        <div class="mid">
            <div class="btn-1">
              <x-switch title=" " :value="true" ></x-switch>
              <input type="number" placeholder="手动输入" class="num">
              <button class="clear">清</button>
            </div>
            <button class="btn-2">投注</button>
            <button class="btn-3">重置</button>
        </div>
    </div>

  </div>
</template>
<script>
  import {XHeader, Popup, Tab, TabItem, XTable, ButtonTab, ButtonTabItem, Checker, CheckerItem, Range, XSwitch, XButton, Popover} from 'vux'
  import MyDialog from '@/components/MyDialog'
  import BScroll from 'better-scroll'
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
      Popover
    },
    data () {
      return {
        showPopup: false,
        showMask: false,
        betHelpDialogShow: false,
        yuanjiaoDialogShow: false,
        betTime: 0,
        betTip: true,
        index: 0,
        activeTab: [],
        sCart: 0,
        sGgl: 0
      }
    },
    methods: {
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
      toggleBetRecord: function (e) {
        $('.bet-record').toggleClass('active')
        $('.bet-box').toggleClass('addTop')
        if ($('.bet-box').hasClass('addTop')) {
          $('.bet-box').animate({top: '411px'}, 200)
        } else {
          $('.bet-box').animate({top: '202px'}, 200)
        }
        $('.bet-record-switch').toggleClass('active')
        var that = this
        setTimeout(function () { // 当投注记录展开时，禁用页面的滚动，防止冲突
          if ($('.bet-record').hasClass('active')) {
            that.scroll.disable()
          } else {
            that.scroll = new BScroll(that.$refs.wrapper, {})
          }
        }, 200)
      },
      betHelpDialogHandler: function () {
        this.betHelpDialogShow = !this.betHelpDialogShow
      },
      yuanjiaoDialogHandler: function () {
        this.yuanjiaoDialogShow = !this.yuanjiaoDialogShow
        this.betTime = 50
      }
    },
    mounted () {
      this.betRecordScroll = new BScroll(this.$refs.betRecordWrapper, {})
      this.betRecordScroll = new BScroll(this.$refs.leftWrapper, {})
      this.betRecordScroll = new BScroll(this.$refs.rightWrapper, {})
      this.scroll = new BScroll(this.$refs.wrapper, {})
    }
  }
</script>
<style lang="scss">
  @import '~themes/lotto/lottery';
  @import '~themes/lotto/ssc/sscXin';
  .content-wrapper{
    position: absolute;overflow: hidden;
    top:44px;right: 0;bottom: 49px;left: 0;
  }
</style>
