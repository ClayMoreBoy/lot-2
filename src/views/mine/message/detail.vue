<template>
  <div class="message-wrapper">
    <!--头部-->
    <x-header class="header" :left-options="{backText:' '}">
     {{title}}
    </x-header>
    <!--第三方滑动内容块-->
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="message-detail-content">
          <card class="message-detail-item">
            <div slot="header">
              <div class="mes-det-hea">
                <div class="tit">官网无开奖</div>
                <div class="mes-time">公告时间：2017年12月20日    10:00:20 </div>
              </div>
            </div>
            <div slot="content" class="mes-det-con">
              <p>12月28日，茅台集团党委书记李保芳宣布，为实现2020年茅台酒基酒产量达到5.6万吨/年的目标，茅台集团于即日启动“十三五”中华片区6600吨茅台酒技改工程项目，但茅台短期内将不再扩大产能规模。</p>
              <p>李保芳介绍称，项目总投资35.59亿元，建设工期两年，到2019年年底，将形成6600吨新产能，茅台酒基酒产能将达到每年5.6万吨。但他表示，项目建成投产后，结合茅台核心区的生态环境承载能力考虑，短期内将不再扩大产能规模。他个人认为，“至少10年之内不会再扩产”。</p>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {XHeader, Tab, TabItem, Card} from 'vux'
  import BScroll from 'better-scroll'
  export default{
    components: {
      XHeader,
      Tab,
      TabItem,
      Card
    },
    data () {
      return {
        title: '公告详情',
        keyBoard: 0
      }
    },
    methods: {
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {})
      })
    }
  }
</script>

<style lang="scss">
  @import '~themes/mine/message/message';
</style>
