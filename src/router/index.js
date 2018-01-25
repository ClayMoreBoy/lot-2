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
import Mine from '@/views/mine/index'
import OnlineService from '@/views/mine/onlineservice/index'
import PromoShow from '@/views/promo/PromoShow'
import Announce from '@/views/help/Announce'
import Instruction from '@/views/help/Instruction'
import Result from '@/views/lotto/Result'
import Trend from '@/views/trend/Trend'
import ConfirmBets from '@/views/lotto/ssc/ConfirmBets'
import ConfirmBets2 from '@/views/lotto/ssc/ConfirmBets2'
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
    { // 在线客服路由
      path: '/mine/OnlineService',
      name: 'OnlineService',
      component: OnlineService
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
