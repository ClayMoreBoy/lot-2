<template>
	<div class="announce-wrapper">
		<!--头部-->
		<x-header class="header" :left-options="{backText:' '}">
			{{title}}
		</x-header>
		<!--优惠列表：-->
 		<div class="wrapper" ref="wrapper">
 			<div class="content" >{{cont}}</div>
 		</div>
	</div>
</template>

<script>
    import { XHeader } from 'vux'
    import BScroll from 'better-scroll'
    export default{
      components: { XHeader },
      data () {
        return {
          title: '平台服务申明',
          cont: '一.平台游戏规则须知 1.凡是在12月1日-12月24日进行存款游戏的会员，系统将在12月25日圣诞节当天随机派送上千万的彩金回馈澳门永利娱乐场的新老会员!2. 此项活动无需申请，由系统自动派发，金额随机18-1888元不等，人人有机会获取幸运大奖！3. 存款金额	彩金金额流水限制赠送时间 100元以上随机派送1倍	12月25号当日派送. 二. 有关责任和争端处理 1. 凡是在12月1日-12月24日进行存款游戏的会员，系统将在12月25日圣诞节当天随机派送上千万的彩金回馈澳门永利娱乐场的新老会员！2.此项活动无需申请，由系统自动派发，金额随机18-1888元不等，人人有机会获取幸运大奖！3. 存款金额彩金金额流水限制赠送时间100元以上随机派送1倍12月25号当日派送 '
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
	@import "~themes/help/help"
</style>
