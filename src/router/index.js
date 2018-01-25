import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Promo from '@/views/promo/Promo'
import Cqssc from '@/views/lotto/ssc/cqssc/index'
import CqsscG from '@/views/lotto/ssc/cqssc/guan/index'
import CqsscX from '@/views/lotto/ssc/cqssc/xin/index'
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
