import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Promo from '@/views/promo/Promo'
import Cqssc from '@/views/lotto/ssc/cqssc/index'
import CqsscG from '@/views/lotto/ssc/cqssc/guan/index'
import CqsscX from '@/views/lotto/ssc/cqssc/xin/index'
import Xjssc from '@/views/lotto/ssc/xjssc/index'
import XjsscG from '@/views/lotto/ssc/xjssc/guan/index'
import XjsscX from '@/views/lotto/ssc/xjssc/xin/index'
import Pk10 from '@/views/lotto/pk10/index'
import Pk10G from '@/views/lotto/pk10/guan/index'
import Pk10X from '@/views/lotto/pk10/xin/index'
import Jsk3 from '@/views/lotto/k3/jsk3/index'
import Jsk3G from '@/views/lotto/k3/jsk3/guan/index'
import Jsk3X from '@/views/lotto/k3/jsk3/xin/index'
import Hbk3 from '@/views/lotto/k3/hbk3/index'
import Hbk3G from '@/views/lotto/k3/hbk3/guan/index'
import Hbk3X from '@/views/lotto/k3/hbk3/xin/index'
import Gxk3 from '@/views/lotto/k3/gxk3/index'
import Gxk3G from '@/views/lotto/k3/gxk3/guan/index'
import Gxk3X from '@/views/lotto/k3/gxk3/xin/index'
import Ahk3 from '@/views/lotto/k3/ahk3/index'
import Ahk3G from '@/views/lotto/k3/ahk3/guan/index'
import Ahk3X from '@/views/lotto/k3/ahk3/xin/index'
import Kl8 from '@/views/lotto/kl8/index'
import Kl10 from '@/views/lotto/kl10/index'
import Pl3 from '@/views/lotto/pl3/index'
import Xy28 from '@/views/lotto/xy28/index'
import Lhc from '@/views/lotto/lhc/index'
import Mine from '@/views/mine/index'
import OnlineService from '@/views/mine/onlineservice/index'
import Setting from '@/views/mine/setting/index'
import UserAccount from '@/views/mine/setting/userAccount'
import SecurityCenter from '@/views/mine/setting/securityCenter'
import Recharge from '@/views/mine/wallet/recharge'
import Amount from '@/views/mine/wallet/recharge/amount'
import Bankcard from '@/views/mine/wallet/bankcard/index'
import verifyCard from '@/views/mine/wallet/bankcard/verifyCard'
import AddBankcard from '@/views/mine/wallet/bankcard/addBankcard'
import Warning from '@/views/mine/wallet/bankcard/warning'
import Message from '@/views/mine/message/index'
import Share from '@/views/mine/share/index'
import SetPassword from '@/views/mine/safe/setPassword'
import MessageDetail from '@/views/mine/message/detail'
import PromoShow from '@/views/promo/PromoShow'
import Announce from '@/views/help/Announce'
import Instruction from '@/views/help/Instruction'
import Result from '@/views/lotto/Result'
import Trend from '@/views/trend/Trend'
import ConfirmBets from '@/views/lotto/ConfirmBets'
import ConfirmBets2 from '@/views/lotto/ConfirmBets2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/promo',
      name: 'Promo',
      component: Promo
    },
    { // 重庆时时彩路由
      path: '/lotto/cqssc',
      name: 'Cqssc',
      component: Cqssc,
      children: [
        {
          path: 'guan',
          name: 'CqsscG',
          component: CqsscG
        },
        {
          path: 'xin',
          name: 'CqssxX',
          component: CqsscX
        }
      ]
    },
    { // 新疆时时彩路由
      path: '/lotto/xjssc',
      name: 'Xjssc',
      component: Xjssc,
      children: [
        {
          path: 'guan',
          name: 'XjsscG',
          component: XjsscG
        },
        {
          path: 'xin',
          name: 'XjsscX',
          component: XjsscX
        }
      ]
    },
    { // 北京快乐8
      path: '/lotto/kl8',
      name: 'Kl8',
      component: Kl8
    },
    { // 广东快乐10
      path: '/lotto/kl10',
      name: 'Kl10',
      component: Kl10
    },
    { // 六合彩
      path: '/lotto/lhc',
      name: 'Lhc',
      component: Lhc
    },
    { // 体彩排列3
      path: '/lotto/pl3',
      name: 'Pl3',
      component: Pl3
    },
    { // 幸运28
      path: '/lotto/xy28',
      name: 'xy28',
      component: Xy28
    },
    { // 北京PK10路由
      path: '/lotto/pk10',
      name: 'Pk10',
      component: Pk10,
      children: [
        {
          path: 'guan',
          name: 'Pk10G',
          component: Pk10G
        },
        {
          path: 'xin',
          name: 'Pk10X',
          component: Pk10X
        }
      ]
    },
    { // 江苏快3路由
      path: '/lotto/jsk3',
      name: 'Jsk3',
      component: Jsk3,
      children: [
        {
          path: 'guan',
          name: 'Jsk3G',
          component: Jsk3G
        },
        {
          path: 'xin',
          name: 'Jsk3X',
          component: Jsk3X
        }
      ]
    },
    { // 湖北快3路由
      path: '/lotto/hbk3',
      name: 'Hbk3',
      component: Hbk3,
      children: [
        {
          path: 'guan',
          name: 'Hbk3G',
          component: Hbk3G
        },
        {
          path: 'xin',
          name: 'Hbk3X',
          component: Hbk3X
        }
      ]
    },
    { // 广西快3路由
      path: '/lotto/gxk3',
      name: 'Gxk3',
      component: Gxk3,
      children: [
        {
          path: 'guan',
          name: 'Gxk3G',
          component: Gxk3G
        },
        {
          path: 'xin',
          name: 'Gxk3X',
          component: Gxk3X
        }
      ]
    },
    { // 安徽快3路由
      path: '/lotto/ahk3',
      name: 'Ahk3',
      component: Ahk3,
      children: [
        {
          path: 'guan',
          name: 'Ahk3G',
          component: Ahk3G
        },
        {
          path: 'xin',
          name: 'Ahk3X',
          component: Ahk3X
        }
      ]
    },
    { // 个人中心路由
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/mine/share',
      name: 'Share',
      component: Share
    },
    { // 钱包、支付
      path: '/mine/wallet/recharge',
      name: 'Recharge',
      component: Recharge
    },
    { // 支付金额
      path: '/mine/wallet/amount',
      name: 'Amount',
      component: Amount
    },
    { // 银行卡
      path: '/mine/wallet/bankcard',
      name: 'Bankcard',
      component: Bankcard
    },
    { // 添加银行卡
      path: '/mine/wallet/addBankcard',
      name: 'AddBankcard',
      component: AddBankcard
    },
    { // 认证银行卡
      path: '/mine/wallet/verifyCard',
      name: 'verifyCard',
      component: verifyCard
    },
    { // 未绑定银行卡提示
      path: '/mine/wallet/warning',
      name: 'Warning',
      component: Warning
    },
    { // 在线客服路由
      path: '/mine/OnlineService',
      name: 'OnlineService',
      component: OnlineService
    },
    { // 设置路由
      path: '/mine/setting',
      name: 'Setting',
      component: Setting
    },
    { // 设置资金密码
      path: '/mine/safe/setPassword',
      name: 'SetPassword',
      component: SetPassword
    },
    { // 设置个人资料路由
      path: '/mine/setting/userAccount',
      name: 'UserAccount',
      component: UserAccount
    },
    { // 安全中心
      path: '/mine/setting/securityCenter',
      name: 'SecurityCenter',
      component: SecurityCenter
    },
    { // 消息路由
      path: '/mine/message',
      name: 'Message',
      component: Message
    },
    { // 消息详情路由
      path: '/mine/messageDetail',
      name: 'MessageDetail',
      component: MessageDetail
    },
    {
      path: '/promo/PromoShow',
      name: 'PromoShow',
      component: PromoShow
    },
    {
      path: '/help/Announce',
      name: 'Announce',
      component: Announce
    },
    {
      path: '/help/Instruction',
      name: 'Instruction',
      component: Instruction
    },
    {
      path: '/lotto/Result',
      name: 'Result',
      component: Result
    },
    {
      path: '/trend/Trend',
      name: 'Trend',
      component: Trend
    },
    {
      path: '/lotto/ConfirmBets',
      name: 'ConfirmBets',
      component: ConfirmBets
    },
    {
      path: '/lotto/ConfirmBets2',
      name: 'ConfirmBets2',
      component: ConfirmBets2
    }
  ]
})
