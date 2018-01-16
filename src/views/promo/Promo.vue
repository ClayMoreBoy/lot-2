<template>
	<div class="promo-wrapper">
		<!--头部-->
		<x-header class="header" :left-options="{backText:' '}">
			{{title}}			
		</x-header>
		<!--优惠列表：-->
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<grid :cols="1" class="promo-list">
					<grid-item v-for="info in promos" :key='info.name'>
						<a :href="info.url">
							<img :src="info.img">
			        		<p class="tit">{{info.tit}}<i class="pub_arrow"></i>
			        			<span>{{info.time}}</span>
			        		</p>
			        	</a>
					</grid-item>
				</grid>
			</div>
		</div>
	</div>
</template>
 
<script>
    import { XHeader, Grid, GridItem } from 'vux'
    import BScroll from 'better-scroll'
const promos = [
    {tit: '首存优惠赠送', time: '活动时间：2017-12-20 至 2017-12-23', img: '/static/images/promo/promo-1.jpg', url: '#/promo/promo_show'},
    {tit: '首存优惠赠送1', time: '活动时间：2017-12-20 至 2017-12-23', img: '/static/images/promo/promo-1.jpg', url: '#/promo/promo_show'},
    {tit: '首存优惠赠送1', time: '活动时间：2017-12-20 至 2017-12-23', img: '/static/images/promo/promo-1.jpg', url: '#/promo/promo_show'},
    {tit: '首存优惠赠送1', time: '活动时间：2017-12-20 至 2017-12-23', img: '/static/images/promo/promo-1.jpg', url: '#/promo/promo_show'},
    {tit: '首存优惠赠送1', time: '活动时间：2017-12-20 至 2017-12-23', img: '/static/images/promo/promo-1.jpg', url: '#/promo/promo_show'}
]

export default{
  components: {XHeader, Grid, GridItem},
  data () {
        return {
          title: '精彩活动',
          promos: promos
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
	@import "~themes/promo/promo";
</style>