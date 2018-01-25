<template>
  <div>
    <x-header class="header" :left-options="{backText:''}">
      <div slot="default" class="topDropdown" @click="showDropdown">
        <span class="betType">官</span><span class="t1">定位胆</span><!--<span class="t2">直选复式</span>-->
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
    <div class="wrapper content-wrapper" ref="wrapper">
      <div class="content">
        <!--投注页面头部-->
        <div class="bet-top">
          <div class="left-p">
            <div class="qishu"><span class="l-name">重庆时时彩</span>第<span class="l-qs">20179984</span>期<router-link class="icon-ques1" to="/"></router-link></div>
            <div class="bet-num"><span class="ssc_n1">1</span><span class="ssc_n2">2</span><span class="ssc_n3">3</span><span class="ssc_n4">4</span><span class="ssc_n5">5</span></div>
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
        <!--玩法说明-->
        <div class="bet-help">玩法说明:竞猜开奖号码五位<i class="icon-bet-help" @click="betHelpDialogHandler"></i></div>
        <!--投注区域-->
        <div class="bet-area">
          <div class="bet-h">
            <div class="bet-h-p">万位</div>
            <div class="bet-h-f">
              <button-tab>
                <button-tab-item @on-item-click="wToggleQuan">全</button-tab-item>
                <button-tab-item @on-item-click="wToggleDa">大</button-tab-item>
                <button-tab-item @on-item-click="wToggleXiao">小</button-tab-item>
                <button-tab-item @on-item-click="wToggleDang">单</button-tab-item>
                <button-tab-item @on-item-click="wToggleShuang">双</button-tab-item>
                <button-tab-item @on-item-click="wToggleQing">清</button-tab-item>
              </button-tab>
            </div>
          </div>
          <div class="bet-c">
            <div class="num">
              <span class="n-p" :class="{active:numCheck.w.n0.checked}" @click="toggleNumStateW" num="0">0</span>
              <span class="n-t">12</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.w.n1.checked}" @click="toggleNumStateW" num="1">1</span>
              <span class="n-t">11</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.w.n2.checked}" @click="toggleNumStateW" num="2">2</span>
              <span class="n-t">10</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.w.n3.checked}" @click="toggleNumStateW" num="3">3</span>
              <span class="n-t">9</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.w.n4.checked}" @click="toggleNumStateW" num="4">4</span>
              <span class="n-t">8</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.w.n5.checked}" @click="toggleNumStateW" num="5">5</span>
              <span class="n-t">7</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.w.n6.checked}" @click="toggleNumStateW" num="6">6</span>
              <span class="n-t">6</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.w.n7.checked}" @click="toggleNumStateW" num="7">7</span>
              <span class="n-t">5</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.w.n8.checked}" @click="toggleNumStateW" num="8">8</span>
              <span class="n-t">4</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.w.n9.checked}" @click="toggleNumStateW" num="9">9</span>
              <span class="n-t">3</span>
            </div>
          </div>
          <div class="bet-h">
            <div class="bet-h-p">千位</div>
            <div class="bet-h-f">
              <button-tab>
                <button-tab-item @on-item-click="qToggleQuan">全</button-tab-item>
                <button-tab-item @on-item-click="qToggleDa">大</button-tab-item>
                <button-tab-item @on-item-click="qToggleXiao">小</button-tab-item>
                <button-tab-item @on-item-click="qToggleDang">单</button-tab-item>
                <button-tab-item @on-item-click="qToggleShuang">双</button-tab-item>
                <button-tab-item @on-item-click="qToggleQing">清</button-tab-item>
              </button-tab>
            </div>
          </div>
          <div class="bet-c">
            <div class="num">
              <span class="n-p" :class="{active:numCheck.q.n0.checked}" @click="toggleNumStateQ" num="0">0</span>
              <span class="n-t">12</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.q.n1.checked}" @click="toggleNumStateQ" num="1">1</span>
              <span class="n-t">11</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.q.n2.checked}" @click="toggleNumStateQ" num="2">2</span>
              <span class="n-t">10</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.q.n3.checked}" @click="toggleNumStateQ" num="3">3</span>
              <span class="n-t">9</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.q.n4.checked}" @click="toggleNumStateQ" num="4">4</span>
              <span class="n-t">8</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.q.n5.checked}" @click="toggleNumStateQ" num="5">5</span>
              <span class="n-t">7</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.q.n6.checked}" @click="toggleNumStateQ" num="6">6</span>
              <span class="n-t">6</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.q.n7.checked}" @click="toggleNumStateQ" num="7">7</span>
              <span class="n-t">5</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.q.n8.checked}" @click="toggleNumStateQ" num="8">8</span>
              <span class="n-t">4</span>
            </div>
            <div class="num">
              <span class="n-p" :class="{active:numCheck.q.n9.checked}" @click="toggleNumStateQ" num="9">9</span>
              <span class="n-t">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部区域-->
    <div class="lottery-bet1-footer">
      <a href="javascript:void(0);" class="btn-random">机选</a>
      <div class="middle-w">
        <span class="bet-money" @click="yuanjiaoDialogHandler">{{yuanjiaoDefaut}}</span>
        <input type="text" class="bet-times">
        <span class="t-times">倍</span>
      </div>
      <div class="btn-bet disabled">投注</div> <!--开启状态去除disabled样式-->
      <div class="bet-info show"> <!--隐藏去除show样式-->
        <div>共 <span>10</span>注，最多中奖 <span>2940.00</span> 金币</div>
        <div>投注 <span>30.00</span> 金币，盈利 <span>2910.00</span> 金币</div>
      </div>
    </div>
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
    <!--玩法弹窗-->
    <my-dialog :isShow="betHelpDialogShow" @on-result-change="onResultChange1" @dialogHandler="betHelpDialogHandler" >
      <div slot="title">弹窗标题</div>
      <div slot="content">
        <div style="padding-bottom: 15px;border-bottom: 1px solid #e2e2e2;margin-bottom: 15px;">从百位、十位、个位至少各选1个号码组成一注，所选号码与开奖号码中3位相同，且顺序 一致，即为中奖。</div>
        <div style="font-size: 17px;color: #fa6200;margin-bottom: 9px;">投注示例：</div>
        <div style="font-size: 15px;color: #333;margin-bottom: 15px;">投注方案：03 04 05</div>
        <div style="font-size: 17px;color: #fa6200;margin-bottom: 9px;">投注示例：</div>
        <div style="font-size: 15px;color: #333;margin-bottom: 15px;">开奖号码：后三位03 04 05，即中后三位直选。</div>
      </div>
    </my-dialog>
    <!--圆角分设置弹窗-->
   <my-dialog :isShow="yuanjiaoDialogShow" @on-result-change="onResultChange2" @dialogHandler="yuanjiaoDialogHandler">
      <div slot="title">设置</div>
      <div slot="content">
        <div class="yuanjiaoDialogContent">
          <div class="yj_row"><span class="set_n">单位</span><checker class="radio1" type="radio" selected-item-class="checked" v-model="yuanjiaoDefaut"><checker-item value="元">元</checker-item><checker-item value="角">角</checker-item><checker-item value="分">分</checker-item></checker></div>
          <div class="yj_row"><span class="set_n">模式</span><checker class="radio1" type="radio" selected-item-class="checked" v-model="yuanjiaoMode"><checker-item value="1元">1元</checker-item><checker-item value="2元">2元</checker-item></checker></div>
          <div class="yj_row"><span class="set_n">倍数</span><input type="text" class="betTimesInput"></div>
          <div class="yj_row r_bt">
            <div class="clearfix"><span class="set_n">赔率： <span>1960.00</span></span> <span class="vux-pull-right">返点：100%</span></div>
            <div class="rang_wrap"><range v-model="betTime" :rangeBarHeight="5"></range></div>
          </div>
          <div class="xd_row"><span class="set_n">下单提示</span><x-switch class="betTip" title="" v-model="betTip"></x-switch></div>
          <div class="btn-wrap">
            <button class="btn">恢复默认</button>
            <button class="btn btn-ok">确认</button>
          </div>
        </div>
      </div>
    </my-dialog>
    <ask-road></ask-road>
  </div>
