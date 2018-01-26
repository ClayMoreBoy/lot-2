<template>
	<div class="askroad-wrapper">
      <div v-transfer-dom class='dialog-page'>
        <x-dialog v-model="MyIshow">
          <div class="road-page" >
              <div class='top'>
                  <tab>
                     <tab-item selected @on-item-click="onItemClick">问路图</tab-item>
                     <tab-item @on-item-click="onItemClick">开奖结果</tab-item>
                  </tab>
                  <div @click="MyIshow=false" class="close"><span></span></div>
              </div>
            <!--问路图 ：-->
            <div class='roadCont' v-if='activeTab == 0'>
                  <div class='shaixuan'>
                     <div class='ball pub-tit'>
                       <selector placeholder="第一球" value='first' name="district" :options="list"></selector>
                     </div>
                     <tab>
                       <tab-item selected class='pub-tit'>球号</tab-item>
                       <tab-item class='pub-tit'>大小</tab-item>
                       <tab-item class='pub-tit'>单双</tab-item>
                     </tab>
                  </div>
                  <div class='box'>
                      <div class='road-1'>
                          <p class='title'>大路</p>
                          <div class='cont'>
                              <scroller lock-y :scrollbar-x=false>
                                  <ul>
                                      <li v-for='road1 in roadbox'>
                                        <span><font class='blue'></font></span>
                                        <span><font class='red'></font></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                      </li>
                                  </ul>
                              </scroller>
                          </div>
                      </div>
                      <div class='road-2'>
                          <p class='title'>珠盘路</p>
                          <div class='cont'>
                              <scroller lock-y :scrollbar-x=false>
                                  <ul>
                                      <li v-for='road1 in roadbox'>
                                        <span><font class='blue'>大</font></span>
                                        <span><font class='red'>小</font></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                      </li>
                                  </ul>
                              </scroller>
                          </div>
                      </div>
                      <div class='road-3'>
                          <p class='title'>大眼路</p>
                          <div class='cont'>
                              <scroller lock-y :scrollbar-x=false>
                                  <ul>
                                      <li v-for='road1 in roadbox'>
                                        <span><font class='blue'></font></span>
                                        <span><font class='red'></font></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                      </li>
                                  </ul>
                              </scroller>
                          </div>
                      </div>
                      <div class='road-4'>
                          <p class='title'>小路</p>
                          <div class='cont'>
                              <scroller lock-y :scrollbar-x=false>
                                  <ul>
                                      <li v-for='road1 in roadbox'>
                                        <span><font class='blue'></font></span>
                                        <span><font class='red'></font></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                      </li>
                                  </ul>
                              </scroller>
                          </div>
                      </div>
                      <div class='road-5'>
                          <p class='title'>曱甴路</p>
                          <div class='cont'>
                              <scroller lock-y :scrollbar-x=false>
                                  <ul>
                                      <li v-for='road1 in roadbox'>
                                        <span><font class='blue'></font></span>
                                        <span><font class='red'></font></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                      </li>
                                  </ul>
                              </scroller>
                          </div>
                      </div>

                  </div>
                  <div class='info'>
                      <p class='left'>大问路 <span><font class='bor'></font><font class='cir'></font><font class='line'></font></span></p>
                      <p class='right'>小问路 <span><font class='bor'></font><font class='cir'></font><font class='line'></font></span></p>
                  </div>
              </div>
              <!--开奖结果：-->
              <div  class='resultCont' v-if='activeTab == 1' >
                  <flexbox class='tit'>
                    <flexbox-item :span="3"><p>期号</p></flexbox-item>
                    <flexbox-item :span="4"><p>开奖结果</p></flexbox-item>
                    <flexbox-item :span="5"><p>五星形态</p></flexbox-item>
                  </flexbox>
                  <div class='wrapper trend' ref='wrapper'>
                    <div class='content'>
                        <flexbox class='list' v-for='(info,index) in result' :key='index'>
                          <flexbox-item :span="3"><p class='iss'>{{info.iss}}</p></flexbox-item>
                          <flexbox-item :span="4"><p>{{info.num1}} <font>{{info.num2}}</font></p></flexbox-item>
                          <flexbox-item :span="5"><p>{{info.star}}</p></flexbox-item>
                        </flexbox>
                    </div>
                  </div>
              </div>
          </div>
        </x-dialog>
      </div>

	</div>
</template>

<script>
    import { XHeader, Group, XDialog, Scroller, Tab, Selector, TabItem, TransferDomDirective as TransferDom, FlexboxItem, Flexbox } from 'vux'
    import BScroll from 'better-scroll'
const result = [
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'},
  {key: '1', iss: '68期', num1: '7 1', num2: '5 6 7', star: '15 小 单 龙'}
]
export default{
  directives: { TransferDom },
  props: ['isShow'],
  components: { XHeader, Group, XDialog, Scroller, Tab, TabItem, Selector, FlexboxItem, Flexbox },
  data () {
        return {
          MyIshow: this.isShow,
          index: 0,
          result: result,
          defaultValue: 'first',
          list: [{key: 'first', value: '第一球'}, {key: 'second', value: '第二球'}, {key: 'third', value: '第三球'}],
          activeTab: [],
          roadbox: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
        }
  },
  methods: {
        onItemClick (index) {
          this.activeTab = index
          if (index === 1) {
            setTimeout(() => {
              this.scroll = new BScroll(this.$refs.wrapper, {})
            }, 200)
          }
        }
  },
  watch: {   // prop属性的双向绑定
    isShow (val) {
      this.MyIshow = val
    },
    MyIshow (val) {
      this.$emit('on-result-change', val)
    }
  }
}
</script>


<style lang="scss">
	@import "~themes/trend/AskRoad"
</style>
