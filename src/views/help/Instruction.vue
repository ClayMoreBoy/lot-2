<template>
	<div class="instruction-wrapper">
		<!--头部-->
		<x-header class="header" :left-options="{backText:' '}">
			{{title}}
		</x-header>
		<!--玩法列表：-->
 		<div class="wrapper" ref="wrapper">
 			<div class="content" >
 			  <ul class='list' id='list'>
 			    <li v-for="play in list">
 			      <p class="tit" @click='show_info'>{{play.tit}}</p>
 			      <div class="info">{{play.info}}</div>
 			    </li>
 			  </ul>
 			</div>
 		</div>
	</div>
</template>

<script>
    import { XHeader } from 'vux'
    import BScroll from 'better-scroll'
    import $ from 'jquery'
    const list = [
      {tit: '五星', info: '◎五星直选>>直选复式 从万位、千位、百位、十位和个位各选1个号码为一注，每位号码可从0～9全选，投注号码与开奖号码按位一致，即为中奖。※举例：投注方案：23456 开奖号码：23456，即中五星直选。◎五星直选>>直选单式 从万位、千位、百位、十位和个位各手动输入1个号码为一注，每位号码可从0～9全选，投注号码与开奖号码按位一致，即为中奖。'},
      {tit: '四星', info: '◎五星直选>>直选复式 从万位、千位、百位、十位和个位各选1个号码为一注，每位号码可从0～9全选，投注号码与开奖号码按位一致，即为中奖。※举例：投注方案：23456 开奖号码：23456，即中五星直选。◎五星直选>>直选单式 从万位、千位、百位、十位和个位各手动输入1个号码为一注，每位号码可从0～9全选，投注号码与开奖号码按位一致，即为中奖。'},
      {tit: '后三', info: '◎五星直选>>直选复式 从万位、千位、百位、十位和个位各选1个号码为一注，每位号码可从0～9全选，投注号码与开奖号码按位一致，即为中奖。※举例：投注方案：23456 开奖号码：23456，即中五星直选。◎五星直选>>直选单式 从万位、千位、百位、十位和个位各手动输入1个号码为一注，每位号码可从0～9全选，投注号码与开奖号码按位一致，即为中奖。'},
      {tit: '前三', info: '◎五星直选>>直选复式 从万位、千位、百位、十位和个位各选1个号码为一注，每位号码可从0～9全选，投注号码与开奖号码按位一致，即为中奖。※举例：投注方案：23456 开奖号码：23456，即中五星直选。◎五星直选>>直选单式 从万位、千位、百位、十位和个位各手动输入1个号码为一注，每位号码可从0～9全选，投注号码与开奖号码按位一致，即为中奖。'},
      {tit: '前二', info: '◎五星直选>>直选复式 从万位、千位、百位、十位和个位各选1个号码为一注，每位号码可从0～9全选，投注号码与开奖号码按位一致，即为中奖。※举例：投注方案：23456 开奖号码：23456，即中五星直选。◎五星直选>>直选单式 从万位、千位、百位、十位和个位各手动输入1个号码为一注，每位号码可从0～9全选，投注号码与开奖号码按位一致，即为中奖。'},
      {tit: '定位胆', info: '◎五星直选>>直选复式 从万位、千位、百位、十位和个位各选1个号码为一注，每位号码可从0～9全选，投注号码与开奖号码按位一致，即为中奖。※举例：投注方案：23456 开奖号码：23456，即中五星直选。◎五星直选>>直选单式 从万位、千位、百位、十位和个位各手动输入1个号码为一注，每位号码可从0～9全选，投注号码与开奖号码按位一致，即为中奖。'}
    ]
    export default{
      components: { XHeader },
      data () {
        return {
          title: '玩法说明',
          list: list
        }
      },
      methods: {
        show_info: function (e) {
          $(e.target).next().slideToggle()
        },
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
	@import "~themes/help/help"
</style>
