<template>
	<div class="confirm-wrapper confirm-wrapper-2">
		<!--头部-->
		<x-header class="header" :left-options="{backText:' '}">
			{{title}}
		</x-header>
		<!--投注结果：-->

		<div class="wrapper" ref="wrapper">
			<div class="content">
        <p class='time'>距2018139期截止：<font>11:28:36</font></p>
        <p class='tit'><button class='close'>清空列表</button><button class='random'>随机一注</button> <font class='purse'>195.11</font></p>
        <ul class='list-box'>
            <li v-for='info in betlist'>
              <p class='left'></p>
              <div class='center'>
                  <p class='num'>{{info.num}}</p>
                  <font>后三直选复式 1000注</font>
                  <font>3倍  3000金币</font>
              </div>
              <div class='right'>
                  <p>投<input type='number' />倍</p>
                  <p>追<input type='number' />期</p>
                  <button class='follow'>追号</button>
              </div>
            </li>
         </ul>
			</div>
		</div>
		<!--底部信息-->
		<div class='footer'>
		  <p class='p'>平台协议</p>
		  <p class='p p-1'>共6注，投注23金币</p>
		  <button to='' class='link'>确认投注</button>
		</div>
	</div>
</template>

<script>
    import { XHeader, Grid, GridItem } from 'vux'
    import BScroll from 'better-scroll'
    const betlist = [
      { num: '5,1,5,8,9,4,3,0,1', money: '99,999,00' }, { num: '5,1,5,8,9,4,3,0,1', money: '99,999,00' }, { num: '5,1,5,8,9,4,3,0,1', money: '99,999,00' },
      { num: '5,1,5,8,9,4,3,0,1', money: '99,999,00' }, { num: '5,1,5,8,9,4,3,0,1', money: '99,999,00' }
    ]
export default{
  components: {XHeader, Grid, GridItem},
  data () {
        return {
          title: '重庆时时彩',
          betlist: betlist
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
	@import "~themes/lotto/confirm_bets"
</style>
