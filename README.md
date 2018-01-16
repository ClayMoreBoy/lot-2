# lottery-v2

> lottery version 2

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

``` bash
# src 目录结构
  assets      —— 资源，图片等
  components  —— 自定义组件，第三方组件
  router      —— 路由设置
  themes      —— 样式文件
    award     —— 开奖记录
    bet       —— 购彩记录
    help      —— 帮助中心，玩法介绍
    lotto     —— 彩票投注页面
      11x5      —— 11选5（广东11选5，江西11选5等）
      k3        —— 快3（江苏快3，湖北快3等）
      lhc       —— 六合彩（香港六合彩）
      pk10      —— PK拾（北京PK10，幸运飞艇等）
      sfc       —— 十分彩（重庆幸运农场，广东快乐十分等）
      ssc       —— 时时彩（重庆时时彩，新疆时时彩等）
      other     —— 其他彩票（幸运28，北京快乐8，福彩3D，体彩排列3）
    mine        —— 我的
      setting     —— 设置
      game        —— 游戏记录
      safe        —— 安全中心
      share       —— 推荐好友，分享礼金
      wallet      —— 钱包管理
        recharge    —— 充值，充值记录等
        withdraw    —— 提现
        bankcard    —— 银行卡
        bill        —— 账户（账目）明细
      feedback    —— 意见反馈
      message     —— 消息中心
    passport  —— 通行证（注册、登录，找回密码等）
    promo     —— 优惠活动
    trend     —— 走势图
  views
    同 themes
```