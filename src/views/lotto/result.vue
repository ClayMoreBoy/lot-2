<template>
	<div class="result-wrapper">
		<!--头部-->
		<x-header class="header" :left-options="{backText:' '}">
			{{title}}
			<div class='purse' @click='show_purse'><i class='icon-purse'></i>余额
			  <p>0.00</p>
			</div>
		</x-header>
		<!--投注结果：-->
		<div class="wrapper" ref="wrapper">
			<div class="content">
			  <p class='shadow'></p>
        <div class='list' v-for='rel in relList'>
          <h2 class='tit'> {{rel.title}} <span>{{rel.Etitle}} </span> <i class='pu'></i> </h2>
          <div class='cont'>
            <p class='hui time'>第2626412期  <span>2017-01-02 14:39:09</span></p>
            <p class='name'><font>万位@一</font> <span>撤单</span></p>
            <p class='price'>定位胆 1注 <br/> 10倍 10.00金币</p>
            <p class='hui'>注单编号：123132154315631354</p>
            <p class='hui'>单  &nbsp; &nbsp; &nbsp; 号： 645asdf454a564fadfa1146535454</p>
          </div>
        </div>
			</div>
		</div>
		<!--底部信息-->
		<div class='footer'>
		  <p class='info'>第 26565131 期 <span>共{{lotto_num}}单，23.00金币</span></p>
		  <router-link to='' class='link-1 link'>查看记录</router-link>
		  <router-link to='' class='link-2 link'>继续投注</router-link>
		</div>
	</div>
</template>

<script>
    import { XHeader, Grid, GridItem } from 'vux'
    import BScroll from 'better-scroll'
    import $ from 'jquery'
    const relList = [
      {title: '重庆时时彩', Etitle: 'chongqingshishicai'},
      {title: '重庆时时彩', Etitle: 'chongqingshishicai'}
    ]
export default{
  components: {XHeader, Grid, GridItem},
  data () {
        return {
          title: '投注结果',
          relList: relList,
          lotto_num: 3
        }
  },
  methods: {
        show_purse: function (e) {
          $('.purse p').toggle('slow')
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
	@import "~themes/lotto/result"
</style>
