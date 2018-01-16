<template>
	<div class="home-wrapper">
		<!--头部-->
		<x-header class="header" :left-options="{showBack:false}">
			<div class="left-link">
				<router-link to="/register">注册/登陆</router-link>
			</div>
			{{title}}
			<router-link class="right-link" to="/promo"></router-link>
		</x-header>
		<!--第三方滑动内容块-->
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<!--轮播-->
				<swiper :list="list" :auto=true  :aspect-ratio="242/750"></swiper>
				<!--公告-->
				<div class="notice">
					<div class="icon"></div>
					<div class="notice-content">
						<marquee :interval=3000>
					      <marquee-item v-for="n in notice" :key="n.index" >{{n.text}}</marquee-item>
					    </marquee>
					</div>
				</div>
				<!--彩种列表-->
				<div class="lottery-list">
					<template v-for="row in lotteryRow">
						<home-lottery-row :scrollInit="scrollInit" :data="row.data"></home-lottery-row>	
					</template>
				</div>
			</div>
		</div>
		<!--底部导航-->
		<tabbar class="footer-bar">
			<tabbar-item selected>
				<span slot="label">购彩大厅</span>
				<img slot="icon" src="/static/images/lottery/icon-home.png"/>
				<img slot="icon-active" src="/static/images/lottery/icon-home-active.png"/>
			</tabbar-item>
			<tabbar-item>
				<span slot="label">开奖记录</span>
				<img slot="icon" src="/static/images/lottery/icon-lotteryRecord.png"/>
				<img slot="icon-active" src="/static/images/lottery/icon-lotteryRecord-active.png"/>
			</tabbar-item>
			<tabbar-item>
				<span slot="label">投注记录</span>
				<img slot="icon" src="/static/images/lottery/icon-orderRecord.png"/>
				<img slot="icon-active" src="/static/images/lottery/icon-orderRecord-active.png"/>
			</tabbar-item>
			<tabbar-item>
				<span slot="label">会员中心</span>
				<img slot="icon" src="/static/images/lottery/icon-mine.png"/>
				<img slot="icon-active" src="/static/images/lottery/icon-mine-active.png"/>
			</tabbar-item>
		</tabbar>
	</div>		
</template>

<script>
import {XHeader, Swiper, Marquee, MarqueeItem, Grid, GridItem, Tabbar, TabbarItem, Flexbox, FlexboxItem} from 'vux'
import HomeLotteryRow from '@/components/HomeLotteryRow'
import BScroll from 'better-scroll'

const list = [
  {url: 'javascript:', img: '/static/images/slide.jpg'},
  {url: 'javascript:', img: '/static/images/slide.jpg'},
  {url: 'javascript:', img: '/static/images/slide.jpg'}
]
const notice = [
  {text: '公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1', index: 1},
  {text: '公告2公告1公告1公告1公告1公告1公告1', index: 2},
  {text: '公告3公告1公告1公告1公告1公告1公告1', index: 3},
  {text: '公告4公告1公告1公告1公告1公告1公告1', index: 4}
]
const lotteryRow = [
  {name: 'row1',
    data: [
      {name: '时时彩', sName: 'ssc', lotteryType: '高频彩', lotteryImg: '/static/images/lottery/ssc.png', lotterySubType: ['重庆时时彩', '新疆时时彩'], noSubType: false},
      {name: 'PK拾', sName: 'pk10', lotteryType: '高频彩', lotteryImg: '/static/images/lottery/pk10.png', lotterySubType: [], noSubType: true}
    ]},
  {name: 'row2',
    data: [
      {name: '快3', sName: 'k3', lotteryType: '高频彩', lotteryImg: '/static/images/lottery/k3.png', lotterySubType: ['江苏快3', '湖北快3', '广西快3', '安徽快3'], noSubType: false},
      {name: '六合彩', sName: 'lhc', lotteryType: '低频彩', lotteryImg: '/static/images/lottery/lhc.png', lotterySubType: [], noSubType: true}
    ]},
  {name: 'row3',
    data: [
      {name: '排列3', sName: 'pl3', lotteryType: '高频彩', lotteryImg: '/static/images/lottery/pl3.png', lotterySubType: [], noSubType: true},
      {name: '福彩3D', sName: 'fc3d', lotteryType: '低频彩', lotteryImg: '/static/images/lottery/fc3d.png', lotterySubType: [], noSubType: true}
    ]},
  {name: 'row4',
    data: [
      {name: '快乐8', sName: 'kl8', lotteryType: '高频彩', lotteryImg: '/static/images/lottery/kl8.png', lotterySubType: [], noSubType: true},
      {name: '幸运28', sName: 'xy28', lotteryType: '高频彩', lotteryImg: '/static/images/lottery/xy28.png', lotterySubType: [], noSubType: true}
    ]}
]
export default{
  components: {
    XHeader,
    Swiper,
    Marquee,
    MarqueeItem,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    Flexbox,
    FlexboxItem,
    HomeLotteryRow
  },
  data () {
    return {
      title: '彩票平台',
      list: list,
      notice: notice,
      lotteryRow: lotteryRow
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
@import '../themes/home';
</style>