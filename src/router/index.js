import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Promo from '@/views/promo/Promo'
import Cqssc from '@/views/lotto/ssc/cqssc/index'
import CqsscG from '@/views/lotto/ssc/cqssc/guan/index'
import CqsscX from '@/views/lotto/ssc/cqssc/xin/index'
import PromoShow from '@/views/promo/promo_show'
import Announce from '@/views/help/Announce'
import Instruction from '@/views/help/Instruction'
import Result from '@/views/lotto/result'
import Trend from '@/views/trend/trend'
import Confirm_bets from '@/views/lotto/ssc/confirm_bets'
import Confirm_bets_2 from '@/views/lotto/ssc/confirm_bets_2'
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
    {
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
    {
      path: '/promo/promo_show',
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
      path: '/lotto/result',
      name: 'Result',
      component: Result
    },
    {
      path: '/trend/trend',
      name: 'Trend',
      component: Trend
    },
    {
      path: '/lotto/confirm_bets',
      name: 'Confirm_bets',
      component: Confirm_bets
    },
    {
      path: '/lotto/confirm_bets_2',
      name: 'Confirm_bets_2',
      component: Confirm_bets_2
    }
  ]
})
