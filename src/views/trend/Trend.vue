<template>
	<div class="trend-wrapper">
		<!--头部-->
		<x-header class="header" :left-options="{backText:' '}">
			{{title}}
		</x-header>
		<div class='wrapper trend' ref='wrapper'>
      <div class='content'>
         <flexbox class='issue'>
            <flexbox-item :span="5"><p class='left'>第068期<font>6,1,0,4,8</font></p></flexbox-item>
            <flexbox-item :span="7"><p class='right'>距69期截止：<font>05:29</font></p></flexbox-item>
         </flexbox>
         <div class='rel-box'>
            <flexbox class='tit'>
              <flexbox-item :span="3"><p>期号</p></flexbox-item>
              <flexbox-item :span="4"><p>开奖结果</p></flexbox-item>
              <flexbox-item :span="5"><p>五星形态</p></flexbox-item>
            </flexbox>
            <flexbox class='list' v-for='(info,index) in result' :key='index'>
              <flexbox-item :span="3"><p class='iss'>{{info.iss}}</p></flexbox-item>
              <flexbox-item :span="4"><p>{{info.num}}</p></flexbox-item>
              <flexbox-item :span="5"><p>{{info.star}}</p></flexbox-item>
            </flexbox>

            <group class='group group-1'>
                <cell title="两面遗漏排行" is-link  :border-intent="false"  :arrow-direction="showContent1 ? 'up' : 'down'"  @click.native="showContent1 = !showContent1"></cell>
                <div class="slide" :class="showContent1?'animate':''">
                   <p>总和-和：<font>2</font></p>
                   <p>第一球-单：<font>2</font></p>
                   <p>第二球-单：<font>2</font></p>
                   <p>第三球-单：<font>2</font></p>
                </div>
            </group>

            <group class='group group-2'>
              <cell title="两面路纸图" is-link  :border-intent="false"  :arrow-direction="showContent2 ? 'up' : 'down'"  @click.native="showContent2 = !showContent2"></cell>
              <div class="slide" :class="showContent2?'animate':''">
                <checker v-model="lis" default-item-class="lis-item" selected-item-class="lis-item-selected">
                  <checker-item :value="item" v-for="(item, index) in select" :key="index">{{item.value}}</checker-item>
                </checker>
                <p class='tit'>总和-单双 单（55） 双（65）</p>
                <div class='road-box'>
                  <scroller lock-y :scrollbar-x=false>
                      <ul class='box1'>
                          <li v-for='res in all_result'>
                            <span>{{res.one}}</span>
                            <span class='red'>{{res.double}}</span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </li>
                      </ul>
                  </scroller>
                </div>
              </div>
            </group>
         </div>
      </div>
		</div>

	</div>
</template>

<script>
    import { XHeader, FlexboxItem, Flexbox, Cell, CellBox, CellFormPreview, Group, Checker, CheckerItem, Scroller } from 'vux'
    import BScroll from 'better-scroll'
    const result = [
      {key: '1', iss: '68期', num: '7,1,5,3,4', star: '15 小 单 龙'},
      {key: '2', iss: '68期', num: '7,1,5,3,4', star: '15 小 单 龙'},
      {key: '3', iss: '68期', num: '7,1,5,3,4', star: '15 小 单 龙'},
      {key: '4', iss: '68期', num: '7,1,5,3,4', star: '15 小 单 龙'}
    ]
    const list2 = [
      {key: '1', tit: '总和-单双', cont: '111'},
      {key: '2', tit: '总和-大小', cont: '222'},
      {key: '3', tit: '总和-龙虎', cont: '333'}
    ]
export default{
  components: { XHeader, Flexbox, FlexboxItem, Cell, CellBox, CellFormPreview, Group, Checker, CheckerItem, Scroller },
  data () {
        return {
          title: '路纸图',
          result: result,
          showContent1: false,
          showContent2: false,
          list2: list2,
          lis: {key: '1', value: '总和-单双'},
          select: [{key: '1', value: '总和-单双'}, { key: '2', value: '总和-大小' }, { key: '3', value: '总和-龙虎' }],
          all_result: [
            {one: '单', double: ''}, {one: '', double: '双'}, {one: '单', double: ''}, {one: '', double: '双'}, {one: '单', double: ''},
            {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''},
            {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''},
            {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''},
            {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''},
            {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''},
            {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''}, {one: '单', double: ''}
          ]
        }
  },
  methods: {
        scrollInit: function () {
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {})
          })
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
	@import "~themes/trend/trend"
</style>
