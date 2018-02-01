<template>
  <div class="share-wrapper">
    <!--头部-->
    <x-header class="header" :left-options="{backText:' '}">
      {{title}}
    </x-header>
    <!--第三方滑动内容块-->
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="date">
          <flexbox :gutter="0" wrap="wrap">
            <flexbox-item :span="3/10"><div class="tit">前一天 <p>礼金￥0.00</p></div></flexbox-item>
            <flexbox-item :span="4/10"><div class="tit rili">
                <datetime class="datebox" @on-change="change"  :show.sync="visibility" v-model="dateValue"></datetime>
              <img src="/static/images/mine/date.png" alt='日期'><p>礼金￥0.00</p></div></flexbox-item>
            <flexbox-item :span="3/10"><div class="tit brd"></div></flexbox-item>
          </flexbox>
        </div>
        <x-table :cell-bordered="false" :content-bordered="false" >
          <thead>
            <tr>
              <th>用户</th>
              <th>有效投注额</th>
              <th>礼金</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>www102</td><td>5000.00</td> <td>50.00</td><td>正常</td>
            </tr>
            <tr>
              <td>www102</td><td>5000.00</td> <td>50.00</td><td>正常</td>
            </tr>
            <tr>
              <td>www102</td><td>5000.00</td> <td>50.00</td><td>正常</td>
            </tr>
            <tr>
              <td>www102</td><td>5000.00</td> <td>50.00</td><td>正常</td>
            </tr>
          </tbody>
        </x-table>

        <div class="no-record">
          <img src="/static/images/mine/no-record.png" alt="没有记录">
          <p>您暂无相关记录</p>
        </div>

      </div>
    </div>

    <!-- 合计金额： -->
    <div class="total">合计：礼金总额￥0.00元</div>

  </div>
</template>

<script>
  import { XHeader, XTable, Flexbox, FlexboxItem, Datetime, Group, XButton } from 'vux'
  import BScroll from 'better-scroll'

  export default{
    components: {
      XHeader, XTable, Flexbox, FlexboxItem, Datetime, Group, XButton
    },
    data () {
      return {
        title: '分享礼金',
        visibility: false,
        dateValue: '2108-2-1'
      }
    },
    methods: {
      change (value) {
        console.log('change', value)
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
  @import '~themes/mine/share/share';
</style>