</template>
<script>
import {XHeader, Popup, Tab, TabItem, XTable, ButtonTab, ButtonTabItem, Checker, CheckerItem, Range, XSwitch, XButton, Popover} from 'vux'
import MyDialog from '@/components/MyDialog'
import AskRoad from '@/components/AskRoad'
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
    Popover,
    AskRoad
  },
  data () {
    return {
      showPopup: false,
      showMask: false,
      betHelpDialogShow: false,
      yuanjiaoDialogShow: false,
      numCheck: { // 投注号码状态
        w: {
          n0: {checked: false},
          n1: {checked: false},
          n2: {checked: false},
          n3: {checked: false},
          n4: {checked: false},
          n5: {checked: false},
          n6: {checked: false},
          n7: {checked: false},
          n8: {checked: false},
          n9: {checked: false}
        },
        q: {
          n0: {checked: false},
          n1: {checked: false},
          n2: {checked: false},
          n3: {checked: false},
          n4: {checked: false},
          n5: {checked: false},
          n6: {checked: false},
          n7: {checked: false},
          n8: {checked: false},
          n9: {checked: false}
        }
      },
      wFirstQuan: true,
      wFirstDa: true,
      wFirstXiao: true,
      wFirstDang: true,
      wFirstShuang: true,
      wFirstQing: true,
      qFirstQuan: true,
      qFirstDa: true,
      qFirstXiao: true,
      qFirstDang: true,
      qFirstShuang: true,
      qFirstQing: true,
      yuanjiaoDefaut: '元',
      yuanjiaoMode: '1元',
      betTime: 0,
      betTip: true,
      sCart: 0,
      sGgl: 0
    }
  },
  methods: {
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
    },
    onResultChange1: function (val) {
      this.betHelpDialogShow = val
    },
    onResultChange2: function (val) {
      this.yuanjiaoDialogShow = val
    },
    toggleNumStateW: function (e) { // 万位投注号码handler
      this.wFirstQuan = this.wFirstDa = this.wFirstXiao = this.wFirstDang = this.wFirstShuang = this.wFirstQing = true
      this.numCheck.w['n' + $(e.target).attr('num')].checked = !this.numCheck.w['n' + $(e.target).attr('num')].checked
    },
    toggleNumStateQ: function (e) { // 千位投注号码handler
      this.qFirstQuan = this.qFirstDa = this.qFirstXiao = this.qFirstDang = this.qFirstShuang = this.qFirstQing = true
      this.numCheck.q['n' + $(e.target).attr('num')].checked = !this.numCheck.q['n' + $(e.target).attr('num')].checked
    },
    wToggleQuan: function () { // 万位全的hanlder
      if (this.wFirstQuan) {
        this.numCheck.w.n0.checked = true
        this.numCheck.w.n1.checked = true
        this.numCheck.w.n2.checked = true
        this.numCheck.w.n3.checked = true
        this.numCheck.w.n4.checked = true
        this.numCheck.w.n5.checked = true
        this.numCheck.w.n6.checked = true
        this.numCheck.w.n7.checked = true
        this.numCheck.w.n8.checked = true
        this.numCheck.w.n9.checked = true
        this.wFirstQuan = false
      } else {
        this.numCheck.w.n0.checked = !this.numCheck.w.n0.checked
        this.numCheck.w.n1.checked = !this.numCheck.w.n1.checked
        this.numCheck.w.n2.checked = !this.numCheck.w.n2.checked
        this.numCheck.w.n3.checked = !this.numCheck.w.n3.checked
        this.numCheck.w.n4.checked = !this.numCheck.w.n4.checked
        this.numCheck.w.n5.checked = !this.numCheck.w.n5.checked
        this.numCheck.w.n6.checked = !this.numCheck.w.n6.checked
        this.numCheck.w.n7.checked = !this.numCheck.w.n7.checked
        this.numCheck.w.n8.checked = !this.numCheck.w.n8.checked
        this.numCheck.w.n9.checked = !this.numCheck.w.n9.checked
      }
      this.wFirstDa = this.wFirstXiao = this.wFirstDang = this.wFirstShuang = this.wFirstQing = true
    },
    wToggleDa: function () { // 万位大的hanlder
      if (this.wFirstDa) {
        this.numCheck.w.n0.checked = false
        this.numCheck.w.n1.checked = false
        this.numCheck.w.n2.checked = false
        this.numCheck.w.n3.checked = false
        this.numCheck.w.n4.checked = false
        this.numCheck.w.n5.checked = true
        this.numCheck.w.n6.checked = true
        this.numCheck.w.n7.checked = true
        this.numCheck.w.n8.checked = true
        this.numCheck.w.n9.checked = true
        this.wFirstDa = false
      } else {
        this.numCheck.w.n5.checked = !this.numCheck.w.n5.checked
        this.numCheck.w.n6.checked = !this.numCheck.w.n6.checked
        this.numCheck.w.n7.checked = !this.numCheck.w.n7.checked
        this.numCheck.w.n8.checked = !this.numCheck.w.n8.checked
        this.numCheck.w.n9.checked = !this.numCheck.w.n9.checked
      }
      this.wFirstQuan = this.wFirstXiao = this.wFirstDang = this.wFirstShuang = this.wFirstQing = true
    },
    wToggleXiao: function () { // 万位小的hanlder
      if (this.wFirstXiao) {
        this.numCheck.w.n0.checked = true
        this.numCheck.w.n1.checked = true
        this.numCheck.w.n2.checked = true
        this.numCheck.w.n3.checked = true
        this.numCheck.w.n4.checked = true
        this.numCheck.w.n5.checked = false
        this.numCheck.w.n6.checked = false
        this.numCheck.w.n7.checked = false
        this.numCheck.w.n8.checked = false
        this.numCheck.w.n9.checked = false
        this.wFirstXiao = false
      } else {
        this.numCheck.w.n1.checked = !this.numCheck.w.n1.checked
        this.numCheck.w.n2.checked = !this.numCheck.w.n2.checked
        this.numCheck.w.n3.checked = !this.numCheck.w.n3.checked
        this.numCheck.w.n4.checked = !this.numCheck.w.n4.checked
        this.numCheck.w.n0.checked = !this.numCheck.w.n0.checked
      }
      this.wFirstQuan = this.wFirstDa = this.wFirstDang = this.wFirstShuang = this.wFirstQing = true
    },
    wToggleDang: function () { // 万位单的hanlder
      if (this.wFirstDang) {
        this.numCheck.w.n0.checked = false
        this.numCheck.w.n1.checked = true
        this.numCheck.w.n2.checked = false
        this.numCheck.w.n3.checked = true
        this.numCheck.w.n4.checked = false
        this.numCheck.w.n5.checked = true
        this.numCheck.w.n6.checked = false
        this.numCheck.w.n7.checked = true
        this.numCheck.w.n8.checked = false
        this.numCheck.w.n9.checked = true
        this.wFirstDang = false
      } else {
        this.numCheck.w.n1.checked = !this.numCheck.w.n1.checked
        this.numCheck.w.n3.checked = !this.numCheck.w.n3.checked
        this.numCheck.w.n5.checked = !this.numCheck.w.n5.checked
        this.numCheck.w.n7.checked = !this.numCheck.w.n7.checked
        this.numCheck.w.n9.checked = !this.numCheck.w.n9.checked
      }
      this.wFirstQuan = this.wFirstDa = this.wFirstXiao = this.wFirstShuang = this.wFirstQing = true
    },
    wToggleShuang: function () { // 万位双的hanlder
      if (this.wFirstShuang) {
        this.numCheck.w.n0.checked = true
        this.numCheck.w.n1.checked = false
        this.numCheck.w.n2.checked = true
        this.numCheck.w.n3.checked = false
        this.numCheck.w.n4.checked = true
        this.numCheck.w.n5.checked = false
        this.numCheck.w.n6.checked = true
        this.numCheck.w.n7.checked = false
        this.numCheck.w.n8.checked = true
        this.numCheck.w.n9.checked = false
        this.wFirstShuang = false
      } else {
        this.numCheck.w.n0.checked = !this.numCheck.w.n0.checked
        this.numCheck.w.n2.checked = !this.numCheck.w.n2.checked
        this.numCheck.w.n4.checked = !this.numCheck.w.n4.checked
        this.numCheck.w.n6.checked = !this.numCheck.w.n6.checked
        this.numCheck.w.n8.checked = !this.numCheck.w.n8.checked
      }
      this.wFirstQuan = this.wFirstDa = this.wFirstXiao = this.wFirstDang = this.wFirstQing = true
    },
    wToggleQing: function () { // 万位清的hanlder
      this.numCheck.w.n0.checked = false
      this.numCheck.w.n1.checked = false
      this.numCheck.w.n2.checked = false
      this.numCheck.w.n3.checked = false
      this.numCheck.w.n4.checked = false
      this.numCheck.w.n5.checked = false
      this.numCheck.w.n6.checked = false
      this.numCheck.w.n7.checked = false
      this.numCheck.w.n8.checked = false
      this.numCheck.w.n9.checked = false
      this.wFirstShuang = false
      this.wFirstQuan = this.wFirstDa = this.wFirstXiao = this.wFirstDang = this.wFirstShuang = true
    },
    qToggleQuan: function () { // 千位全的hanlder
      if (this.qFirstQuan) {
        this.numCheck.q.n0.checked = true
        this.numCheck.q.n1.checked = true
        this.numCheck.q.n2.checked = true
        this.numCheck.q.n3.checked = true
        this.numCheck.q.n4.checked = true
        this.numCheck.q.n5.checked = true
        this.numCheck.q.n6.checked = true
        this.numCheck.q.n7.checked = true
        this.numCheck.q.n8.checked = true
        this.numCheck.q.n9.checked = true
        this.qFirstQuan = false
      } else {
        this.numCheck.q.n0.checked = !this.numCheck.q.n0.checked
        this.numCheck.q.n1.checked = !this.numCheck.q.n1.checked
        this.numCheck.q.n2.checked = !this.numCheck.q.n2.checked
        this.numCheck.q.n3.checked = !this.numCheck.q.n3.checked
        this.numCheck.q.n4.checked = !this.numCheck.q.n4.checked
        this.numCheck.q.n5.checked = !this.numCheck.q.n5.checked
        this.numCheck.q.n6.checked = !this.numCheck.q.n6.checked
        this.numCheck.q.n7.checked = !this.numCheck.q.n7.checked
        this.numCheck.q.n8.checked = !this.numCheck.q.n8.checked
        this.numCheck.q.n9.checked = !this.numCheck.q.n9.checked
      }
      this.qFirstDa = this.qFirstXiao = this.qFirstDang = this.qFirstShuang = this.qFirstQing = true
    },
    qToggleDa: function () { // 千位大的hanlder
      if (this.qFirstDa) {
        this.numCheck.q.n0.checked = false
        this.numCheck.q.n1.checked = false
        this.numCheck.q.n2.checked = false
        this.numCheck.q.n3.checked = false
        this.numCheck.q.n4.checked = false
        this.numCheck.q.n5.checked = true
        this.numCheck.q.n6.checked = true
        this.numCheck.q.n7.checked = true
        this.numCheck.q.n8.checked = true
        this.numCheck.q.n9.checked = true
        this.qFirstDa = false
      } else {
        this.numCheck.q.n5.checked = !this.numCheck.q.n5.checked
        this.numCheck.q.n6.checked = !this.numCheck.q.n6.checked
        this.numCheck.q.n7.checked = !this.numCheck.q.n7.checked
        this.numCheck.q.n8.checked = !this.numCheck.q.n8.checked
        this.numCheck.q.n9.checked = !this.numCheck.q.n9.checked
      }
      this.qFirstQuan = this.qFirstXiao = this.qFirstDang = this.qFirstShuang = this.qFirstQing = true
    },
    qToggleXiao: function () { // 千位小的hanlder
      if (this.qFirstXiao) {
        this.numCheck.q.n0.checked = true
        this.numCheck.q.n1.checked = true
        this.numCheck.q.n2.checked = true
        this.numCheck.q.n3.checked = true
        this.numCheck.q.n4.checked = true
        this.numCheck.q.n5.checked = false
        this.numCheck.q.n6.checked = false
        this.numCheck.q.n7.checked = false
        this.numCheck.q.n8.checked = false
        this.numCheck.q.n9.checked = false
        this.qFirstXiao = false
      } else {
        this.numCheck.q.n1.checked = !this.numCheck.q.n1.checked
        this.numCheck.q.n2.checked = !this.numCheck.q.n2.checked
        this.numCheck.q.n3.checked = !this.numCheck.q.n3.checked
        this.numCheck.q.n4.checked = !this.numCheck.q.n4.checked
        this.numCheck.q.n0.checked = !this.numCheck.q.n0.checked
      }
      this.qFirstQuan = this.qFirstDa = this.qFirstDang = this.qFirstShuang = this.qFirstQing = true
    },
    qToggleDang: function () { // 千位单的hanlder
      if (this.qFirstDang) {
        this.numCheck.q.n0.checked = false
        this.numCheck.q.n1.checked = true
        this.numCheck.q.n2.checked = false
        this.numCheck.q.n3.checked = true
        this.numCheck.q.n4.checked = false
        this.numCheck.q.n5.checked = true
        this.numCheck.q.n6.checked = false
        this.numCheck.q.n7.checked = true
        this.numCheck.q.n8.checked = false
        this.numCheck.q.n9.checked = true
        this.qFirstDang = false
      } else {
        this.numCheck.q.n1.checked = !this.numCheck.q.n1.checked
        this.numCheck.q.n3.checked = !this.numCheck.q.n3.checked
        this.numCheck.q.n5.checked = !this.numCheck.q.n5.checked
        this.numCheck.q.n7.checked = !this.numCheck.q.n7.checked
        this.numCheck.q.n9.checked = !this.numCheck.q.n9.checked
      }
      this.qFirstQuan = this.qFirstDa = this.qFirstXiao = this.qFirstShuang = this.qFirstQing = true
    },
    qToggleShuang: function () { // 千位双的hanlder
      if (this.qFirstShuang) {
        this.numCheck.q.n0.checked = true
        this.numCheck.q.n1.checked = false
        this.numCheck.q.n2.checked = true
        this.numCheck.q.n3.checked = false
        this.numCheck.q.n4.checked = true
        this.numCheck.q.n5.checked = false
        this.numCheck.q.n6.checked = true
        this.numCheck.q.n7.checked = false
        this.numCheck.q.n8.checked = true
        this.numCheck.q.n9.checked = false
        this.qFirstShuang = false
      } else {
        this.numCheck.q.n0.checked = !this.numCheck.q.n0.checked
        this.numCheck.q.n2.checked = !this.numCheck.q.n2.checked
        this.numCheck.q.n4.checked = !this.numCheck.q.n4.checked
        this.numCheck.q.n6.checked = !this.numCheck.q.n6.checked
        this.numCheck.q.n8.checked = !this.numCheck.q.n8.checked
      }
      this.qFirstQuan = this.qFirstDa = this.qFirstXiao = this.qFirstDang = this.qFirstQing = true
    },
    qToggleQing: function () { // 千位清的hanlder
      this.numCheck.q.n0.checked = false
      this.numCheck.q.n1.checked = false
      this.numCheck.q.n2.checked = false
      this.numCheck.q.n3.checked = false
      this.numCheck.q.n4.checked = false
      this.numCheck.q.n5.checked = false
      this.numCheck.q.n6.checked = false
      this.numCheck.q.n7.checked = false
      this.numCheck.q.n8.checked = false
      this.numCheck.q.n9.checked = false
      this.qFirstShuang = false
      this.qFirstQuan = this.qFirstDa = this.qFirstXiao = this.qFirstDang = this.qFirstShuang = true
    }
  },
  mounted () {
    $('.bet-h-f .vux-button-group a').on('click', function () {
      $(this).toggleClass('vux-button-group-current')
    })
    this.betRecordScroll = new BScroll(this.$refs.betRecordWrapper, {})
    this.scroll = new BScroll(this.$refs.wrapper, {})
    this.$nextTick(() => {
    })
  }
}
</script>
<style lang="scss">
 @import '~themes/lotto/lottery';
 @import '~themes/lotto/ssc/ssc';
 .content-wrapper{
   position: absolute;overflow: hidden;
   top:44px;right: 0;bottom: 49px;left: 0;
 }
</style>
