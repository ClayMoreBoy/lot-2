<template>
	<div class="promo-wrapper">
		<!--头部-->
		<x-header class="header" :left-options="{backText:' '}">
			{{title}}			
		</x-header>
		<!--优惠列表：-->
		<grid :cols="1" class="promo-list">
			<grid-item v-for="info in promo" :key='info.name'>
				<img :src="info.img">
        		<p class="tit">{{info.tit}}<i class="pub_arrow"></i>
        			<span>{{info.time}}</span>
        		</p>	
			</grid-item>
		</grid>
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
          title: '精彩活动',
          promo: promo
        }
      }
    }
const promo = [
    {tit: '首存优惠赠送', time: '活动时间：2017-12-20 至 2017-12-23', img: '/static/images/promo/promo-1.jpg'},
    {tit: '首存优惠赠送1', time: '活动时间：2017-12-20 至 2017-12-23', img: '/static/images/promo/promo-1.jpg'}
]
</script>

<style lang="scss">
	@import "../themes/promo";
</style>