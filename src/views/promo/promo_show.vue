

<template>
	<div class="promo-show-wrapper">
		<!--头部-->
		<x-header class="header" :left-options="{backText:' '}">
			{{title}}			
		</x-header>
		<!--优惠列表：-->
 		<div class="cont-box">
 			<div class="container" >
 				<div class="tit">
 					<i class="icon-gift"></i>
 					<h1>{{cont_tit}}</h1>
 					<span>{{time}}</span>
 				</div>
 				<div class="cont">
 					{{cont}}
 				</div>
 			</div>
 		</div>
	</div>
</template>
 
<script>
    import { XHeader, Grid, GridItem } from 'vux'
    export default{
      components: {
        XHeader, Grid, GridItem
      },
      data () {
        return {
          title: '活动详情',
          cont_tit:"双12送豪礼",
          time:"活动时间：2017-12-5 至 2020-8-1 (进行中)",
          cont:"<p>活动一：澳门永利娱乐场 年终豪礼来相见！</p>"
        }
      }
    }


</script>

<style lang="scss">
	@import "../../themes/promo/promo";
</style>