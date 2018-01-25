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
